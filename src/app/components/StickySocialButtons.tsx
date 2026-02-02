import { motion } from "framer-motion"; 
import { Facebook, Instagram, MessageCircle } from "lucide-react";

export function StickySocialButtons() {
  const socialLinks = [
    {
      name: "WhatsApp",
      label: "Chat with a Mechanic on WhatsApp",
      icon: MessageCircle,
      // Uses api.whatsapp.com for best compatibility
      href: "https://api.whatsapp.com/send?phone=971524895673&text=Hello%20Genuine%20Garage%2C%20I%20would%20like%20to%20get%20a%20quote%20for%20a%20car%20service.",
      color: "#25D366",
      hoverColor: "#1EBE57",
      isPrimary: true, // Adds the pulse effect
    },
    {
      name: "Instagram",
      label: "Follow Genuine Garage on Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/genuine.garage/",
      color: "#E4405F",
      hoverColor: "#C13584",
    },
    {
      name: "Facebook",
      label: "Follow Genuine Garage on Facebook",
      icon: Facebook,
      href: "https://www.facebook.com/profile.php?id=100084750101762",
      color: "#1877F2",
      hoverColor: "#1565C0",
    },
  ];

  return (
    <aside 
      className="fixed right-4 md:right-8 bottom-4 md:bottom-8 z-[200] flex flex-col gap-3 md:gap-4"
      aria-label="Social Media Links"
    >
      {socialLinks.map((social, index) => (
        <motion.a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className="group relative w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center shadow-[0_8px_20px_rgba(0,0,0,0.4)] cursor-pointer border border-white/10"
          style={{ backgroundColor: social.color }}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ 
            duration: 0.5, 
            delay: index * 0.1,
            type: "spring",
            stiffness: 260,
            damping: 20 
          }}
          whileHover={{
            scale: 1.1,
            backgroundColor: social.hoverColor,
            boxShadow: "0 0 30px rgba(0,0,0,0.5)",
          }}
          whileTap={{ scale: 0.9 }}
        >
          <span className="sr-only">{social.name}</span>

          {/* Pulse Effect for Primary Button (WhatsApp) */}
          {social.isPrimary && (
            <motion.span
              className="absolute inset-0 rounded-full bg-[#25D366] -z-10"
              animate={{ 
                scale: [1, 1.4, 1],
                opacity: [0.6, 0, 0.6] 
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          )}
          
          <social.icon className="w-5 h-5 md:w-6 md:h-6 text-white" strokeWidth={2.5} />
          
          {/* Hover Tooltip (Desktop Only) */}
          <span className="absolute right-full mr-4 px-3 py-1.5 bg-[#1c1b17] border border-[#f0c93b]/30 text-[#f0c93b] text-[10px] font-bold rounded-sm opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none hidden md:block uppercase tracking-[0.1em] whitespace-nowrap shadow-xl">
            {social.name}
          </span>
        </motion.a>
      ))}
    </aside>
  );
}