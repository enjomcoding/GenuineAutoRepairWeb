import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import imgAbout from "@/assets/imgAbout2.jpg";

interface AboutSectionProps {
  onCallClick: () => void;
}

export function AboutSection({ onCallClick }: AboutSectionProps) {
  const PHONE_NUMBER = "+971524895673";
  const springTransition = { type: "spring", stiffness: 400, damping: 25 };

  // Matching Hero Icon Animations
  const iconVariants = {
    phone: {
      hover: { 
        y: -5, 
        rotate: [0, -10, 10, -10, 10, 0],
        transition: { duration: 0.4 } 
      }
    }
  };

  return (
    <section id="about" className="relative w-full overflow-hidden bg-black">
      {/* Background gradient overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.5) 100%)",
        }}
      />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto py-16 md:py-28 px-6 lg:px-[82px]">
        
        {/* --- Main Section Title --- */}
        <motion.h2
          className="font-['Bebas_Neue'] text-5xl sm:text-7xl lg:text-[100px] leading-[0.9] mb-6 md:mb-10 uppercase"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#f0c93b] block md:inline mr-3">ABOUT</span>
          <span className="text-white">Genuine Garage</span>
        </motion.h2>

        <motion.p
          className="font-['Montserrat'] font-semibold text-[#f0c93b] text-lg md:text-[24px] mb-12 md:mb-20 max-w-2xl uppercase tracking-wider"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          The standard for agency-level auto care in Dubai.
        </motion.p>

        {/* --- Content Grid --- */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
          
          {/* Left Content (Text) */}
          <div className="flex-1 w-full order-2 lg:order-1">
            <motion.h3
              className="font-['Bebas_Neue'] text-white text-[36px] md:text-[56px] leading-none mb-6 md:mb-8 uppercase tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Who we Are
            </motion.h3>

            <motion.p
              className="font-['Montserrat'] font-medium text-white/90 text-[16px] md:text-[19px] leading-relaxed mb-10 max-w-full lg:max-w-[580px]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Genuine Garage is a premier full-service auto garage in Dubai. We specialize in precision 
              diagnostics, mechanical repairs, and luxury car spa services. From engine overhauls to 
              ceramic coating, we focus on transparent pricing and unmatched skilled workmanship.
            </motion.p>

            {/* Checklist Items */}
            <div className="space-y-6 mb-12">
              <ChecklistItem text="Years of Excellence" delay={0} isCounter targetValue={15} />
              <ChecklistItem text="Certified Master Technicians" delay={0.1} />
              <ChecklistItem text="Advanced Diagnostic Equipment" delay={0.2} />
              <ChecklistItem text="Premium OEM Parts & Materials" delay={0.3} />
            </div>

            {/* CALL NOW Button */}
            <motion.a
              href={`tel:${PHONE_NUMBER}`}
              onClick={(e) => {
                onCallClick();
              }}
              className="flex items-center justify-center bg-[#f0c93b] w-full md:w-[320px] h-[75px] md:h-[90px] gap-4 cursor-pointer rounded-none group border border-[#f0c93b] relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover="hover"
              variants={{
                hover: { backgroundColor: "#000000", scale: 1.03, transition: springTransition }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div variants={iconVariants.phone}>
                <CallIcon className="w-7 h-7 text-black group-hover:text-[#f0c93b] transition-colors duration-300 fill-current" />
              </motion.div>
              <span className="font-['Montserrat'] font-black text-black group-hover:text-[#f0c93b] text-[20px] md:text-[26px] uppercase tracking-wider transition-colors duration-300">
                CALL NOW
              </span>
            </motion.a>
          </div>

          {/* Right Content (Image) */}
          <motion.div
            className="flex-1 w-full lg:max-w-[600px] order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative w-full aspect-[4/3] lg:aspect-[4/5] rounded-none overflow-hidden border-2 border-[#f0c93b]/20 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
              <img
                src={imgAbout}
                alt="Genuine Garage Dubai - Professional Team and Workshop Facility"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// --- Sub Components ---

function ChecklistItem({ 
  text, 
  delay, 
  isCounter = false, 
  targetValue = 0 
}: { 
  text: string; 
  delay: number; 
  isCounter?: boolean; 
  targetValue?: number;
}) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView && isCounter) {
      animate(count, targetValue, { duration: 2, delay: delay + 0.5, ease: "easeOut" });
    }
  }, [isInView, isCounter, targetValue, count, delay]);

  return (
    <motion.div
      ref={ref}
      className="flex items-center gap-4 md:gap-5"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="flex-shrink-0">
        <CheckIcon className="w-7 h-7 md:w-9 md:h-9" />
      </div>
      
      <p className="font-['Montserrat'] font-semibold text-white/90 text-base md:text-[20px]">
        {isCounter ? (
          <>
            <motion.span className="font-bold text-[#f0c93b] inline-block min-w-[1.2ch]">
              {rounded}
            </motion.span>
            <span className="font-bold text-[#f0c93b] mr-1">+</span> {text}
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
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" stroke="#F0C93B" strokeWidth="2.5"/>
      <path d="M8 12L11 15L16 9" stroke="#F0C93B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CallIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
    </svg>
  );
}