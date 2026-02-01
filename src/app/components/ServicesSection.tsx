import { motion } from "motion/react";
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

export function ServicesSection({ onServiceClick, onCallClick }: ServicesSectionProps) {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
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
    <div id="services" className="relative w-full py-16 md:py-24">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          src={imgBgServices}
          alt=""
          className="w-full h-full object-cover opacity-10 md:opacity-20"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent"
        />
      </div>

      <div className="relative z-10 px-4 md:px-[56px]">
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

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              image={service.img}
              title={service.title}
              description={service.desc}
              onClick={() => onServiceClick(service.title)}
              delay={(index % 3) * 0.1} // Staggered only per row
            />
          ))}
        </div>

        {/* Call to Actions */}
        <div className="text-center">
          <motion.h3
            className="font-['Bebas_Neue'] text-[#fff2c3] text-[24px] md:text-[40px] mb-8 uppercase px-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Not Sure what your Car needs?
          </motion.h3>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 px-4">
            <motion.button
              onClick={scrollToContact}
              className="bg-[#f0c93b] w-full sm:w-[280px] md:w-[320px] py-6 md:h-[100px] font-['Montserrat'] font-bold text-[20px] md:text-[32px] text-black uppercase rounded-sm shadow-lg"
              whileHover={{ scale: 1.02, backgroundColor: "#ffd54f" }}
              whileTap={{ scale: 0.98 }}
            >
              Get a quote
            </motion.button>

            <motion.button
              onClick={(e) => {
                e.preventDefault();
                onCallClick();
              }}
              className="bg-black/40 border-[#f0c93b] border-[2px] w-full sm:w-[280px] md:w-[320px] py-6 md:h-[100px] font-['Montserrat'] font-bold text-[#f0c93b] text-[20px] md:text-[32px] uppercase rounded-sm backdrop-blur-sm"
              whileHover={{ scale: 1.02, backgroundColor: "rgba(28,27,23,0.9)" }}
              whileTap={{ scale: 0.98 }}
            >
              Call us now
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ image, title, description, onClick, delay }: ServiceCardProps) {
  return (
    <motion.div
      className="bg-[#1c1b17] min-h-[260px] md:h-[320px] p-6 cursor-pointer flex flex-col items-center justify-center border border-white/5 hover:border-[#f0c93b]/50 transition-colors"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.4, delay }}
      onClick={onClick}
    >
      <div className="w-full h-[120px] md:h-[150px] mb-4 flex items-center justify-center">
        <img 
          src={image} 
          alt={title} 
          className="max-w-[180px] md:max-w-[220px] max-h-full object-contain filter drop-shadow-xl group-hover:scale-110 transition-transform duration-300" 
        />
      </div>

      <h3 className="font-['Bebas_Neue'] text-[#fff2c3] text-[24px] md:text-[28px] text-center mb-2 uppercase tracking-wide">
        {title}
      </h3>

      <p className="font-['Montserrat'] font-light text-[#b3adb4] text-[13px] md:text-[14px] text-center leading-snug">
        {description}
      </p>
    </motion.div>
  );
}

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  onClick: () => void;
  delay: number;
}