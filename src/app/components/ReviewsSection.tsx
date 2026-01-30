import { motion } from "motion/react";
import imgStars from "@/assets/imgStars.png";

export function ReviewsSection() {
  const reviews = [
    {
      name: "Ahmed Al Mansoori",
      date: "December 15, 2024",
      text: "Excellent service! My car was repaired quickly and professionally. The team at Genuine Auto Repair was very transparent about the pricing and kept me informed throughout the process. Highly recommend!",
    },
    {
      name: "Sarah Johnson",
      date: "December 10, 2024",
      text: "I've been bringing my car here for over a year now. The quality of work is outstanding, and the staff is always friendly and helpful. They've earned my trust and loyalty!",
    },
    {
      name: "Mohammed Hassan",
      date: "December 5, 2024",
      text: "Best auto repair shop in Dubai! They did an amazing job with my car's ceramic coating. The attention to detail was impressive. Will definitely be back for all my car maintenance needs.",
    },
    {
      name: "Lisa Chen",
      date: "November 28, 2024",
      text: "Fair pricing, honest service, and skilled technicians. What more could you ask for? They diagnosed and fixed my car's issue quickly. Very satisfied with the experience!",
    },
    {
      name: "Omar Khalid",
      date: "November 20, 2024",
      text: "Took my car for window tinting and paint protection. The result exceeded my expectations! The team was professional from start to finish. Definitely recommend their services.",
    },
    {
      name: "Jennifer Martinez",
      date: "November 15, 2024",
      text: "I had a great experience with Genuine Auto Repair. They were honest about what my car needed and didn't try to upsell me on unnecessary services. The quality of parts they use is excellent!",
    },
  ];

  return (
    <div id="reviews" className="relative w-full py-16 md:py-24 px-5 md:px-[68px]">
      {/* Section Title */}
      <motion.h2
        className="font-['Bebas_Neue'] text-[48px] md:text-[100px] text-center mb-4 md:mb-6 tracking-normal md:tracking-[1.92px] uppercase leading-tight"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-[#f0c93b]">CUSTOMER </span>
        <span className="text-white">REVIEWS</span>
      </motion.h2>

      <motion.p
        className="font-['Montserrat'] font-medium text-white text-[16px] md:text-[24px] text-center mb-10 md:mb-16 opacity-80"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        What our clients say about our Services
      </motion.p>

      {/* Reviews Grid - 1 col on mobile, 2 col on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-[1304px] mx-auto">
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            {...review}
            delay={index * 0.1}
          />
        ))}
      </div>

      {/* Overall Rating Summary */}
      <motion.div
        className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4 mt-12 md:mt-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <div className="flex items-center gap-3">
          <span className="font-['Bebas_Neue'] text-[#f0c93b] text-[40px] md:text-[48px]">
            4.7
          </span>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-[#f0c93b] text-[24px] md:text-[32px]">
                ★
              </span>
            ))}
          </div>
        </div>
        <span className="font-['Montserrat'] font-medium text-white text-[18px] md:text-[24px] opacity-90">
          Overall Rating based on 500+ reviews
        </span>
      </motion.div>
    </div>
  );
}

interface ReviewCardProps {
  name: string;
  date: string;
  text: string;
  delay: number;
}

function ReviewCard({ name, date, text, delay }: ReviewCardProps) {
  return (
    <motion.div
      className="bg-[#1c1b17] border border-[#f0c93b]/50 rounded-[10px] shadow-2xl p-6 md:p-8 cursor-pointer group hover:border-[#f0c93b]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{
        y: -6,
        backgroundColor: "#22211c",
        transition: { duration: 0.3 },
      }}
    >
      {/* Star Rating Image */}
      <motion.div
        className="mb-4 md:mb-5 max-w-[150px] md:max-w-[200px]"
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: delay + 0.2 }}
      >
        <img
          src={imgStars}
          alt="5 Stars"
          className="w-full object-contain"
        />
      </motion.div>

      {/* Reviewer Name */}
      <h4 className="font-['Bebas_Neue'] text-[#f0c93b] text-[22px] md:text-[26px] mb-1 uppercase tracking-wide">
        {name}
      </h4>

      {/* Review Date */}
      <p className="font-['Montserrat'] font-light text-[#b3adb4] text-[12px] md:text-[14px] mb-4 italic">
        {date}
      </p>

      {/* Review Text */}
      <p className="font-['Montserrat'] font-light text-white text-[14px] md:text-[16px] leading-relaxed opacity-90">
        "{text}"
      </p>
    </motion.div>
  );
}