export const PIZZA_VARIETIES = [
  {
    id: "Pollo BBQ",
    name: "ComeTocino Especial",
    category: "especiales",
    badge: "La Estrella de la Casa",
    description:
      "Nuestra firma: salsa pomodoro rústica 100% italiana , mozzarella fior di latte, pechuga de pollo desmennuzada y ligeramente tostada, oregano fresco y salsa BBQ .",
    ingredients: ["Pomodoro", "Mozzarella", "Pollo", "orégano", "Swirl BBQ"],
    popular: true,
    image:
      "https://res.cloudinary.com/kt1vvb0c/image/upload/v1791495034/Pizza_artesanal_de_pollo_BBQ_en_espiral.png",
    tag: "Recomendada",
  },
  {
    id: "margherita-clasica",
    name: "Margherita Napolitana",
    category: "clasicas",
    badge: "Clásica Tradicional",
    description:
      "La reina indiscutida: masa madre con alveolos dorados, pomodoro de tomates maduros San Marzano, mozzarella fresca en hebras, albahaca recién cosechada y oliva virgen extra.",
    ingredients: [
      "Salsa Pomodoro",
      "Mozzarella fresca",
      "Albahaca tierna",
      "Aceite de oliva EVOO",
    ],
    popular: true,
    image:
      "https://res.cloudinary.com/kt1vvb0c/image/upload/v1793109105/Pizza_Margherita_Artesanal.png",
    tag: "Vegetariana",
  },
  {
    id: "napolitana-clasica",
    name: "Napolitana",
    category: "clasicas",
    badge: "Clásica Tradicional",
    description:
      "La reina indiscutida: masa madre con alveolos dorados, pomodoro de tomates maduros San Marzano, mozzarella en hebras, tomate fresco, jamón, orégano, aceitunas o alcaparras y lascas de queso parmesano.",
    ingredients: [
      "Salsa Pomodoro",
      "Mozzarella",
      "tomate fresco",
      "jamon",
      "orégano",
      "aceitunas o alcaparras",
      "lascas de queso parmesano",
    ],
    popular: true,
    image:
      "https://res.cloudinary.com/kt1vvb0c/image/upload/v1791231184/napolitana-clasica.png",
    tag: "Vegetariana",
  },
  {
    id: "pepperoni-hot-honey",
    name: "Pepperoni & Hot Honey",
    category: "especiales",
    badge: "Toque Picante Dulce",
    description:
      "Pepperoni artesanal horneado a 450°C formando cuencos crocantes con queso gratinado y un toque final de miel infusionada en ají cacho de cabra.",
    ingredients: ["Pepperoni curado", "Mozzarella", "Miel picante casera"],
    popular: true,
    image:
      "https://res.cloudinary.com/kt1vvb0c/image/upload/v1791231889/pepperoni.png",
    tag: "Top Ventas",
  },
  {
    id: "Mechada-BBQ",
    name: "Mechada BBQ",
    category: "especiales",
    badge: "popular",
    description:
      "base de pomodoro san Marzano de la casa, queso fundido, suave carne mechada coronada fuera del horno con cebolla caramelizada al vino tinto y salsa BBQ",
    ingredients: [
      "Mozzarella",
      "salsa Pomodoro",
      "Carne Mechada",
      "cebolla caramelizada al vino tinto",
      "salsa BBQ",
    ],
    popular: false,
    image:
      "https://res.cloudinary.com/kt1vvb0c/image/upload/v1791237074/pizza-isolated.png",
    tag: "Gourmet",
  },
  {
    id: "cuatro-quesos-sur",
    name: "Cuatro Quesos del Sur",
    category: "clasicas",
    badge: "Intensa & Cremosa",
    description:
      "Armoniosa fusión de mozzarella elástica, provolone fundido, queso azul de maduración lenta y reggianito con lluvia de nueces picadas.",
    ingredients: [
      "Mozzarella",
      "Provolone",
      "Queso Azul",
      "Reggianito",
      "Nueces",
    ],
    popular: false,
    image:
      "https://res.cloudinary.com/kt1vvb0c/image/upload/v1792105779/converted-4.webp",
    tag: "Vegetariana",
  },
  {
    id: "la-caprichosa",
    name: "La Caprichosa",
    category: "especiales",
    badge: "Recomendación",
    description:
      "Salsa pomodoro, mozzarella fundida, champiñones salteados, alcachofas, parmesano y albahaca fresca.",
    ingredients: [
      "Salsa Pomodoro",
      "Mozzarella",
      "Champiñones salteados",
      "Alcachofas",
      "Parmesano",
      "Albahaca fresca",
    ],
    popular: true,
    image:
      "https://res.cloudinary.com/kt1vvb0c/image/upload/v1791406139/caprichosa.png",
    tag: "Recomendada",
  },

  {
    id: "camaron-al-ajillo",
    name: "Camarón al Ajillo",
    category: "especiales",
    badge: "Recomendación",
    description:
      "Salsa pomodoro, mozzarella fundida, camarones salteados al ajillo y un toque de salsa de camarón.",
    ingredients: [
      "Salsa Pomodoro",
      "Mozzarella",
      "Camarones",
      "Ajillo",
      "Salsa de camarón",
    ],
    popular: true,
    image:
      "https://res.cloudinary.com/kt1vvb0c/image/upload/v1791406182/camaron_al_ajillo.png",
    tag: "Recomendada",
  },

  {
    id: "pollo-bbq",
    name: "Pollo BBQ",
    category: "especiales",
    badge: "Favorita",
    description:
      "Salsa pomodoro, mozzarella fundida, pollo, choclo y salsa BBQ.",
    ingredients: [
      "Salsa Pomodoro",
      "Mozzarella",
      "Pollo",
      "Choclo",
      "Salsa BBQ",
    ],
    popular: true,
    image:
      "https://res.cloudinary.com/kt1vvb0c/image/upload/v1791495034/Pizza_artesanal_de_pollo_BBQ_en_espiral.png",
    tag: "Favorita",
  },

  {
    id: "pollo-jalapeno",
    name: "Pollo Jalapeño",
    category: "especiales",
    badge: "Toque Picante",
    description:
      "Salsa pomodoro, mozzarella fundida, pollo, orégano y toques de ají jalapeño encurtido.",
    ingredients: [
      "Salsa Pomodoro",
      "Mozzarella",
      "Pollo",
      "Orégano",
      "Ají jalapeño encurtido",
    ],
    popular: false,
    image:
      "https://res.cloudinary.com/kt1vvb0c/image/upload/v1793110960/Pizza_artesanal_de_carne_y_jalape%C3%B1o.png",
    tag: "Picante",
  },

  {
    id: "funji",
    name: "Funji",
    category: "especiales",
    badge: "Sabor Intenso",
    description:
      "Salsa pomodoro, mozzarella, queso azul, champiñones, albahaca, perejil y merkén.",
    ingredients: [
      "Salsa Pomodoro",
      "Mozzarella",
      "Queso azul",
      "Champiñones",
      "Albahaca",
      "Perejil",
      "Merkén",
    ],
    popular: false,
    image:
      "https://res.cloudinary.com/kt1vvb0c/image/upload/v1791667854/funghi.webp",
    tag: "Especial",
  },
  {
    id: "pizza-dulce-nutella",
    name: "Pizza Dulce Frutos & Nutella",
    category: "dulces",
    badge: "El Broche de Oro",
    description:
      "Masa madre inflada al fuego con mantequilla, abundante crema de avellanas Nutella o dulce de leche patagónico, frutillas frescas y lluvia de azúcar impalpable.",
    ingredients: [
      "Nutella / Manjar",
      "Frutos rojos y frutillas",
      "Azúcar flor",
      "Masa dorada",
    ],
    popular: true,
    image: "/images/pizza-overhead.jpg",
    tag: "Postre",
  },
];

