import { motion } from "motion/react";

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative w-full bg-[#17161c] py-12 md:py-16 px-6 md:px-[68px]">
      {/* Main Grid: 1 col on mobile, 2 col on tablet, 4 col on desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-12">
        
        {/* Company Info */}
        <div className="text-center sm:text-left">
          <h3 className="font-['Bebas_Neue'] text-[#f0c93b] text-[32px] mb-2 uppercase leading-none">
            GENUINE
          </h3>
          <p className="font-['Bebas_Neue'] text-[#b3adb4] text-[20px] mb-4 uppercase tracking-wider">
            AUTO REPAIR
          </p>
          <p className="font-['Montserrat'] font-light text-[#b3adb4] text-[14px] leading-relaxed max-w-[250px] mx-auto sm:mx-0">
            Your trusted partner for professional auto repair and maintenance
            services in Dubai.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center sm:text-left">
          <h4 className="font-['Bebas_Neue'] text-white text-[24px] mb-4 md:mb-6 uppercase">
            Quick Links
          </h4>
          <ul className="space-y-4 sm:space-y-3">
            <FooterLink onClick={() => scrollToSection("hero")}>Home</FooterLink>
            <FooterLink onClick={() => scrollToSection("services")}>Services</FooterLink>
            <FooterLink onClick={() => scrollToSection("about")}>About</FooterLink>
            <FooterLink onClick={() => scrollToSection("contact")}>Contact</FooterLink>
          </ul>
        </div>

        {/* Services */}
        <div className="text-center sm:text-left">
          <h4 className="font-['Bebas_Neue'] text-white text-[24px] mb-4 md:mb-6 uppercase">
            Our Services
          </h4>
          <ul className="space-y-4 sm:space-y-3">
            <li className="font-['Montserrat'] font-light text-[#b3adb4] text-[14px]">Auto Repair</li>
            <li className="font-['Montserrat'] font-light text-[#b3adb4] text-[14px]">Oil Change</li>
            <li className="font-['Montserrat'] font-light text-[#b3adb4] text-[14px]">Window Tinting</li>
            <li className="font-['Montserrat'] font-light text-[#b3adb4] text-[14px]">Paint Protection</li>
            <li className="font-['Montserrat'] font-light text-[#b3adb4] text-[14px]">Ceramic Coating</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="text-center sm:text-left">
          <h4 className="font-['Bebas_Neue'] text-white text-[24px] mb-4 md:mb-6 uppercase">
            Contact Us
          </h4>
          <ul className="space-y-4 sm:space-y-3">
            <li>
              <p className="font-['Montserrat'] font-light text-[#b3adb4] text-[14px] leading-relaxed">
                1 Street 1 - Umm Ramool
                <br />
                Dubai - UAE
              </p>
            </li>
            <li>
              <motion.a
                href="tel:0524895673"
                className="font-['Montserrat'] font-light text-[#b3adb4] text-[15px] md:text-[14px] inline-block"
                whileHover={{ color: "#f0c93b", x: 3 }}
              >
                📞 052 489 5673
              </motion.a>
            </li>
            <li>
              <motion.a
                href="mailto:info@genuinegarage.ae"
                className="font-['Montserrat'] font-light text-[#b3adb4] text-[15px] md:text-[14px] inline-block"
                whileHover={{ color: "#f0c93b", x: 3 }}
              >
                ✉️ info@genuinegarage.ae
              </motion.a>
            </li>
            <li className="font-['Montserrat'] font-light text-[#b3adb4] text-[14px]">
               🕒 9AM - 8PM
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-[#b3adb4] opacity-20 mb-8" />

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        <p className="font-['Montserrat'] font-light text-[#b3adb4] text-[12px] md:text-[14px] order-2 md:order-1">
          © 2024 Genuine Auto Repair. All rights reserved.
        </p>
        <div className="flex gap-8 md:gap-6 order-1 md:order-2">
          <motion.a
            href="#"
            className="font-['Montserrat'] font-light text-[#b3adb4] text-[12px] md:text-[14px] underline md:no-underline"
            whileHover={{ color: "#f0c93b" }}
          >
            Privacy Policy
          </motion.a>
          <motion.a
            href="#"
            className="font-['Montserrat'] font-light text-[#b3adb4] text-[12px] md:text-[14px] underline md:no-underline"
            whileHover={{ color: "#f0c93b" }}
          >
            Terms of Service
          </motion.a>
        </div>
      </div>
    </footer>
  );
}

interface FooterLinkProps {
  children: React.ReactNode;
  onClick: () => void;
}

function FooterLink({ children, onClick }: FooterLinkProps) {
  return (
    <li>
      <motion.button
        onClick={onClick}
        className="font-['Montserrat'] font-light text-[#b3adb4] text-[15px] md:text-[14px] cursor-pointer block w-full sm:w-auto text-center sm:text-left"
        whileHover={{ color: "#f0c93b", x: 3 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.button>
    </li>
  );
}