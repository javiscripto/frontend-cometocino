import React, { useState } from "react";
import ScrollProgressBar from "./components/ScrollProgressBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HighlightsBanner from "./components/HighlightsBanner";
import ImpactGallery from "./components/ImpactGallery";
import HowItWorks from "./components/HowItWorks";
import ProcessStory from "./components/ProcessStory";
import PizzaMenu from "./components/PizzaMenu";
import OrderSection from "./components/OrderSection";
import PackagesSection from "./components/PackagesSection";
import Calculator from "./components/Calculator";
import TestimonialsSection from "./components/TestimonialsSection";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function App() {
  const [selectedPackageId, setSelectedPackageId] = useState("gourmet");

  const handleSelectPackage = (pkgId) => {
    setSelectedPackageId(pkgId);
  };

  return (
    <div className="min-h-screen bg-[#FAF6F0] text-charcoal font-sans selection:bg-cometoYellow selection:text-charcoal-black relative">
      {/* Top Scroll Indicator */}
      <ScrollProgressBar />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main id="main-content">
        {/* Hero Section with Big Impact Typography */}
        <Hero />

        {/* Feature Highlights Banner */}
        <HighlightsBanner />

        {/* High Impact Visual Gallery & Live Fire Experience */}
        <ImpactGallery />

        {/* How It Works & Live Action Photos */}
        <HowItWorks />

        {/* Sourdough 48h Story */}
        <ProcessStory />

        {/* Pizza Varieties Menu */}
        <PizzaMenu />

        {/* Section to place an order (Pedidos Online) */}
        <OrderSection />

        {/* Catering Packages & Pricing */}
        <PackagesSection onSelectPackage={handleSelectPackage} />

        {/* Live Catering Quote Calculator */}
        <Calculator
          selectedPackageId={selectedPackageId}
          onSelectPackage={handleSelectPackage}
        />

        {/* Social Proof & Testimonials */}
        {/* <TestimonialsSection /> */}

        {/* Frequently Asked Questions Accordion */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Persistent Floating WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
}