export const CATERING_PACKAGES = [
  {
    id: "pizza-6",
    name: "Horno Esencial",
    tagline: "La experiencia ComeTocino en un formato sencillo para compartir.",
    pizzaCount: 6,
    diameterCm: 32,
    pricePerPerson: 6990,
    popular: false,
    features: [
      "6 pizzas horneadas de 32 cm",
      "Selección de hasta 4 variedades de la carta",
      "1 Maestro Pizzero en vivo + horno profesional",
      "Masa madre fermentada 48 horas",
    ],
    highlightText: "Horno Esencial",
  },
  {
    id: "pizza-12",
    name: "Selección de la Casa",
    tagline: "Más sabores, bienvenida y un cierre dulce para la mesa.",
    pizzaCount: 12,
    diameterCm: 32,
    pricePerPerson: 8990,
    popular: true,
    features: [
      "12 pizzas horneadas de 32 cm",
      "Selección de 6 variedades (incluye ComeTocino y Pizzas gourmet)",
      "Aperitivo de bienvenida: mini palitos de ajo y salsas pomodoro, BBQ y a elección.",
      "Pizza dulce de postre (Nutella con frutos) incluida",
      "1 Pizzero + 1 asistente de servicio",
      "Vajilla ecológica + tablas de madera rústicas para presentación",
      "Montaje y desmontaje de estación autónoma",
    ],
    highlightText: "Más elegido",
  },
  {
    id: "pizza-18",
    name: "Horno & Mesa",
    tagline:
      "Carta completa y apoyo en el servicio para una experiencia más fluida.",
    pizzaCount: 18,
    diameterCm: 32,
    pricePerPerson: 10990,
    popular: false,
    features: [
      "18 pizzas horneadas de 32 cm",
      "Carta completa abierta (todas las variedades)",
      "Estación de Focaccias, dips variados y antipastos de charcutería italiana",
      "Ronda de pizzas dulces o postre",
      "Maestro pizzero + personal de apoyo continuo",
      "Servicio de cóctel a la mesa o punto buffet activo",
      "Menús impresos personalizados con el nombre de tu evento",
      "Vajilla ecológica y montaje de estación",
    ],
    highlightText: "Experiencia Total",
  },
  {
    id: "pizza-24",
    name: "La Gran Fornada",
    tagline:
      "Nuestro servicio más completo, con equipo ampliado para grandes mesas.",
    pizzaCount: 24,
    diameterCm: 32,
    pricePerPerson: 12990,
    popular: false,
    features: [
      "24 pizzas horneadas de 32 cm",
      "Carta completa de variedades y pizzas dulces de postre",
      "Maestro pizzero + equipo de apoyo dedicado",
      "Estación de focaccias, dips y antipastos",
      "Servicio de cóctel o punto buffet activo",
      "Horno de respaldo para agilizar el despacho",
      "Vajilla ecológica, montaje y desmontaje incluidos",
      "Menús impresos personalizados para tu evento",
    ],
    highlightText: "La Gran Fornada",
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "Llegada y Montaje Autónomo",
    description:
      "Llegamos 90 minutos antes a tu casa, parcela, terraza o salón. Montamos nuestro horno portátil de alta temperatura y estación de trabajo limpia.",
    icon: "Truck",
  },
  {
    step: "02",
    title: "Masa Madre & Show en Vivo",
    description:
      "Tus invitados ven el espectáculo del estirado artesanal, salsas frescas e ingredientes seleccionados. Cocción a 450°C en menos de 90 segundos.",
    icon: "Flame",
  },
  {
    step: "03",
    title: "Pizzas continuas sin Esperas",
    description:
      "Salen pizzas calientes y burbujeantes en rondas continuas cortadas en porciones para compartir y degustar todas las combinaciones.",
    icon: "Pizza",
  },
  {
    step: "04",
    title: "Cero Estrés, Cero Limpieza",
    description:
      "Proveemos la vajilla compostable, recogemos todo al terminar y dejamos el lugar 100% impecable. Tu única tarea es celebrar y disfrutar.",
    icon: "Sparkles",
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Carolina & Matías",
    event: "Matrimonio al Aire Libre (110 personas)",
    location: "Valdivia (Isla Teja)",
    text: "Contratamos a ComeTocino para el trasnoche de nuestro matrimonio y fue por lejos lo más comentado por los invitados. Las pizzas salían calientitas y la masa madre era increíble, liviana y deliciosa. ¡Un 10/10!",
    rating: 5,
  },
  {
    id: 2,
    name: "Gonzalo Valenzuela",
    event: "Cumpleaños en Parcela (45 personas)",
    location: "San José de la Mariquina",
    text: "Puntualísimos, la onda del carrito y el horno en el jardín es genial y la pizza ComeTocino con tocino crocante y BBQ voló. Se encargaron de todo y no tuve que lavar ni un plato.",
    rating: 5,
  },
  {
    id: 3,
    name: "Valentina Soto",
    event: "Evento de Cierre de Año Empresa (70 personas)",
    location: "Máfil",
    text: "Buscábamos algo dinámico y relajado para el equipo. La velocidad con la que sacaban las pizzas fue impresionante. Todos quedaron felices, incluso con opciones vegetarianas deliciosas.",
    rating: 5,
  },
];

