import { motion } from "motion/react";
import imgAbout from "@/assets/imgAbout.png";

interface AboutSectionProps {
  onCallClick: () => void;
}

export function AboutSection({ onCallClick }: AboutSectionProps) {
  return (
    <section className="relative w-full overflow-hidden bg-[#0a0a0a]">
      {/* Background gradient overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(rgba(0, 0, 0, 0.8) 0%, rgba(4, 0, 0, 0) 100%)",
        }}
      />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto py-12 md:py-24 px-6 lg:px-[82px]">
        
        {/* --- Main Section Title --- */}
        <motion.h2
          className="font-['Bebas_Neue'] text-5xl sm:text-7xl lg:text-[100px] leading-[0.9] mb-6 md:mb-10 uppercase"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#f0c93b] block md:inline mr-3">ABOUT</span>
          <span className="text-white">Genuine Auto Repair</span>
        </motion.h2>

        <motion.p
          className="font-['Montserrat'] font-medium text-white/80 text-lg md:text-[22px] mb-12 md:mb-20 max-w-2xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Professional Automotive care you can trust in Dubai
        </motion.p>

        {/* --- Content Grid --- */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
          
          {/* Left Content (Text) */}
          <div className="flex-1 w-full order-2 lg:order-1">
            <motion.h3
              className="font-['Bebas_Neue'] text-white text-[32px] md:text-[56px] leading-none mb-6 md:mb-8 uppercase"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Who we Are
            </motion.h3>

            <motion.p
              className="font-['Montserrat'] font-medium text-white/90 text-[15px] md:text-[18px] leading-relaxed mb-10 max-w-full lg:max-w-[550px]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Genuine Auto Repair is a full-service auto garage in Dubai,
              offering diagnostics, repairs, detailing, and paint protection. We
              focus on honest pricing, skilled workmanship, and customer
              satisfaction.
            </motion.p>

            {/* Checklist Items */}
            <div className="space-y-5 mb-12">
              <ChecklistItem text="10+ Years of Experience" delay={0} />
              <ChecklistItem text="Certified Technicians" delay={0.1} />
              <ChecklistItem text="Modern Equipment" delay={0.2} />
              <ChecklistItem text="Quality parts & materials" delay={0.3} />
            </div>

            {/* Call Now Button - Consistent with Contact Section */}
            <motion.button
              onClick={(e) => {
                e.preventDefault();
                onCallClick();
              }}
              className="flex items-center justify-center bg-[#f0c93b] w-full md:w-[350px] py-5 md:py-6 gap-4 cursor-pointer active:scale-95 transition-all shadow-lg shadow-black/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.02, backgroundColor: "#ffd54f" }}
            >
              <CallIcon className="w-6 h-6 md:w-7 md:h-7 text-[#1D1B20]" />
              <span className="font-['Montserrat'] font-black text-[#1D1B20] text-[18px] md:text-[22px] uppercase tracking-wider">
                CALL NOW
              </span>
            </motion.button>
          </div>

          {/* Right Content (Image) */}
          <motion.div
            className="flex-1 w-full lg:max-w-[550px] order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="relative w-full aspect-[4/3] lg:aspect-[4/5] rounded-2xl md:rounded-[40px] overflow-hidden border-2 border-[#f0c93b]/30 shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={imgAbout}
                alt="Genuine Auto Repair Shop Team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// --- Sub Components ---

function ChecklistItem({ text, delay }: { text: string; delay: number }) {
  return (
    <motion.div
      className="flex items-center gap-4 md:gap-5"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="flex-shrink-0">
        <CheckIcon className="w-6 h-6 md:w-8 md:h-8" />
      </div>
      
      <p className="font-['Montserrat'] font-medium text-white/90 text-base md:text-[18px]">
        {text.includes("10+") ? (
          <>
            <span className="font-bold text-[#f0c93b]">10+</span> Years of Experience
          </>
        ) : (
          text
        )}
      </p>
    </motion.div>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      className={className} 
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="10" stroke="#F0C93B" strokeWidth="2"/>
      <path
        d="M8 12L11 15L16 9"
        stroke="#F0C93B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CallIcon({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
    </svg>
  );
}