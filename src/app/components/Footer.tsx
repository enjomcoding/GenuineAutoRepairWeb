import { motion } from "framer-motion";

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentYear = new Date().getFullYear();

  // SEO: This is the exact CID for Genuine Auto General Repairing for the Google Maps link
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Genuine+Auto+General+Repairing+Umm+Ramool&query_place_id=ChIJv94KWjBdXz4RtUyHMRU3hLQ";

  return (
    <footer className="relative w-full bg-[#0a0a0a] border-t border-white/5 py-16 md:py-24 px-6 md:px-[73px] overflow-hidden">
      {/* Main Grid */}
      <div className="max-w-[1304px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16 md:mb-24">
        
        {/* Brand Block */}
        <div className="flex flex-col items-center sm:items-start">
          <div className="mb-6">
            <h3 className="font-['Bebas_Neue'] text-[#f0c93b] text-[40px] leading-none uppercase tracking-tighter">
              GENUINE
            </h3>
            <p className="font-['Bebas_Neue'] text-white text-[24px] leading-none uppercase tracking-[0.2em]">
              GARAGE
            </p>
          </div>
          <p className="font-['Montserrat'] font-medium text-white/50 text-[14px] leading-relaxed max-w-[280px] text-center sm:text-left">
            Dubai's premier destination for luxury automotive care, specializing in precision repairs and elite paint protection.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col items-center sm:items-start">
          <h4 className="font-['Bebas_Neue'] text-white text-[22px] mb-8 uppercase tracking-widest">
            Navigation
          </h4>
          <ul className="space-y-4">
            <FooterLink onClick={() => scrollToSection("hero")}>Home</FooterLink>
            <FooterLink onClick={() => scrollToSection("services")}>Services</FooterLink>
            <FooterLink onClick={() => scrollToSection("about")}>About Us</FooterLink>
            <FooterLink onClick={() => scrollToSection("reviews")}>Client Reviews</FooterLink>
            <FooterLink onClick={() => scrollToSection("contact")}>Book Appointment</FooterLink>
          </ul>
        </div>

        {/* Services */}
        <div className="flex flex-col items-center sm:items-start">
          <h4 className="font-['Bebas_Neue'] text-white text-[22px] mb-8 uppercase tracking-widest">
            Expertise
          </h4>
          <ul className="space-y-4">
            <li className="font-['Montserrat'] font-semibold text-white/40 text-[13px] uppercase tracking-wider hover:text-[#f0c93b] transition-colors cursor-default">Mechanical Repair</li>
            <li className="font-['Montserrat'] font-semibold text-white/40 text-[13px] uppercase tracking-wider hover:text-[#f0c93b] transition-colors cursor-default">Computer Diagnostics</li>
            <li className="font-['Montserrat'] font-semibold text-white/40 text-[13px] uppercase tracking-wider hover:text-[#f0c93b] transition-colors cursor-default">Electrical Works</li>
            <li className="font-['Montserrat'] font-semibold text-white/40 text-[13px] uppercase tracking-wider hover:text-[#f0c93b] transition-colors cursor-default">Detailing, PPF, and Tinting</li>
            <li className="font-['Montserrat'] font-semibold text-white/40 text-[13px] uppercase tracking-wider hover:text-[#f0c93b] transition-colors cursor-default">Preventive Maintenance</li>
          </ul>
        </div>

        {/* Contact Block - FIXED URL */}
        <div className="flex flex-col items-center sm:items-start">
          <h4 className="font-['Bebas_Neue'] text-white text-[22px] mb-8 uppercase tracking-widest">
            Connect
          </h4>
          <div className="space-y-6 flex flex-col items-center sm:items-start">
            <a 
              href={googleMapsUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-start gap-3"
            >
              <LocationIcon className="w-5 h-5 text-[#f0c93b] mt-1" />
              <span className="font-['Montserrat'] font-medium text-white/60 text-[14px] group-hover:text-white transition-colors">
                1 Street 1 - Umm Ramool<br />Dubai - UAE
              </span>
            </a>
            
            <a href="tel:+971524895673" className="group flex items-center gap-3">
              <PhoneIcon className="w-5 h-5 text-[#f0c93b]" />
              <span className="font-['Montserrat'] font-medium text-white/60 text-[14px] group-hover:text-white transition-colors">
                +971 52 489 5673
              </span>
            </a>

            <a href="mailto:info@genuinegarage.ae" className="group flex items-center gap-3">
              <EmailIcon className="w-5 h-5 text-[#f0c93b]" />
              <span className="font-['Montserrat'] font-medium text-white/60 text-[14px] group-hover:text-white transition-colors">
                info@genuinegarage.ae
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="max-w-[1304px] mx-auto pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="font-['Montserrat'] font-bold text-white/20 text-[11px] uppercase tracking-[0.3em]">
          ©2024 GENUINE GARAGE. ALL RIGHTS RESERVED.
        </p>
        
        <div className="flex gap-10">
          <motion.a 
            href="#" 
            className="font-['Montserrat'] font-bold text-white/20 text-[11px] uppercase tracking-widest hover:text-[#f0c93b] transition-colors"
            whileHover={{ y: -2 }}
          >
            Privacy
          </motion.a>
          <motion.a 
            href="#" 
            className="font-['Montserrat'] font-bold text-white/20 text-[11px] uppercase tracking-widest hover:text-[#f0c93b] transition-colors"
            whileHover={{ y: -2 }}
          >
            Terms
          </motion.a>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ children, onClick }: { children: React.ReactNode; onClick: () => void }) {
  return (
    <li>
      <motion.button
        onClick={onClick}
        className="font-['Montserrat'] font-bold text-white/40 text-[13px] uppercase tracking-wider cursor-pointer block text-center sm:text-left"
        whileHover={{ color: "#f0c93b", x: 5 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.button>
    </li>
  );
}

// Minimal Icons for Consistency
const LocationIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const PhoneIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const EmailIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);