export const FAQ_LIST = [
  {
    q: "¿Qué requerimientos de espacio e instalaciones necesitan?",
    a: "Nuestros hornos portátiles a gas son ultra compactos y eficientes. Solo necesitamos un espacio de aproximadamente 2x2 metros al aire libre, terraza techada o patio bien ventilado. No requerimos toma eléctrica especial ni cocina de la casa: ¡llegamos con estación 100% autónoma!",
  },
  {
    q: '¿Qué significa que el servicio sea "Pizzas Ilimitadas"?',
    a: "Significa que durante las horas contratadas (2 a 3.5 hrs según el plan), nuestros pizzeros no paran de preparar y hornear pizzas frescas. Van saliendo bandejas en rondas variadas para que tus invitados coman todo lo que deseen hasta quedar completamente satisfechos.",
  },
  {
    q: "¿Cuentan con opciones vegetarianas o sin lactosa?",
    a: "¡Por supuesto! En todos nuestros planes incluimos opciones vegetarianas gourmet como la Margherita, Huerto Campestre con pesto y Fugazza caramelizada. Si tienes invitados intolerantes a la lactosa o veganos, avísanos con antelación y llevamos queso vegetal o preparaciones especiales.",
  },
  {
    q: "¿Con cuánta anticipación debo reservar mi fecha?",
    a: "Recomendamos reservar con al menos 2 a 4 semanas de anticipación para eventos de fin de semana (viernes a domingo) y con 2 meses de anticipación para temporada alta de matrimonios (octubre a abril). Puedes bloquear tu fecha con un anticipo del 30%.",
  },
  {
    q: "¿En qué zonas o comunas atienden con pizzas a domicilio y catering?",
    a: "Atendemos de forma regular con reparto a domicilio y servicio de pizza catering en vivo en todas las zonas de las comunas de Mariquina (San José de la Mariquina, Pelchuquín), Valdivia y Máfil (San Pedro, Formio). Para eventos especiales en otras comunas de la Región de Los Ríos, contáctanos y coordinamos la factibilidad.",
  },
  {
    q: "¿Por qué la masa madre hace tanta diferencia?",
    a: "Nuestra masa se fermenta lentamente en frío durante 48 horas con masa madre viva. Este proceso descompone los almidones complejos y el gluten, logrando una pizza crocante por fuera, aireada por dentro y sumamente fácil de digerir. Cero sensación de pesadez post-evento.",
  },
];
