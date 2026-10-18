import React, { useState, useEffect, useMemo } from "react";
import confetti from "canvas-confetti";
import {
  ShoppingBag,
  Plus,
  Minus,
  Trash2,
  Send,
  Check,
  AlertCircle,
  RefreshCw,
  Search,
  Sparkles,
  Receipt,
  UtensilsCrossed,
  Clock,
  Phone,
  MapPin,
  FileText,
  Flame,
  Car,
  CheckCircle2,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

function getOrderStatusVisual(status) {
  const normalizedStatus = String(status)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[_-]/g, " ");

  if (
    normalizedStatus.includes("prepar") ||
    normalizedStatus.includes("cocin")
  ) {
    return { Icon: Flame, color: "text-cometoRed" };
  }
  if (
    normalizedStatus.includes("camino") ||
    normalizedStatus.includes("ruta") ||
    normalizedStatus.includes("repart") ||
    normalizedStatus.includes("transit")
  ) {
    return { Icon: Car, color: "text-cometoBlue-dark" };
  }
  if (
    normalizedStatus.includes("entreg") ||
    normalizedStatus.includes("complet") ||
    normalizedStatus.includes("deliver")
  ) {
    return { Icon: CheckCircle2, color: "text-emerald-600" };
  }
  if (
    normalizedStatus.includes("recibid") ||
    normalizedStatus.includes("received") ||
    normalizedStatus.includes("pendient") ||
    normalizedStatus.includes("pending")
  ) {
    return { Icon: FileText, color: "text-cometoBlue-dark" };
  }

  return { Icon: Clock, color: "text-charcoal/60" };
}

const API_BASE_URL = (
  import.meta.env.VITE_BACKEND_URL || "https://cometocino-backend.onrender.com"
).replace(/\/+$/, "");

const apiUrl = (path) => `${API_BASE_URL}${path}`;
const TRACKING_INPUT_KEY = "cometocino:tracking-input";
const TRACKING_ORDER_KEY = "cometocino:tracking-order-id";

