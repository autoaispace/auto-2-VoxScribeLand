import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import ProductValue from "./components/ProductValue";
import CoreFeatures from "./components/CoreFeatures";
import Pricing from "./components/Pricing";
import ConversionCTA from "./components/ConversionCTA";
import Footer from "./components/Footer";

/**
 * Main landing page for VoxScribe
 * Integrates all sections: Navigation, Hero, Product Value, Core Features, Pricing, CTA, and Footer
 */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <Hero />
        <ProductValue />
        <CoreFeatures />
        <Pricing />
        <ConversionCTA />
      </main>
      <Footer />
    </div>
  );
}
