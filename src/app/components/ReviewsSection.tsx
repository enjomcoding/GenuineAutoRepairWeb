import { motion } from "framer-motion";
import imgStars from "@/assets/imgStars.png";

export function ReviewsSection() {
  // Dates calculated back from February 2026 to match your relative terms
  const reviews = [
    {
      name: "Ahmed Babaiker",
      date: "2026-01-05", 
      displayDate: "a month ago",
      text: "The best ever ,,,\n\nSo professionals and the level of the hospitality I can’t describe it\n\nWith a very nice and clean area for the customers and free wifi\n\nVery transparent and clear about the problems and how they are going to fix them\n\nAnd the price when you compare it with the market you will find out it’s reasonable\n\nI only fix my car with them since many years back",
    },
    {
      name: "Jihad Debian",
      date: "2025-11-01",
      displayDate: "3 months ago",
      text: "I couldn't be happier with my experience at Genuine Garage!\nAfter struggling with an issue that several other garages couldn't troubleshoot or identify, I was relieved to find a team with such impressive expertise.\n\nThe entire staff demonstrated an in-depth knowledge of my vehicle and quickly pinpointed the problems that had stumped others. Not only did they fix it efficiently, but their reasonable rates made the experience even better.\n\nIt's hard to find a garage that combines quality service with affordability, but Genuine Garage hits the mark perfectly. I highly recommend them to anyone looking for reliable and skilled mechanics.\n\nThank you guys for the fantastic service and experience!",
    },
    {
      name: "Elias Hassoun",
      date: "2025-12-10",
      displayDate: "2 months ago",
      text: "I have always had excellent service from Genuine Auto General Repairing. The whole team is professional and friendly, taking time to define, explain and fix any issues about my cars.",
    },
    {
      name: "Daniele Giuffrida",
      date: "2025-10-05",
      displayDate: "4 months ago",
      text: "Excellent service, professional and responsible. I liked the welcoming attitude and the effectiveness in their reaction. They managed to solve a major issue that three previous garages were not able neither to identify nor to fix. Praise to Mr. Fahad, the owner, and to Mr. Kamali, the manager. I recommend their garage.",
    },
    {
      name: "Richard P",
      date: "2025-12-12",
      displayDate: "2 months ago",
      text: "Excellent service. Very knowledgeable and friendly. I highly recommend Fahd and his team for all your maintenance and repair requirements.",
    },
    {
      name: "Housam Kanbriss",
      date: "2025-11-15",
      displayDate: "3 months ago",
      text: "Top place; reliable, high quality, fast and very cost effective. The owner, manager (Kamali), and staff are top notch. All and all, best Auto services and repair shop in Dubai!",
    },
  ];

  const springTransition = { type: "spring", stiffness: 400, damping: 25 };

  return (
    <section id="reviews" className="relative w-full py-16 md:py-32 px-5 md:px-[73px] bg-[#0a0a0a] overflow-hidden">
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-[1304px] mx-auto mb-16 md:mb-24">
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
  // Helper to keep dates updated automatically as time passes
  const getAutoRelativeDate = (originalDate: string, originalText: string) => {
    const eventDate = new Date(originalDate);
    const now = new Date();
    const diffInMonths = (now.getFullYear() - eventDate.getFullYear()) * 12 + (now.getMonth() - eventDate.getMonth());
    
    // If it's still within the same month range as your manual text, use your text
    if (diffInMonths <= parseInt(originalText) || originalText.includes('month')) {
        return originalText; 
    }

    // Otherwise, let it age naturally
    if (diffInMonths < 12) return `${diffInMonths} months ago`;
    const years = Math.floor(diffInMonths / 12);
    return years === 1 ? "a year ago" : `${years} years ago`;
  };

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
        <time dateTime={date} className="font-['Montserrat'] font-bold text-[#f0c93b] text-[11px] mb-6 uppercase tracking-[0.15em] opacity-80">
          {getAutoRelativeDate(date, displayDate)}
        </time>
        <p className="font-['Montserrat'] font-medium text-white/80 text-[15px] md:text-[17px] leading-relaxed italic whitespace-pre-line">"{text}"</p>
      </div>
    </motion.div>
  );
}