import { motion } from "motion/react";
import imgWrenchgear from "@/assets/imgWrenchgear.png";
import imgP1 from "@/assets/imgP1.png";
import imgGear from "@/assets/imgGear.png";

export function FeatureCards() {
  return (
    // Responsive padding: px-6 on mobile, px-[103px] on desktop
    <div className="relative w-full py-16 md:py-24 px-6 md:px-[103px]">
      {/* Grid: 1 column on mobile, 3 columns on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
        <FeatureCard
          image={imgWrenchgear}
          title="Experienced Mechanics"
          description="Skilled and Certified auto technicians"
          delay={0}
        />
        <FeatureCard
          image={imgP1}
          title="Honest Pricing"
          description="Fair and transparent quotes"
          delay={0.1}
        />
        <FeatureCard
          image={imgGear}
          title="Quality Parts"
          description="We use top quality parts for repairs"
          delay={0.2}
        />
      </div>
    </div>
  );
}

interface FeatureCardProps {
  image: string;
  title: string;
  description: string;
  delay: number;
}

function FeatureCard({ image, title, description, delay }: FeatureCardProps) {
  return (
    <motion.div
      // Changed h-[280px] to min-h-[280px] for better text scaling on mobile
      className="bg-[#1c1b17] min-h-[280px] p-6 cursor-pointer group flex flex-col items-center border border-transparent"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }} // Adjusted margin for better mobile triggering
      transition={{ duration: 0.5, delay }}
      whileHover={{
        y: -6,
        boxShadow: "0 0 20px rgba(240, 201, 59, 0.3)",
        borderColor: "#f0c93b",
        transition: { duration: 0.3, ease: "easeOut" },
      }}
    >
      {/* Icon Image - Responsive sizing */}
      <motion.div
        className="w-full h-[120px] md:h-[150px] mb-4 flex items-center justify-center flex-shrink-0"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <img
          src={image}
          alt={title}
          className="w-[100px] h-[100px] md:w-[140px] md:h-[140px] object-contain"
        />
      </motion.div>

      {/* Title */}
      <h3 className="font-['Bebas_Neue'] text-white text-[24px] md:text-[28px] text-center mb-2 leading-tight px-2 uppercase">
        {title.includes("Experienced") ? (
          <>
            Experienced 
            Mechanics
          </>
        ) : (
          title
        )}
      </h3>

      {/* Description */}
      <p className="font-['Montserrat'] font-normal text-[#b3adb4] text-[16px] md:text-[18px] text-center px-3 leading-snug">
        {description}
      </p>
    </motion.div>
  );
}