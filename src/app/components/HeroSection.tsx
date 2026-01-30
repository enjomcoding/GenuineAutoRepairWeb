import { motion } from "motion/react";
import { MessageCircle, Phone } from "lucide-react";
import imgHeroBg from "@/assets/imgHeroBg.png";

interface HeroSectionProps {
  onCallClick: () => void;
}

export function HeroSection({ onCallClick }: HeroSectionProps) {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/971524895673", "_blank");
  };

  return (
    <div className="relative w-full h-[650px] md:h-[950px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={imgHeroBg}
          alt="Auto Repair Background"
          className="w-full h-full object-cover object-right md:object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.4) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 px-5 md:px-[109px] pt-[100px] md:pt-[180px]">
        {/* Tagline */}
        <motion.p
          className="font-['Montserrat'] font-semibold text-[#f0c93b] text-[16px] md:text-[32px] mb-3 md:mb-6 uppercase tracking-wider"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Fast, Smart, Reliable. All in one roof.
        </motion.p>

        {/* Main Headline */}
        <motion.h1
          className="font-['Bebas_Neue'] text-[48px] md:text-[96px] leading-[1] md:leading-[102px] tracking-tight md:tracking-[-2.88px] mb-6 md:mb-8 uppercase"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="text-[#f0c93b]">THE MOST </span>
          <br className="md:hidden" />
          <span className="text-white">Reliable Auto Repair </span>
          <br className="hidden md:block" />
          <span className="text-white">& Maintenance </span>
          <span className="text-[#f0c93b]">in Dubai</span>
        </motion.h1>

        {/* Services List */}
        <motion.p
          className="font-['Montserrat'] text-white text-[14px] md:text-[20px] leading-relaxed max-w-[500px] md:max-w-[900px] mb-8 md:mb-12 opacity-90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Inspection | Diagnostics | Repair | Washing | Detailing | Oil Change | Tinting | PPF | Ceramic
          <br className="hidden md:block" />
          <span className="font-semibold text-[#f0c93b] mt-2 block md:inline md:mt-0 md:ml-2">
            Agency-level service without agency price!
          </span>
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div
          className="flex flex-col md:flex-row gap-3 md:gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {/* Call Now Button */}
          <motion.button
            onClick={(e) => { e.preventDefault(); onCallClick(); }}
            className="bg-[#f0c93b] w-full md:w-[240px] h-[60px] md:h-[81px] flex items-center justify-center gap-3 cursor-pointer shadow-lg active:scale-95 transition-transform"
            whileHover={{ backgroundColor: "#ffd54f" }}
          >
            <Phone className="w-6 h-6 text-black" />
            <span className="font-['Montserrat'] font-bold text-black text-[18px] md:text-[24px] uppercase">
              CALL NOW
            </span>
          </motion.button>

          {/* Get a Quote Button */}
          <motion.button
            onClick={scrollToContact}
            className="bg-black/60 backdrop-blur-sm border border-[#f0c93b] w-full md:w-[240px] h-[60px] md:h-[81px] flex items-center justify-center gap-3 cursor-pointer active:scale-95 transition-transform"
            whileHover={{ backgroundColor: "rgba(0,0,0,0.8)" }}
          >
            <MessageCircle className="w-6 h-6 text-[#f0c93b]" />
            <span className="font-['Montserrat'] font-bold text-[#f0c93b] text-[18px] md:text-[26px] uppercase">
              Get a QUOTE
            </span>
          </motion.button>

          {/* WhatsApp Button */}
          <motion.button
            onClick={handleWhatsApp}
            className="bg-[#25D366] w-full md:w-[240px] h-[60px] md:h-[81px] flex items-center justify-center gap-3 cursor-pointer shadow-lg active:scale-95 transition-transform"
            whileHover={{ backgroundColor: "#1EBE57" }}
          >
            <MessageCircle className="w-6 h-6 md:w-7 md:h-7 text-white fill-current" />
            <span className="font-['Montserrat'] font-bold text-white text-[18px] md:text-[24px] uppercase">
              WhatsApp
            </span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}