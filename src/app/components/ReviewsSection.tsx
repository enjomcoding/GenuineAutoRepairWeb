import { motion } from "framer-motion";
import imgStars from "@/assets/imgStars.png";

export function ReviewsSection() {
  const reviews = [
    {
      name: "Ahmed Al Mansoori",
      date: "2024-12-15",
      displayDate: "December 15, 2024",
      text: "Excellent service! My car was repaired quickly and professionally. The team at Genuine Auto Repair was very transparent about the pricing and kept me informed throughout the process. Highly recommend!",
    },
    {
      name: "Sarah Johnson",
      date: "2024-12-10",
      displayDate: "December 10, 2024",
      text: "I've been bringing my car here for over a year now. The quality of work is outstanding, and the staff is always friendly and helpful. They've earned my trust and loyalty!",
    },
    {
      name: "Mohammed Hassan",
      date: "2024-12-05",
      displayDate: "December 5, 2024",
      text: "Best auto repair shop in Dubai! They did an amazing job with my car's ceramic coating. The attention to detail was impressive. Will definitely be back for all my car maintenance needs.",
    },
    {
      name: "Lisa Chen",
      date: "2024-11-28",
      displayDate: "November 28, 2024",
      text: "Fair pricing, honest service, and skilled technicians. What more could you ask for? They diagnosed and fixed my car's issue quickly. Very satisfied with the experience!",
    },
    {
      name: "Omar Khalid",
      date: "2024-11-20",
      displayDate: "November 20, 2024",
      text: "Took my car for window tinting and paint protection. The result exceeded my expectations! The team was professional from start to finish. Definitely recommend their services.",
    },
    {
      name: "Jennifer Martinez",
      date: "2024-11-15",
      displayDate: "November 15, 2024",
      text: "I had a great experience with Genuine Auto Repair. They were honest about what my car needed and didn't try to upsell me on unnecessary services. The quality of parts they use is excellent!",
    },
  ];

  const springTransition = { type: "spring", stiffness: 400, damping: 25 };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Genuine Garage Dubai",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.7",
      "reviewCount": "500"
    }
  };

  return (
    <section id="reviews" className="relative w-full py-16 md:py-32 px-5 md:px-[73px] bg-[#0a0a0a] overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Section Header */}
      <div className="max-w-[1304px] mx-auto mb-12 md:mb-20">
        <motion.h2
          className="font-['Bebas_Neue'] text-[42px] sm:text-[48px] md:text-[100px] mb-4 tracking-tight uppercase leading-[1.1]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#f0c93b]">CUSTOMER </span>
          <span className="text-white">REVIEWS</span>
        </motion.h2>

        <motion.p
          className="font-['Montserrat'] font-medium text-white/70 text-[16px] md:text-[22px] max-w-[700px]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Dubai's top-rated specialists. See why hundreds of car owners trust Genuine Garage for premium maintenance and repair.
        </motion.p>
      </div>

      {/* Reviews Grid - 6 Reviews */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-10 max-w-[1304px] mx-auto mb-16 md:mb-24">
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} delay={index * 0.1} />
        ))}
      </div>

      {/* Trust Summary & CTA */}
      <div className="max-w-[1304px] mx-auto border-t border-white/10 pt-16 flex flex-col items-center">
        <motion.div
          className="flex flex-col md:flex-row items-center gap-8 md:gap-16 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4">
            <span className="font-['Bebas_Neue'] text-[#f0c93b] text-[56px] md:text-[80px] leading-none">4.7</span>
            <div>
              <div className="flex gap-1 mb-1 text-[#f0c93b] text-[24px]">★★★★★</div>
              <p className="font-['Montserrat'] font-bold text-white text-[12px] uppercase tracking-[0.2em] opacity-60">Google Rating</p>
            </div>
          </div>
          <div className="hidden md:block w-[1px] h-20 bg-white/10" />
          <p className="font-['Montserrat'] font-semibold text-white text-[20px] md:text-[24px] text-center md:text-left max-w-[400px]">
            Trusted by <span className="text-[#f0c93b]">500+</span> Satisfied Drivers in Dubai
          </p>
        </motion.div>

        {/* Action Button */}
        <motion.a
          href="https://search.google.com/local/writereview?placeid=ChIJv94KWjBdXz4RtUyHMRU3hLQ"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center bg-[#f0c93b] w-full md:w-[450px] py-6 md:py-7 gap-4 cursor-pointer rounded-none group border border-[#f0c93b] shadow-2xl"
          whileHover="hover"
          variants={{
            hover: { backgroundColor: "#000000", scale: 1.02, transition: springTransition }
          }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="font-['Montserrat'] font-black text-black group-hover:text-[#f0c93b] text-[18px] md:text-[24px] uppercase tracking-widest transition-colors duration-300">
            WRITE A REVIEW
          </span>
          <motion.svg 
            variants={{ hover: { x: 5 } }}
            className="w-6 h-6 text-black group-hover:text-[#f0c93b] transition-colors duration-300" 
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </motion.svg>
        </motion.a>
      </div>
    </section>
  );
}

function ReviewCard({ name, date, displayDate, text, delay }: any) {
  return (
    <motion.div
      className="bg-[#141414] border border-white/5 p-8 md:p-10 relative group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="absolute top-0 left-0 w-[2px] h-0 bg-[#f0c93b] transition-all duration-500 group-hover:h-full" />
      <div className="flex flex-col h-full">
        <div className="mb-6 flex justify-between items-start">
          <img src={imgStars} alt="5 Stars" className="w-[120px] grayscale brightness-125 group-hover:grayscale-0 transition-all duration-500" />
          <span className="font-['Montserrat'] text-[10px] text-white/20 uppercase tracking-[0.2em] font-bold">Genuine Customer</span>
        </div>
        <h4 className="font-['Bebas_Neue'] text-white text-[24px] md:text-[28px] mb-1 tracking-wide group-hover:text-[#f0c93b] transition-colors">{name}</h4>
        <time dateTime={date} className="font-['Montserrat'] font-bold text-[#f0c93b] text-[11px] mb-6 uppercase tracking-[0.15em] opacity-80">{displayDate}</time>
        <p className="font-['Montserrat'] font-medium text-white/80 text-[15px] md:text-[17px] leading-relaxed italic">"{text}"</p>
      </div>
    </motion.div>
  );
}