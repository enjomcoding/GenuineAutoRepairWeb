import { useState, useEffect } from "react";
import { Navigation } from "./Navigation";
import { HeroSection } from "./HeroSection";
import { FeatureCards } from "./FeatureCards";
import { ServicesSection } from "./ServicesSection";
import { AboutSection } from "./AboutSection";
import { ContactSection } from "./ContactSection";
import { ReviewsSection } from "./ReviewsSection";
import { Footer } from "./Footer";
import { StickySocialButtons } from "./StickySocialButtons";
import { CallModal } from "./CallModal";

interface AutoRepairDesignProps {
  isNavSticky: boolean;
}

export function AutoRepairDesign({ isNavSticky }: AutoRepairDesignProps) {
  const [selectedService, setSelectedService] = useState<string>("");
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);

  // Show modal automatically on page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCallModalOpen(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleServiceClick = (service: string) => {
    setSelectedService(service);
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCallClick = () => {
    setIsCallModalOpen(true);
  };

  return (
    <div className="relative w-full bg-[#1f1f24] min-h-screen">
      {/* --- Top Info Bar --- */}
      <div className="bg-[#17161c] w-full px-4 lg:px-[70px] py-2 md:py-0 md:h-[87px] flex flex-col md:flex-row items-center justify-between gap-3 md:gap-0 border-b border-white/5">
        
        {/* FIXED: Accurate Google Maps Link */}
        <div className="flex items-center gap-2 max-w-[90%] md:max-w-none text-center md:text-left">
          <LocationIcon className="w-5 h-5 md:w-8 md:h-8 flex-shrink-0" />
          <a
            href="https://www.google.com/maps/search/?api=1&query=Genuine+Auto+Repair+Umm+Ramool+Dubai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#b3adb4] text-[12px] md:text-[14px] leading-tight hover:text-[#f0c93b] transition-colors"
          >
            1 Street 1 - Umm Ramool - Dubai - UAE
          </a>
        </div>

        {/* Contact & Hours */}
        <div className="flex items-center justify-center gap-6 md:gap-8 border-t border-white/5 md:border-none pt-2 md:pt-0 w-full md:w-auto">
          <div className="flex items-center gap-2">
            <PhoneIconTop className="w-5 h-5 md:w-8 md:h-8" />
            <a
              href="tel:0524895673"
              className="text-[#b3adb4] text-[13px] md:text-[15px] font-medium hover:text-[#f0c93b] transition-colors"
            >
              052 489 5673
            </a>
          </div>
          <div className="flex items-center gap-2">
            <ClockIcon className="w-5 h-5 md:w-8 md:h-8" />
            <p className="text-[#b3adb4] text-[13px] md:text-[15px]">9AM - 8PM</p>
          </div>
        </div>
      </div>

      <Navigation isSticky={isNavSticky} />

      <main>
        <section id="home" className="scroll-mt-[100px]">
          <HeroSection onCallClick={handleCallClick} />
        </section>

        <FeatureCards />

        <section id="services" className="scroll-mt-[100px]">
          <ServicesSection onServiceClick={handleServiceClick} onCallClick={handleCallClick} />
        </section>

        <section id="about" className="scroll-mt-[100px]">
          <AboutSection onCallClick={handleCallClick} />
        </section>

        <section id="contact" className="scroll-mt-[100px]">
          <ContactSection initialService={selectedService} onCallClick={handleCallClick} />
        </section>

        <ReviewsSection />
      </main>

      <Footer />
      <StickySocialButtons />
      <CallModal isOpen={isCallModalOpen} onClose={() => setIsCallModalOpen(false)} />
    </div>
  );
}

// --- Icons ---

function LocationIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className}>
      <path
        d="M20 3.33334C13.5567 3.33334 8.33337 8.55668 8.33337 15C8.33337 23.75 20 36.6667 20 36.6667C20 36.6667 31.6667 23.75 31.6667 15C31.6667 8.55668 26.4434 3.33334 20 3.33334ZM20 19.1667C17.7 19.1667 15.8334 17.3 15.8334 15C15.8334 12.7 17.7 10.8333 20 10.8333C22.3 10.8333 24.1667 12.7 24.1667 15C24.1667 17.3 22.3 19.1667 20 19.1667Z"
        fill="#F0C93B"
      />
    </svg>
  );
}

function PhoneIconTop({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="#F0C93B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.81 12.81 0 0 0 .63 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.62A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className}>
      <path
        d="M19.9917 6.66666C12.6334 6.66666 6.66669 12.65 6.66669 20C6.66669 27.35 12.6334 33.3333 19.9917 33.3333C27.3584 33.3333 33.3334 27.35 33.3334 20C33.3334 12.65 27.3584 6.66666 19.9917 6.66666ZM20 30C14.4834 30 10 25.5167 10 20C10 14.4833 14.4834 10 20 10C25.5167 10 30 14.4833 30 20C30 25.5167 25.5167 30 20 30ZM20.8334 13.3333H18.3334V21.6667L25.4167 25.8333L26.6667 23.8167L20.8334 20.4167V13.3333Z"
        fill="#F0C93B"
      />
    </svg>
  );
}