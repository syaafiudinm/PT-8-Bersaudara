import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import UrgencyBanner from "./components/UrgencyBanner";
import PropertySpecs from "./components/PropertySpecs";
import LocationAdvantage from "./components/LocationAdvantage";
import PaymentScheme from "./components/PaymentScheme";
import SiteplanGallery from "./components/SiteplanGallery";
import Testimonials from "./components/Testimonials";
import LeadForm from "./components/LeadForm";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import { useState } from "react";

function App() {
  const [showUrgency, setShowUrgency] = useState(true);

  return (
    <div className="min-h-screen bg-white">
      {showUrgency && <UrgencyBanner onClose={() => setShowUrgency(false)} />}
      <Navbar />
      <Hero />
      <PropertySpecs />
      <LocationAdvantage />
      <PaymentScheme />
      <SiteplanGallery />
      <Testimonials />
      <LeadForm />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;