export default function OrderSection() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [storeStatus, setStoreStatus] = useState(null);
  const [storeStatusLoading, setStoreStatusLoading] = useState(true);
  const [storeStatusError, setStoreStatusError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // Cart state: { [productId]: quantity }
  const [cart, setCart] = useState({});

  // Customer info form
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [currentLocation, setCurrentLocation] = useState(null);
  const [locationStatus, setLocationStatus] = useState("");
  const [orderNotes, setOrderNotes] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderSubmitting, setOrderSubmitting] = useState(false);
  const [orderError, setOrderError] = useState("");
  const [createdOrderId, setCreatedOrderId] = useState("");
  const [trackingInput, setTrackingInput] = useState(
    () => sessionStorage.getItem(TRACKING_INPUT_KEY) ?? "",
  );
  const [trackingOrderId, setTrackingOrderId] = useState(
    () => sessionStorage.getItem(TRACKING_ORDER_KEY) ?? "",
  );
  const [trackingAttempt, setTrackingAttempt] = useState(0);
  const [trackedOrder, setTrackedOrder] = useState(null);
  const [trackingLoading, setTrackingLoading] = useState(false);
  const [trackingError, setTrackingError] = useState("");

  const shareCurrentLocation = () => {
    if (!navigator.geolocation) {
      setLocationStatus("Este navegador no permite compartir ubicación.");
      return;
    }

    setLocationStatus("Solicitando permiso de ubicación...");
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        setCurrentLocation({
          latitude: coords.latitude,
          longitude: coords.longitude,
        });
        setLocationStatus("Ubicación obtenida.");
      },
      (geoError) => {
        const message =
          geoError.code === geoError.PERMISSION_DENIED
            ? "Permiso denegado. Puedes habilitarlo en los ajustes del navegador."
            : geoError.code === geoError.TIMEOUT
              ? "No se pudo obtener la ubicación a tiempo. Inténtalo nuevamente."
              : "No se pudo obtener la ubicación. Verifica los permisos del navegador.";
        setLocationStatus(message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 60000 },
    );
  };

  const fetchProducts = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(apiUrl("/api/v1/products"));

      if (!response.ok) {
        throw new Error(
          `Error en el servidor (${response.status}) al consultar productos.`,
        );
      }

      const contentType = response.headers.get("content-type");
      if (contentType && !contentType.includes("application/json")) {
        throw new Error("La respuesta del servidor no tiene formato JSON.");
      }

      const json = await response.json();
      const rawProducts = Array.isArray(json?.data)
        ? json.data
        : Array.isArray(json)
          ? json
          : null;

      if (rawProducts && Array.isArray(rawProducts)) {
        // Exclusivamente obtenemos el id, nombre, descripcion y el precio
        const cleanProducts = rawProducts.map((item) => ({
          // MongoDB ObjectId values must stay strings; converting them to Number
          // makes the cart unable to match the product again.
          id: String(item._id ?? item.id),
          img: item.imageUrl,
          nombre: item.name || item.nombre || `Producto #${item.id}`,
          descripcion: item.description || item.descripcion || "",
          precio: Number(
            item.salePrice ?? item.actual_sale_price ?? item.precio ?? 0,
          ),
          disponible: item.active ?? item.disponible ?? true,
        }));

        setProducts(cleanProducts);
      } else {
        setError("Ups! Algo salió mal al intentar obtener los productos.");
      }
    } catch (err) {
      console.error("Error en fetchProducts:", err);
      setError(
        err.message || "Ups! Algo salió mal al intentar obtener los productos.",
      );
    } finally {
      setLoading(false);
    }
  };

  const fetchStoreStatus = async () => {
    setStoreStatusLoading(true);
    setStoreStatusError("");

    try {
      const response = await fetch(apiUrl("/api/v1/store/status"), {
        cache: "no-store",
      });

      const contentType = response.headers.get("content-type");
      if (contentType && !contentType.includes("application/json")) {
        throw new Error("Respuesta no válida del servidor.");
      }

      const result = await response.json().catch(() => ({}));
      if (!response.ok || !result.data) {
        throw new Error(
          result.error || "No se pudo consultar el horario de atención.",
        );
      }
      setStoreStatus(result.data);
    } catch (err) {
      console.error("Error en fetchStoreStatus:", err);
      setStoreStatus(null);
      setStoreStatusError(err.message || "No se pudo consultar el horario.");
    } finally {
      setStoreStatusLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchStoreStatus();
    const refreshId = window.setInterval(fetchStoreStatus, 60_000);
    return () => window.clearInterval(refreshId);
  }, []);

  useEffect(() => {
    if (!trackingOrderId) return undefined;

    let active = true;
    setTrackedOrder(null);
    const fetchOrderStatus = async () => {
      setTrackingLoading(true);
      setTrackingError("");

      try {
        const response = await fetch(
          apiUrl(`/api/v1/order/${encodeURIComponent(trackingOrderId)}`),
          { cache: "no-store" },
        );
        const result = await response.json().catch(() => ({}));
        if (!response.ok) {
          throw new Error(result.error || "No se pudo consultar esta orden.");
        }

        const order =
          result.data?.order ?? result.data ?? result.order ?? result;
        const status = order.status ?? order.orderStatus ?? order.estado;
        if (!status) {
          throw new Error(
            "La respuesta del servidor no incluye el estado de la orden.",
          );
        }

        if (active) {
          setTrackedOrder({
            id: String(order._id ?? order.id ?? trackingOrderId),
            status:
              typeof status === "string"
                ? status
                : (status.label ?? String(status)),
            updatedAt:
              order.updatedAt ?? order.updated_at ?? order.statusUpdatedAt,
          });
        }
      } catch (err) {
        console.error("Error en fetchOrderStatus:", err);
        if (active) {
          setTrackingError(
            err.message || "No se pudo consultar el estado de la orden.",
          );
        }
      } finally {
        if (active) setTrackingLoading(false);
      }
    };

    fetchOrderStatus();
    const refreshId = window.setInterval(fetchOrderStatus, 30_000);
    return () => {
      active = false;
      window.clearInterval(refreshId);
    };
  }, [trackingOrderId, trackingAttempt]);

  // Filter products by search term
  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) return products;
    const query = searchQuery.toLowerCase();
    return products.filter(
      (p) =>
        p.nombre.toLowerCase().includes(query) ||
        p.descripcion.toLowerCase().includes(query) ||
        String(p.id).includes(query),
    );
  }, [products, searchQuery]);

  // Cart operations
  const addToCart = (productId) => {
    setCart((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1,
    }));
  };

  const removeFromCart = (productId) => {
    setCart((prev) => {
      const current = prev[productId] || 0;
      if (current <= 1) {
        const updated = { ...prev };
        delete updated[productId];
        return updated;
      }
      return {
        ...prev,
        [productId]: current - 1,
      };
    });
  };

  const deleteFromCart = (productId) => {
    setCart((prev) => {
      const updated = { ...prev };
      delete updated[productId];
      return updated;
    });
  };

  const clearCart = () => {
    setCart({});
  };

  // Cart calculations
  const cartItems = useMemo(() => {
    return Object.entries(cart)
      .map(([idStr, quantity]) => {
        const product = products.find((p) => p.id === idStr);
        if (!product) return null;
        return {
          ...product,
          quantity,
          subtotal: product.precio * quantity,
        };
      })
      .filter(Boolean);
  }, [cart, products]);

  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.subtotal, 0);

  // Submit the order to the API
  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    if (
      cartItems.length === 0 ||
      orderSubmitting ||
      !storeStatus?.acceptingOrders
    )
      return;

    setOrderSubmitting(true);
    setOrderError("");
    setOrderPlaced(false);

    try {
      const response = await fetch(apiUrl("/api/v1/order"), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          clientName: customerName.trim(),
          phoneNumber: customerPhone.replace(/[^\d+]/g, ""),
          products: cartItems.map(({ id, quantity }) => ({
            productId: id,
            quantity,
          })),
          address: currentLocation
            ? `https://maps.google.com/?q=${currentLocation.latitude},${currentLocation.longitude}`
            : "",
          notes: orderNotes,
        }),
      });

      const result = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(result.error || "No se pudo registrar el pedido.");
      }

      const createdOrder =
        result.data?.order ?? result.data ?? result.order ?? result;
      const createdOrderId =
        createdOrder._id ?? createdOrder.id ?? createdOrder.orderId;
      if (createdOrderId) {
        const id = String(createdOrderId);
        setCreatedOrderId(id);
        setTrackingInput(id);
        setTrackingOrderId(id);
        sessionStorage.setItem(TRACKING_INPUT_KEY, id);
        sessionStorage.setItem(TRACKING_ORDER_KEY, id);
        setTrackingAttempt((attempt) => attempt + 1);
      } else {
        setCreatedOrderId("");
      }

      confetti({
        particleCount: 90,
        spread: 75,
        origin: { y: 0.6 },
        colors: ["#F6CE6E", "#D94A26", "#7298D7", "#BE9A6B"],
      });
      const locationUrl = currentLocation
        ? `https://maps.google.com/?q=${currentLocation.latitude},${currentLocation.longitude}`
        : "";
      const orderLines = cartItems.map(
        (item) =>
          `• ${item.nombre} x${item.quantity} — $${item.subtotal.toLocaleString("es-CL")} CLP`,
      );
      const whatsappMessage = [
        "Hola, acabo de pedir: ",
        ...orderLines,
        `*Total:* $${totalPrice.toLocaleString("es-CL")} CLP`,
        "Quiero coordinar el pago y confirmar los detalles de entrega",
      ]
        .filter(Boolean)
        .join("\n");
      const whatsappUrl = `https://wa.me/56949869112?text=${encodeURIComponent(whatsappMessage)}`;

      setOrderPlaced(true);
      setCart({});
      window.setTimeout(() => window.location.assign(whatsappUrl), 2000);
    } catch (err) {
      setOrderError(err.message || "No se pudo conectar con el servidor.");
      fetchStoreStatus();
    } finally {
      setOrderSubmitting(false);
    }
  };

  const handleTrackOrder = (event) => {
    event.preventDefault();
    const id = trackingInput.trim();
    if (!id) return;
    sessionStorage.setItem(TRACKING_INPUT_KEY, id);
    sessionStorage.setItem(TRACKING_ORDER_KEY, id);
    setTrackingOrderId(id);
    setTrackingAttempt((attempt) => attempt + 1);
  };

  const trackingStatusVisual = trackedOrder
    ? getOrderStatusVisual(trackedOrder.status)
    : null;
  const TrackingStatusIcon = trackingStatusVisual?.Icon;

  return (
    <section
      id="pedidos"
      className="py-24 bg-[#F7F3EB] relative overflow-hidden border-t border-craft-200"
    >
      {/* Decorative ambient elements */}
      <div className="absolute top-10 left-0 w-80 h-80 bg-cometoYellow/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-cometoRed/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-craft-300/60 text-charcoal text-xs font-black uppercase tracking-wider mb-4 border border-craft-400/40">
              <ShoppingBag className="w-3.5 h-3.5 text-cometoRed" />
              <span>Realizar Pedido Directo</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black text-charcoal mb-4 tracking-tight">
              Haz tu Pedido Online
            </h2>
            <p className="text-base sm:text-lg text-charcoal/75">
              Consulta nuestra carta disponible en tiempo real, elige tus
              favoritos y envíanos tu pedido al instante.
            </p>
          </div>
        </ScrollReveal>

        {/* Main Grid: Products List & Order Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Products Column (8 cols on lg) */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col gap-6">
            {/* Search Bar & Endpoint Status Bar */}
            <div className="bg-flour p-4 sm:p-5 rounded-2xl border border-craft-300 shadow-sm flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-charcoal/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Buscar producto por nombre o descripción..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-craft-50 border border-craft-300 rounded-xl text-sm text-charcoal placeholder-charcoal/40 focus:outline-none focus:ring-2 focus:ring-cometoBlue focus:bg-flour transition-all"
                />
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-3 text-xs text-charcoal/70">
                <span className="font-semibold">
                  {products.length}{" "}
                  {products.length === 1
                    ? "producto disponible"
                    : "productos disponibles"}
                </span>
                <button
                  onClick={fetchProducts}
                  disabled={loading}
                  title="Actualizar listado de productos"
                  className="p-2.5 rounded-xl border border-craft-300 hover:bg-craft-100 text-charcoal transition-all disabled:opacity-50"
                  aria-label="Recargar productos"
                >
                  <RefreshCw
                    className={`w-4 h-4 ${loading ? "animate-spin text-cometoBlue" : ""}`}
                  />
                </button>
              </div>
            </div>

            {/* Error Notification */}
            {error && (
              <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold">
                      Error al sincronizar productos
                    </h4>
                    <p className="text-xs text-amber-800 mt-1">{error}</p>
                  </div>
                </div>
                <button
                  onClick={fetchProducts}
                  className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold rounded-xl transition-all shrink-0 shadow-sm"
                >
                  Reintentar
                </button>
              </div>
            )}

            {/* Loading Skeletons */}
            {loading && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[1, 2, 3, 4, 5, 6].map((sk) => (
                  <div
                    key={sk}
                    className="p-6 rounded-2xl bg-flour border border-craft-300 animate-pulse flex flex-col justify-between h-48"
                  >
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <div className="h-4 bg-craft-200 rounded w-16" />
                        <div className="h-5 bg-craft-200 rounded w-20" />
                      </div>
                      <div className="h-6 bg-craft-200 rounded w-3/4 mb-2" />
                      <div className="h-3 bg-craft-200 rounded w-full mb-1.5" />
                      <div className="h-3 bg-craft-200 rounded w-4/5" />
                    </div>
                    <div className="h-10 bg-craft-200 rounded-xl mt-4" />
                  </div>
                ))}
              </div>
            )}

            {/* Products List ( only id, nombre, descripcion, precio e imageUrl) */}
            {!loading && filteredProducts.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredProducts.map((product) => {
                  const qtyInCart = cart[product.id] || 0;

                  return (
                    <div
                      key={product.id}
                      className="p-6 rounded-2xl bg-flour border border-craft-300 hover:border-craft-400 hover:shadow-warm transition-all duration-200 flex flex-col justify-between group relative"
                    >
                      <div>
                        {product.img && (
                          <div
                            className="group/image relative mb-5 aspect-[16/10] overflow-hidden rounded-xl bg-craft-100 border border-craft-200/80 cursor-zoom-in"
                            onMouseMove={(event) => {
                              const bounds =
                                event.currentTarget.getBoundingClientRect();
                              const x =
                                ((event.clientX - bounds.left) / bounds.width) *
                                50;
                              const y =
                                ((event.clientY - bounds.top) / bounds.height) *
                                10;
                              event.currentTarget.style.setProperty(
                                "--zoom-x",
                                `${x}%`,
                              );
                              event.currentTarget.style.setProperty(
                                "--zoom-y",
                                `${y}%`,
                              );
                            }}
                            onMouseLeave={(event) => {
                              event.currentTarget.style.setProperty(
                                "--zoom-x",
                                "50%",
                              );
                              event.currentTarget.style.setProperty(
                                "--zoom-y",
                                "50%",
                              );
                            }}
                          >
                            <img
                              src={product.img}
                              alt={product.nombre}
                              loading="lazy"
                              className="h-full w-full object-contain object-center transition-transform duration-150 ease-out group-hover/image:scale-[1.8]"
                              style={{
                                transformOrigin:
                                  "var(--zoom-x, 50%) var(--zoom-y, 50%)",
                              }}
                            />
                          </div>
                        )}
                        {/* ID & Price Header */}
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <span className="text-lg font-serif font-black text-charcoal">
                            ${product.precio.toLocaleString("es-CL")} CLP
                          </span>
                        </div>

                        {/* Product Name */}
                        <h3 className="text-lg font-serif font-bold text-charcoal capitalize mb-2 group-hover:text-craft-900 transition-colors">
                          {product.nombre}
                        </h3>

                        {/* Product Description */}
                        {product.descripcion && (
                          <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed mb-6">
                            {product.descripcion}
                          </p>
                        )}
                      </div>

                      {/* Quantity Controls / Add to Order */}
                      {product.disponible ? (
                        <div className="pt-4 border-t border-craft-200/80 flex items-center justify-between gap-3">
                          {qtyInCart > 0 ? (
                            <div className="w-full flex items-center justify-between bg-craft-100 px-3 py-1.5 rounded-xl border border-craft-300">
                              <span className="text-xs font-bold text-charcoal">
                                En pedido:{" "}
                                <span className="text-cometoRed">
                                  {qtyInCart}
                                </span>
                              </span>
                              <div className="flex items-center gap-2">
                                <button
                                  onClick={() => removeFromCart(product.id)}
                                  className="w-8 h-8 rounded-lg bg-flour hover:bg-craft-200 text-charcoal flex items-center justify-center font-bold text-sm shadow-sm transition-colors"
                                  aria-label={`Quitar una unidad de ${product.nombre}`}
                                >
                                  <Minus className="w-3.5 h-3.5" />
                                </button>
                                <span className="w-6 text-center text-sm font-black text-charcoal">
                                  {qtyInCart}
                                </span>
                                <button
                                  onClick={() => addToCart(product.id)}
                                  className="w-8 h-8 rounded-lg bg-charcoal hover:bg-charcoal-light text-flour flex items-center justify-center font-bold text-sm shadow-sm transition-colors"
                                  aria-label={`Agregar una unidad de ${product.nombre}`}
                                >
                                  <Plus className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </div>
                          ) : (
                            <button
                              onClick={() => addToCart(product.id)}
                              className="w-full py-2.5 px-4 rounded-xl bg-flour hover:bg-charcoal text-charcoal hover:text-flour border border-craft-300 hover:border-charcoal text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 shadow-sm"
                            >
                              <Plus className="w-4 h-4 text-cometoRed group-hover:text-cometoYellow transition-colors" />
                              <span>Agregar al Pedido</span>
                            </button>
                          )}
                        </div>
                      ) : (
                        <div className="pt-4 border-t border-craft-200/80 flex items-center justify-between gap-3">
                          <span className="text-xs font-bold text-charcoal">
                            Agotado
                          </span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {/* Empty Search Result */}
            {!loading && filteredProducts.length === 0 && (
              <div className="p-12 text-center bg-flour rounded-3xl border border-craft-300">
                <UtensilsCrossed className="w-12 h-12 text-craft-400 mx-auto mb-3" />
                <h3 className="text-lg font-serif font-bold text-charcoal mb-1">
                  No se encontraron productos
                </h3>
                <p className="text-sm text-charcoal/60 mb-4">
                  {searchQuery
                    ? `No hay resultados para "${searchQuery}". Intenta con otro término.`
                    : "Actualmente no hay productos registrados en el sistema."}
                </p>
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="px-4 py-2 rounded-full bg-craft-200 text-charcoal text-xs font-bold hover:bg-craft-300 transition-colors"
                  >
                    Ver todos los productos
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Cart & Checkout Column (5 cols on lg) */}
          <div className="lg:col-span-5 xl:col-span-4 sticky top-24">
            <div className="bg-flour rounded-3xl border border-craft-300 p-6 sm:p-7 shadow-warm">
              {/* Cart Header */}
              <div className="flex items-center justify-between pb-5 border-b border-craft-200">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-cometoYellow/20 text-charcoal flex items-center justify-center font-bold">
                    <Receipt className="w-5 h-5 text-cometoRed" />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-black text-charcoal leading-none">
                      Tu Pedido
                    </h3>
                    <span className="text-xs text-charcoal/60">
                      {totalQuantity}{" "}
                      {totalQuantity === 1
                        ? "ítem seleccionado"
                        : "ítems seleccionados"}
                    </span>
                  </div>
                </div>

                {cartItems.length > 0 && (
                  <button
                    onClick={clearCart}
                    className="text-xs font-semibold text-charcoal/50 hover:text-cometoRed flex items-center gap-1 transition-colors"
                    title="Vaciar todo el pedido"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Vaciar</span>
                  </button>
                )}
              </div>

              {/* Cart Items List */}
              {cartItems.length === 0 ? (
                <div className="py-10 text-center">
                  <div className="w-14 h-14 rounded-full bg-craft-100 flex items-center justify-center mx-auto mb-3 text-craft-400">
                    <ShoppingBag className="w-7 h-7" />
                  </div>
                  <p className="text-sm font-bold text-charcoal mb-1">
                    Tu pedido está vacío
                  </p>
                  <p className="text-xs text-charcoal/60 max-w-xs mx-auto">
                    Selecciona los productos del menú de la izquierda para armar
                    tu pedido.
                  </p>
                </div>
              ) : (
                <div className="py-4 space-y-3 max-h-64 overflow-y-auto pr-1">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="p-3 rounded-xl bg-craft-50 border border-craft-200 flex items-center justify-between gap-3 text-xs"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5">
                          <p className="font-bold text-charcoal truncate capitalize">
                            {item.nombre}
                          </p>
                        </div>
                        <p className="text-[11px] text-charcoal/60 mt-0.5">
                          ${item.precio.toLocaleString("es-CL")} c/u
                        </p>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <div className="flex items-center bg-flour border border-craft-300 rounded-lg overflow-hidden">
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="w-6 h-6 flex items-center justify-center hover:bg-craft-200 text-charcoal font-bold"
                            aria-label="Restar 1"
                          >
                            <Minus className="w-2.5 h-2.5" />
                          </button>
                          <span className="w-6 text-center font-bold text-charcoal">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => addToCart(item.id)}
                            className="w-6 h-6 flex items-center justify-center hover:bg-craft-200 text-charcoal font-bold"
                            aria-label="Sumar 1"
                          >
                            <Plus className="w-2.5 h-2.5" />
                          </button>
                        </div>

                        <span className="font-bold text-charcoal w-16 text-right">
                          ${item.subtotal.toLocaleString("es-CL")}
                        </span>

                        <button
                          onClick={() => deleteFromCart(item.id)}
                          className="text-charcoal/40 hover:text-cometoRed transition-colors p-1"
                          title="Eliminar producto"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Order Totals */}
              {cartItems.length > 0 && (
                <div className="pt-4 border-t border-craft-200 space-y-2">
                  <div className="flex justify-between text-xs text-charcoal/70">
                    <span>Cantidad total:</span>
                    <span className="font-bold">{totalQuantity} unidades</span>
                  </div>
                  <div className="flex justify-between text-base font-serif font-black text-charcoal pt-2 border-t border-dashed border-craft-300">
                    <span>Total Estimado:</span>
                    <span className="text-xl text-cometoRed">
                      ${totalPrice.toLocaleString("es-CL")} CLP
                    </span>
                  </div>
                </div>
              )}

              {/* Checkout Form */}
              <form
                onSubmit={handlePlaceOrder}
                className="mt-5 pt-5 border-t border-craft-200 space-y-3"
              >
                <h4 className="text-xs font-black uppercase tracking-wider text-charcoal/80">
                  Datos de Entrega y Contacto
                </h4>

                <p
                  role="status"
                  className={`text-xs font-semibold ${storeStatus?.acceptingOrders ? "text-emerald-700" : "text-charcoal/60"}`}
                >
                  {storeStatusLoading
                    ? "Consultando horario de atención..."
                    : storeStatusError ||
                    storeStatus?.message ||
                    "No se pudo consultar el horario."}
                  {storeStatus && !storeStatusLoading && (
                    <span className="block mt-1 font-bold">
                      Horario de hoy:{" "}
                      {storeStatus.today.intervals.length
                        ? storeStatus.today.intervals
                          .map(({ open, close }) => `${open}–${close}`)
                          .join(", ")
                        : "cerrado"}
                    </span>
                  )}
                </p>

                <div>
                  <input
                    type="text"
                    required
                    placeholder="Tu Nombre Completo *"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-craft-50 border border-craft-300 rounded-xl text-xs text-charcoal placeholder-charcoal/40 focus:outline-none focus:ring-2 focus:ring-cometoBlue focus:bg-flour"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    required
                    placeholder="Teléfono / WhatsApp de contacto"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-craft-50 border border-craft-300 rounded-xl text-xs text-charcoal placeholder-charcoal/40 focus:outline-none focus:ring-2 focus:ring-cometoBlue focus:bg-flour"
                  />
                </div>

                <div className="space-y-2">
                  <button
                    type="button"
                    onClick={shareCurrentLocation}
                    className="w-full px-3.5 py-2.5 bg-craft-50 border border-craft-300 rounded-xl text-xs font-bold text-charcoal hover:bg-craft-100 focus:outline-none focus:ring-2 focus:ring-cometoBlue flex items-center justify-center gap-2 transition-colors"
                  >
                    <MapPin className="w-4 h-4 text-cometoGreen" />
                    {currentLocation
                      ? "ubicación compartida"
                      : "Compartir mi ubicación actual"}
                  </button>
                  {locationStatus && (
                    <p role="status" className="text-[11px] text-charcoal/60">
                      {locationStatus}
                    </p>
                  )}
                </div>

                <div>
                  <textarea
                    rows={2}
                    placeholder="Instrucciones adicionales como horario de entrega, ubicación de entrega, etc."
                    value={orderNotes}
                    onChange={(e) => setOrderNotes(e.target.value)}
                    className="w-full px-3.5 py-2 bg-craft-50 border border-craft-300 rounded-xl text-xs text-charcoal placeholder-charcoal/40 focus:outline-none focus:ring-2 focus:ring-cometoBlue focus:bg-flour resize-none"
                  />
                </div>
                <div>
                  <p>
                    Al finalizar el pedido seras redirigido a WhatsApp para
                    coordinar el pago.
                  </p>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={
                    cartItems.length === 0 ||
                    orderSubmitting ||
                    storeStatusLoading ||
                    !storeStatus?.acceptingOrders
                  }
                  className="w-full mt-2 py-3.5 px-5 rounded-2xl bg-charcoal hover:bg-charcoal-light text-flour font-bold text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 shadow-warm hover:shadow-warm-lg disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Send className="w-4 h-4 text-cometoYellow" />
                  <span>
                    {orderSubmitting
                      ? "Enviando pedido..."
                      : storeStatusLoading
                        ? "Consultando horario..."
                        : storeStatus?.acceptingOrders
                          ? "Confirmar pedido"
                          : "fuera de horario"}
                  </span>
                </button>

                {orderError && (
                  <p role="alert" className="text-xs text-red-700">
                    {orderError}
                  </p>
                )}

                {orderPlaced && (
                  <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2 animate-in fade-in">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>
                      Pedido registrado. Abriendo WhatsApp para coordinar el
                      pago y la entrega...
                      {createdOrderId && (
                        <span className="block mt-1 font-bold">
                          Número de orden: {createdOrderId}
                        </span>
                      )}
                    </span>
                  </div>
                )}

                <p className="text-[11px] text-center text-charcoal/50 pt-1">
                  Tu pedido se registrará para coordinar su preparación y
                  entrega.
                </p>
              </form>

              <div className="mt-5 border-t border-craft-200 pt-5">
                <div className="p-4 rounded-2xl bg-craft-50 border border-craft-200 space-y-3">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-cometoRed" />
                    <h4 className="text-xs font-black uppercase tracking-wider text-charcoal">
                      Seguimiento de orden
                    </h4>
                  </div>
                  <form onSubmit={handleTrackOrder} className="flex gap-2">
                    <input
                      type="text"
                      name="orderId"
                      value={trackingInput}
                      onChange={(event) => {
                        const value = event.target.value;
                        setTrackingInput(value);
                        sessionStorage.setItem(TRACKING_INPUT_KEY, value);
                      }}
                      placeholder="Ingresa el ID de tu orden"
                      aria-label="ID de la orden para seguimiento"
                      required
                      className="min-w-0 flex-1 px-3 py-2.5 bg-flour border border-craft-300 rounded-xl text-xs text-charcoal placeholder-charcoal/40 focus:outline-none focus:ring-2 focus:ring-cometoBlue"
                    />
                    <button
                      type="submit"
                      disabled={trackingLoading}
                      className="shrink-0 px-3.5 py-2.5 rounded-xl bg-charcoal text-flour text-xs font-bold hover:bg-charcoal-light disabled:opacity-60 flex items-center gap-2"
                    >
                      <RefreshCw
                        className={`w-3.5 h-3.5 ${trackingLoading ? "animate-spin" : ""}`}
                      />
                      Consultar
                    </button>
                  </form>

                  {trackingLoading && !trackedOrder && (
                    <p role="status" className="text-xs text-charcoal/60">
                      Consultando el estado de la orden...
                    </p>
                  )}
                  {trackingError && (
                    <p role="alert" className="text-xs text-red-700">
                      {trackingError}
                    </p>
                  )}
                  {trackedOrder && (
                    <div
                      role="status"
                      className="flex flex-wrap items-center justify-between gap-2 pt-1"
                    >
                      <div>
                        <p className="text-[11px] text-charcoal/60">
                          Orden {trackedOrder.id}
                        </p>
                        <p className="flex items-center gap-1.5 text-sm font-bold text-charcoal capitalize">
                          <TrackingStatusIcon
                            aria-hidden="true"
                            className={`h-4 w-4 shrink-0 ${trackingStatusVisual.color}`}
                          />
                          Estado: {trackedOrder.status.replaceAll("_", " ")}
                        </p>
                      </div>
                      {trackedOrder.updatedAt &&
                        !Number.isNaN(Date.parse(trackedOrder.updatedAt)) && (
                          <p className="text-[10px] text-charcoal/50">
                            Actualizado{" "}
                            {new Date(trackedOrder.updatedAt).toLocaleString(
                              "es-CL",
                            )}
                          </p>
                        )}
                    </div>
                  )}
                  <p className="text-[10px] text-charcoal/50">
                    El estado se actualiza automáticamente cada 30 segundos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
