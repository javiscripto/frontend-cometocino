import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import ScrollProgressBar from "./components/ScrollProgressBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HighlightsBanner from "./components/HighlightsBanner";
import ImpactGallery from "./components/ImpactGallery";
import HowItWorks from "./components/HowItWorks";
import ProcessStory from "./components/ProcessStory";
import PizzaMenu from "./components/PizzaMenu";
import OrderSection from "./components/OrderSection";
import MonthlyOffersSlider from "./components/MonthlyOffersSlider";
import PackagesSection from "./components/PackagesSection";
import Calculator from "./components/Calculator";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import { useSEO } from "./hooks/useSEO";

function ScrollToRoute() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      requestAnimationFrame(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView();
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function AboutPage() {
  useSEO({
    title: "Quiénes Somos | ComeTocino Pizzas y Catering en Los Ríos",
    description:
      "Conoce la historia de ComeTocino: pizza artesanal estilo napolitano con fermentación lenta de 48 horas para eventos y delivery en Mariquina, Valdivia y Máfil.",
    keywords:
      "pizzeria masa madre mariquina, pizza artesanal valdivia, cometocino los rios, masa madre pelchuquin",
    canonicalPath: "/quienes-somos",
  });

  return (
    <>
      <Hero />
      <HighlightsBanner />
      <ProcessStory />
    </>
  );
}

function ServicesPage({ selectedPackageId, onSelectPackage }) {
  useSEO({
    title:
      "Pizza Catering y Pizza Party en Valdivia, Mariquina y Máfil | ComeTocino",
    description:
      "Servicio exclusivo de Pizza Catering y Pizza Party en vivo para matrimonios, cumpleaños y empresas en Valdivia, Mariquina y Máfil. Hornos a 450°C y barra libre de pizzas.",
    keywords:
      "pizza catering valdivia, pizza catering mariquina, pizza catering mafil, pizza party valdivia, pizzas eventos los rios, catering matrimonios valdivia",
    canonicalPath: "/servicios",
  });

  return (
    <>
      <HowItWorks />
      <ImpactGallery />
      <PizzaMenu />
      <PackagesSection onSelectPackage={onSelectPackage} />
      <Calculator
        selectedPackageId={selectedPackageId}
        onSelectPackage={onSelectPackage}
      />
      <FaqSection />
    </>
  );
}

function OrderOnlinePage() {
  useSEO({
    title: "Pizzas a Domicilio en Mariquina, Valdivia y Máfil | ComeTocino",
    description:
      "Pide pizzas artesanales de masa madre a domicilio en la Comuna de Mariquina (San José y Pelchuquín), Valdivia y Máfil. Carta disponible en tiempo real.",
    keywords:
      "pizzas a domicilio mariquina, pizzas a domicilio valdivia, pizzas a domicilio mafil, delivery pizza san jose mariquina, pizza pelchuquin a domicilio",
    canonicalPath: "/pedir-online",
  });

  return (
    <>
      <MonthlyOffersSlider />
      <OrderSection />
    </>
  );
}

function AppShell() {
  const [selectedPackageId, setSelectedPackageId] = useState("pizza-6");

  return (
    <div className="min-h-screen bg-[#FAF6F0] text-charcoal font-sans selection:bg-cometoYellow selection:text-charcoal-black relative">
      <ScrollToRoute />
      <ScrollProgressBar />
      <Navbar />
      <main id="main-content">
        <Routes>
          <Route path="/pedir-online" element={<OrderOnlinePage />} />
          <Route
            path="/servicios"
            element={
              <ServicesPage
                selectedPackageId={selectedPackageId}
                onSelectPackage={setSelectedPackageId}
              />
            }
          />
          <Route path="/quienes-somos" element={<AboutPage />} />
          <Route path="*" element={<Navigate to="/pedir-online" replace />} />
        </Routes>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default function App() {
  return <AppShell />;
}
