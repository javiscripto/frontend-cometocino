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
  return (
    <>
      <Hero />
      <HighlightsBanner />
      <ProcessStory />
    </>
  );
}

function ServicesPage({ selectedPackageId, onSelectPackage }) {
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

function AppShell() {
  const [selectedPackageId, setSelectedPackageId] = useState("gourmet");

  return (
    <div className="min-h-screen bg-[#FAF6F0] text-charcoal font-sans selection:bg-cometoYellow selection:text-charcoal-black relative">
      <ScrollToRoute />
      <ScrollProgressBar />
      <Navbar />
      <main id="main-content">
        <Routes>
          <Route
            path="/pedir-online"
            element={
              <>
                <MonthlyOffersSlider />
                <OrderSection />
              </>
            }
          />
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
