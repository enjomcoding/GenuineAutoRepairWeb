import { motion } from "motion/react";
import { Facebook, Instagram, MessageCircle } from "lucide-react";

export function StickySocialButtons() {
  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      href: "https://www.facebook.com/genuineautorepair",
      color: "#1877F2",
      hoverColor: "#1565C0",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/genuineautorepair",
      color: "#E4405F",
      hoverColor: "#C13584",
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      href: "https://wa.me/971524895673",
      color: "#25D366",
      hoverColor: "#1EBE57",
      isPrimary: true, // Tag for special animation
    },
  ];

  return (
    <div className="fixed right-4 md:right-8 bottom-4 md:bottom-8 z-[200] flex flex-col gap-3 md:gap-4">
      {socialLinks.map((social, index) => (
        <motion.a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-[0_4px_15px_rgba(0,0,0,0.3)] cursor-pointer"
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
            scale: 1.15,
            backgroundColor: social.hoverColor,
            boxShadow: "0 0 25px rgba(240, 201, 59, 0.2)",
          }}
          whileTap={{ scale: 0.9 }}
        >
          {/* Subtle Pulse effect for WhatsApp */}
          {social.isPrimary && (
            <motion.span
              className="absolute inset-0 rounded-full bg-[#25D366] -z-10"
              animate={{ 
                scale: [1, 1.4, 1],
                opacity: [0.5, 0, 0.5] 
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          )}
          
          <social.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
          
          {/* Tooltip for Desktop only */}
          <span className="absolute right-full mr-3 px-2 py-1 bg-black/80 text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity hidden md:block uppercase tracking-tighter">
            {social.name}
          </span>
        </motion.a>
      ))}
    </div>
  );
}