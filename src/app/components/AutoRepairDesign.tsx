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
    }, 1500); // Increased slightly so the user can see the Hero first

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
      {/* --- Top Info Bar (Optimized for Mobile) --- */}
      <div className="bg-[#17161c] w-full px-4 lg:px-[70px] py-2 md:py-0 md:h-[87px] flex flex-col md:flex-row items-center justify-between gap-3 md:gap-0 border-b border-white/5">
        
        {/* Address Link */}
        <div className="flex items-center gap-2 max-w-[90%] md:max-w-none text-center md:text-left">
          <LocationIcon className="w-5 h-5 md:w-8 md:h-8 flex-shrink-0" />
          <a
            href="https://goo.gl/maps/xyz"
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

      {/* Navigation - Always on top */}
      <Navigation isSticky={isNavSticky} />

      {/* Main Content Sections */}
      {/* Added scroll-mt-[100px] to handle the sticky header overlap */}
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

      {/* Floating Action Buttons (WhatsApp/Phone) */}
      <StickySocialButtons />

      {/* Call Modal */}
      <CallModal isOpen={isCallModalOpen} onClose={() => setIsCallModalOpen(false)} />
    </div>
  );
}

// --- Icons (Updated with className prop for responsiveness) ---

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
    <svg viewBox="0 0 40 40" fill="none" className={className}>
      <path
        d="M32.9167 28.2167C30.75 28.2167 28.65 27.8667 26.7 27.2167C26.05 27 25.25 27.1667 24.7334 27.6667L21.3 31.8167C16.0334 29.3167 10.7834 24.1667 8.21671 18.8167L12.3167 15.25C12.8167 14.7333 12.9667 14 12.7667 13.3C12.1167 11.35 11.7667 9.25 11.7667 7.08334C11.7667 5.93334 10.8334 5 9.68337 5H5.68337C4.53337 5 3.33337 5.46667 3.33337 7.08334C3.33337 22.5333 15.55 34.6667 31 34.6667C32.55 34.6667 33.0834 33.5167 33.0834 32.3333V28.3667C33.0834 27.2167 32.0667 28.2167 32.9167 28.2167Z"
        stroke="#F0C93B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className}>
      <path
        d="M19.9917 6.66666C12.6334 6.66666 6.66669 12.65 6.66669 20C6.66669 27.35 12.6334 33.3333 19.9917 33.3333C27.3584 33.3333 33.3334 27.35 33.3334 20C33.3334 12.65 27.3584 6.66666 19.9917 6.66666ZM20 30C14.4834 30 10 25.5167 10 20C10 14.4833 14.4834 10 20 10C25.5167 10 30 14.4833 30 20C30 25.5167 25.5167 30 20 30ZM20.8334 13.3333H18.3334V21.6667L25.4167 25.8333L26.6667 23.8167L20.8334 20.4167V13.3333Z"
        stroke="#F0C93B"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}