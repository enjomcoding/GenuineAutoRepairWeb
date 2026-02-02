import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import imgInspect from "@/assets/imgInspect.png";
import imgDiagnosis from "@/assets/imgDiagnosis.png";
import imgAutoRepair from "@/assets/imgAutoRepair.png";
import imgOilChange from "@/assets/imgOilChange.png";
import imgWindowTinting from "@/assets/imgWindowTinting.png";
import imgPaintProtection from "@/assets/imgPaintProtection.png";
import imgDetailing from "@/assets/imgDetailing.png";
import imgWashing from "@/assets/imgWashing.png";
import imgBgServices from "@/assets/imgBgServices.png";

interface ServicesSectionProps {
  onServiceClick: (service: string) => void;
  onCallClick: () => void;
}

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  onClick: () => void;
  delay: number;
}

export function ServicesSection({ onServiceClick, onCallClick }: ServicesSectionProps) {
  const WHATSAPP_URL = "https://wa.me/971524895673";
  const springTransition = { type: "spring", stiffness: 400, damping: 25 };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Shared Icon Animation Variants (Matching Hero)
  const iconVariants = {
    phone: {
      hover: { 
        y: -5, 
        rotate: [0, -10, 10, -10, 10, 0],
        transition: { duration: 0.4 } 
      }
    },
    message: {
      hover: { 
        y: -8, 
        scale: 1.1,
        transition: { type: "spring", stiffness: 400, damping: 10 } 
      }
    },
    whatsapp: {
      hover: { 
        scale: 1.2, 
        rotate: 8,
        transition: { type: "spring", stiffness: 300 } 
      }
    }
  };

  const services = [
    { img: imgInspect, title: "Inspections", desc: "Comprehensive vehicle inspections to identify issues early and prevent costly repairs." },
    { img: imgDiagnosis, title: "Diagnostics", desc: "Accurate diagnostics to pinpoint problems quickly and reliably." },
    { img: imgAutoRepair, title: "Auto Repair", desc: "Expert repair services for engines, brakes, suspension, and general mechanical issues." },
    { img: imgOilChange, title: "Preventive Maintenance", desc: "Routine maintenance services to keep your vehicle running smoothly." },
    { img: imgWashing, title: "Car Spa & Care", desc: "Professional car washing and care for a spotless, fresh appearance." },
    { img: imgWindowTinting, title: "Window Tinting", desc: "High-quality window tinting for heat reduction and added privacy." },
    { img: imgPaintProtection, title: "Paint Protection", desc: "Protect your car's paint from scratches and environmental damage." },
    { img: imgDetailing, title: "Detailing", desc: "Deep interior and exterior detailing to restore your car's shine." },
    { img: imgAutoRepair, title: "Electrical Works", desc: "Expert electrical diagnostics and repairs for all vehicle systems." },
    { img: imgAutoRepair, title: "Mechanical Works", desc: "Comprehensive mechanical repair services including engine and drivetrain." },
  ];

  return (
    <section id="services" className="relative w-full py-16 md:py-24 bg-black overflow-hidden">
      {/* Background Image - Optimized for SEO */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={imgBgServices}
          alt="Genuine Garage Dubai - Professional Auto Service Center"
          className="w-full h-full object-cover opacity-10 md:opacity-20"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black" />
      </div>

      <div className="relative z-10 px-4 md:px-[56px] max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.h2
          className="font-['Bebas_Neue'] text-[40px] md:text-[60px] text-center text-white mb-4 uppercase leading-none"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Auto Repair Services
        </motion.h2>

        <motion.p
          className="font-['Montserrat'] font-light text-[#b3adb4] text-[16px] md:text-[24px] text-center mb-10 md:mb-16 max-w-[800px] mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Professional car repair and maintenance services in Dubai
        </motion.p>

        {/* Services Grid (10 Items) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              image={service.img}
              title={service.title}
              description={service.desc}
              onClick={() => onServiceClick(service.title)}
              delay={(index % 3) * 0.1}
            />
          ))}
        </div>

        {/* Call to Actions - Hero Consistent Design */}
        <div className="text-center mt-12">
          <motion.h3
            className="font-['Bebas_Neue'] text-[#fff2c3] text-[24px] md:text-[40px] mb-8 uppercase px-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Not Sure what your Car needs?
          </motion.h3>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 px-4">
            
            {/* Call Now - Yellow to Black Inversion */}
            <motion.a
              href="tel:+971524895673"
              onClick={onCallClick}
              className="bg-[#f0c93b] w-full sm:w-[280px] md:w-[320px] h-[80px] md:h-[100px] flex items-center justify-center gap-3 cursor-pointer rounded-none group border border-[#f0c93b]"
              whileHover="hover"
              animate="initial"
              variants={{
                hover: { backgroundColor: "#000000", scale: 1.02, transition: springTransition }
              }}
              whileTap={{ scale: 0.98 }}
              aria-label="Call Genuine Garage"
            >
              <motion.div variants={iconVariants.phone}>
                <Phone className="w-7 h-7 text-black group-hover:text-[#f0c93b] transition-colors duration-300 fill-current" />
              </motion.div>
              <span className="font-['Montserrat'] font-black text-black group-hover:text-[#f0c93b] text-[20px] md:text-[28px] uppercase transition-colors duration-300">
                CALL NOW
              </span>
            </motion.a>

            {/* Get a Quote - Ghost to Yellow Inversion */}
            <motion.button
              onClick={scrollToContact}
              className="bg-black/40 border-[#f0c93b] border-[2px] w-full sm:w-[280px] md:w-[320px] h-[80px] md:h-[100px] flex items-center justify-center gap-3 cursor-pointer rounded-none group backdrop-blur-sm"
              whileHover="hover"
              animate="initial"
              variants={{
                hover: { backgroundColor: "#f0c93b", scale: 1.02, transition: springTransition }
              }}
              whileTap={{ scale: 0.98 }}
              aria-label="Request a repair quote"
            >
              <motion.div variants={iconVariants.message}>
                <MessageCircle className="w-7 h-7 text-[#f0c93b] group-hover:text-black transition-colors duration-300" />
              </motion.div>
              <span className="font-['Montserrat'] font-bold text-[#f0c93b] group-hover:text-black text-[20px] md:text-[28px] uppercase transition-colors duration-300">
                Get a QUOTE
              </span>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ image, title, description, onClick, delay }: ServiceCardProps) {
  return (
    <motion.article
      className="bg-[#1c1b17] min-h-[260px] md:h-[320px] p-6 cursor-pointer flex flex-col items-center justify-center border border-white/5 hover:border-[#f0c93b]/50 transition-colors group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.4, delay }}
      onClick={onClick}
    >
      <motion.div 
        className="w-full h-[120px] md:h-[150px] mb-4 flex items-center justify-center"
        whileHover={{ y: -10, scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <img 
          src={image} 
          alt={`${title} Service - Genuine Garage Dubai`} 
          className="max-w-[180px] md:max-w-[220px] max-h-full object-contain filter drop-shadow-xl transition-transform duration-300" 
        />
      </motion.div>

      <h3 className="font-['Bebas_Neue'] text-[#fff2c3] text-[24px] md:text-[28px] text-center mb-2 uppercase tracking-wide group-hover:text-[#f0c93b] transition-colors">
        {title}
      </h3>

      <p className="font-['Montserrat'] font-light text-[#b3adb4] text-[13px] md:text-[14px] text-center leading-snug">
        {description}
      </p>
    </motion.article>
  );
}