import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Menu, X, Phone } from "lucide-react";
import imgGenuineLogo from "@/assets/imgGenuineLogo.png";

interface NavigationProps {
  isSticky: boolean;
}

const sections = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" }
];
const PHONE_NUMBER = "+971524895673";

export function Navigation({ isSticky }: NavigationProps) {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [barStyle, setBarStyle] = useState({ left: 0, width: 0 });
  const isClickScrolling = useRef(false);
  const scrollTimeout = useRef<NodeJS.Timeout>();

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false); 
    isClickScrolling.current = true;

    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);

    const section = document.getElementById(sectionId);
    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (section) {
      const targetY = section.offsetTop - 80;
      window.scrollTo({ top: targetY, behavior: "smooth" });
    }

    scrollTimeout.current = setTimeout(() => {
      isClickScrolling.current = false;
    }, 1000);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isClickScrolling.current) return;
      const scrollY = window.scrollY + 120;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const bottom = top + el.offsetHeight;
          if (scrollY >= top && scrollY < bottom) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const updateBar = () => {
      const activeLink = document.getElementById(`nav-${activeSection}`);
      if (activeLink) {
        setBarStyle({ 
          left: activeLink.offsetLeft, 
          width: activeLink.offsetWidth 
        });
      }
    };
    const timeout = setTimeout(updateBar, 100);
    window.addEventListener("resize", updateBar);
    return () => {
      window.removeEventListener("resize", updateBar);
      clearTimeout(timeout);
    };
  }, [activeSection]);

  const btnVariants = {
    initial: { backgroundColor: "#f0c93b", color: "#000000", borderColor: "#f0c93b" },
    hover: { backgroundColor: "#000000", color: "#f0c93b", borderColor: "#f0c93b" }
  };

  return (
    <header className={`${isSticky ? "fixed top-0 left-0 w-full" : "relative"} z-[110]`}>
      <nav className="bg-[#1f1f24] w-full border-b border-white/5" aria-label="Main Navigation">
        <div className="h-[90px] md:h-[110px] px-4 md:px-8 flex items-center justify-between relative max-w-[1440px] mx-auto">
          
          {/* Logo Section */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollToSection("home"); }}
            className="flex items-center gap-4 cursor-pointer group"
            title="Genuine Garage Dubai - Luxury Auto Repair"
          >
            <img
              src={imgGenuineLogo}
              alt="Genuine Garage Dubai - Premium Auto Repair & Maintenance Specialist"
              className="w-[70px] h-[70px] md:w-[100px] md:h-[100px] object-contain"
            />
            <div className="flex flex-col text-left border-l border-white/10 pl-4">
              <span className="font-['Bebas_Neue'] text-[#f0c93b] text-[28px] md:text-[40px] leading-[0.85] tracking-tight uppercase">GENUINE</span>
              <span className="font-['Bebas_Neue'] text-white text-[18px] md:text-[22px] tracking-[0.2em] uppercase mt-1">GARAGE</span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-10">
            <ul className="relative flex items-center gap-8 list-none">
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    id={`nav-${section.id}`}
                    onClick={() => scrollToSection(section.id)}
                    className={`font-['Montserrat'] font-bold text-[16px] uppercase tracking-wide transition-colors duration-300 ${
                      activeSection === section.id ? "text-[#f0c93b]" : "text-[#d1d1d1] hover:text-white"
                    }`}
                  >
                    {section.label}
                  </button>
                </li>
              ))}
              <motion.div
                className="absolute -bottom-2 h-[3px] bg-[#f0c93b]"
                animate={{ left: barStyle.left, width: barStyle.width }}
                transition={{ type: "spring", stiffness: 400, damping: 35 }}
              />
            </ul>

            <motion.a
              href={`tel:${PHONE_NUMBER}`}
              className="px-8 py-4 font-['Montserrat'] font-black text-[14px] uppercase rounded-none border-2 flex items-center gap-2"
              initial="initial"
              whileHover="hover"
              variants={btnVariants}
              whileTap={{ scale: 0.98 }}
            >
              Call Now
            </motion.a>
          </div>

          {/* Mobile Controls */}
          <div className="flex lg:hidden items-center gap-5">
            {/* Circle Mobile Call Button */}
            <motion.a 
              href={`tel:${PHONE_NUMBER}`}
              aria-label="Call Genuine Garage"
              className="w-12 h-12 rounded-full border-2 flex items-center justify-center shadow-lg"
              initial="initial"
              whileHover="hover"
              variants={btnVariants}
              whileTap={{ scale: 0.9 }}
            >
              <Phone size={20} className="fill-current" />
            </motion.a>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="text-white p-1"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={36} /> : <Menu size={36} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                onClick={() => setIsMenuOpen(false)}
                className="fixed inset-0 bg-black/80 lg:hidden z-[115] backdrop-blur-sm"
              />
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full left-0 w-full bg-[#1a1a1e] border-t border-white/10 z-[120] lg:hidden"
              >
                <nav className="flex flex-col p-8 gap-6">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`font-['Montserrat'] text-[24px] font-black uppercase text-left tracking-widest ${
                        activeSection === section.id ? "text-[#f0c93b]" : "text-white"
                      }`}
                    >
                      {section.label}
                    </button>
                  ))}
                  <motion.a 
                    href={`tel:${PHONE_NUMBER}`} 
                    className="mt-4 flex items-center justify-center gap-3 font-black p-5 rounded-none uppercase border-2"
                    initial="initial"
                    whileHover="hover"
                    variants={btnVariants}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Phone size={20} className="fill-current" />
                    Call Now
                  </motion.a>
                </nav>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}