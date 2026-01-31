import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState, useRef } from "react";
import { Menu, X, Phone } from "lucide-react";
import imgGenuineLogo from "@/assets/imgGenuineLogo.png";

interface NavigationProps {
  isSticky: boolean;
}

const sections = ["home", "services", "about", "contact"];

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

    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        const rect = section.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const targetY = rect.top + scrollTop - 80;

        window.scrollTo({
          top: targetY,
          behavior: "smooth"
        });
      }
    }

    scrollTimeout.current = setTimeout(() => {
      isClickScrolling.current = false;
    }, 1000);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isClickScrolling.current) return;
      const scrollY = window.scrollY + 100;
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;
          if (scrollY >= sectionTop && scrollY < sectionBottom) {
            if (activeSection !== sectionId) setActiveSection(sectionId);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  useEffect(() => {
    const updateBarPosition = () => {
      const activeLink = document.getElementById(`nav-${activeSection}`);
      if (!activeLink || !activeLink.parentElement) return;
      const rect = activeLink.getBoundingClientRect();
      const navRect = activeLink.parentElement.getBoundingClientRect();
      setBarStyle({ left: rect.left - navRect.left, width: rect.width });
    };
    updateBarPosition();
    window.addEventListener("resize", updateBarPosition);
    return () => window.removeEventListener("resize", updateBarPosition);
  }, [activeSection]);

  return (
    <div className={`${isSticky ? "fixed top-0 left-0 w-full" : "relative"} z-[110]`}>
      <motion.nav className="bg-[#1f1f24] w-full border-b border-white/5">
        <div className="h-[90px] md:h-[110px] px-4 md:px-8 flex items-center justify-between relative z-[130]">
          
          {/* Logo Section - Large & Clear */}
          <motion.button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-4 cursor-pointer group"
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={imgGenuineLogo}
              alt="Genuine Garage"
              className="w-[70px] h-[70px] md:w-[100px] md:h-[100px] object-contain"
              style={{ imageRendering: 'auto' }} 
            />
            
            <div className="flex flex-col text-left border-l border-white/10 pl-4">
              <span className="font-['Bebas_Neue'] text-[#f0c93b] text-[28px] md:text-[40px] leading-[0.85] tracking-tight uppercase">
                GENUINE
              </span>
              <span className="font-['Bebas_Neue'] text-white text-[18px] md:text-[22px] tracking-[0.2em] uppercase mt-1">
                GARAGE
              </span>
            </div>
          </motion.button>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-10">
            <div className="relative flex items-center gap-8">
              {sections.map((section) => (
                <NavLink
                  key={section}
                  id={`nav-${section}`}
                  onClick={() => scrollToSection(section)}
                  active={activeSection === section}
                >
                  {section}
                </NavLink>
              ))}
              <motion.div
                className="absolute -bottom-2 h-[3px] bg-[#f0c93b] rounded-full"
                animate={{ left: barStyle.left, width: barStyle.width }}
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
              />
            </div>

            {/* Call Now - Solid button, no shadow highlight */}
            <motion.a
              href="tel:+971524895673"
              className="bg-[#f0c93b] px-8 py-4 font-['Montserrat'] font-black text-black text-[14px] uppercase rounded-sm"
              whileHover={{ scale: 1.05, backgroundColor: "#ffda5c" }}
              whileTap={{ scale: 0.98 }}
            >
              Call Now
            </motion.a>
          </div>

          {/* Mobile Controls */}
          <div className="flex lg:hidden items-center gap-5">
            <a href="tel:+971524895673" className="bg-[#f0c93b] p-3 rounded-full active:scale-90">
              <Phone size={20} className="text-black fill-current" />
            </a>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="text-white p-1"
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
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMenuOpen(false)}
                className="fixed inset-0 bg-black/80 lg:hidden z-[115] backdrop-blur-sm"
              />
              
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 w-full bg-[#1a1a1e] border-t border-white/10 z-[120] lg:hidden"
              >
                <nav className="flex flex-col p-8 gap-6">
                  {sections.map((section) => (
                    <button
                      key={section}
                      onClick={() => scrollToSection(section)}
                      className={`font-['Montserrat'] text-[24px] font-black uppercase text-left tracking-widest ${
                        activeSection === section ? "text-[#f0c93b]" : "text-white"
                      }`}
                    >
                      {section}
                    </button>
                  ))}
                  <a 
                    href="tel:+971524895673" 
                    className="mt-4 flex items-center justify-center gap-3 bg-[#f0c93b] text-black font-black p-5 rounded-sm uppercase"
                  >
                    <Phone size={20} className="fill-current" />
                    Call Now
                  </a>
                </nav>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
}

function NavLink({ id, children, onClick, active }: any) {
  return (
    <motion.button
      id={id}
      onClick={onClick}
      className={`font-['Montserrat'] font-bold text-[16px] uppercase tracking-wide transition-all duration-300 ${
        active ? "text-[#f0c93b]" : "text-[#d1d1d1] hover:text-white"
      }`}
    >
      {children}
    </motion.button>
  );
}