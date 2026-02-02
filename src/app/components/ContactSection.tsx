import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

interface ContactSectionProps {
  initialService?: string;
  onCallClick: () => void;
}

export function ContactSection({ initialService = "", onCallClick }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    vehicleBrand: "",
    vehicleModel: "",
    vehicleYear: "",
    service: initialService || "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Update these with your real links
  const GOOGLE_MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Genuine+Garage+Umm+Ramool+Dubai"; 
  const GARAGE_PHONE = "971524895673";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const currentYear = new Date().getFullYear();
    const yearNum = parseInt(formData.vehicleYear);

    if (isNaN(yearNum) || yearNum < 1900 || yearNum > currentYear + 1) {
      toast.error(`Please enter a valid vehicle year (1900 - ${currentYear + 1})`, {
        style: {
          borderRadius: '10px',
          background: '#1c1b17',
          color: '#fff',
          border: '1px solid #f0c93b',
        },
      });
      return;
    }

    const fullNumber = `+971 ${formData.phone.trim()}`;
    const messageArray = [
      "*🛠️ NEW SERVICE INQUIRY - GENUINE GARAGE*",
      "________________________________",
      "",
      `👤 *Customer:* ${formData.fullName}`,
      `📞 *Phone:* ${fullNumber}`,
      `📧 *Email:* ${formData.email}`,
      "",
      "🚗 *VEHICLE DETAILS*",
      `*Brand/Model:* ${formData.vehicleBrand} ${formData.vehicleModel}`,
      `*Year:* ${formData.vehicleYear}`,
      "",
      "💼 *SERVICE REQUESTED*",
      `*Type:* ${formData.service}`,
      `*Issue/Notes:* ${formData.message || "No additional notes provided."}`,
      "",
      "________________________________",
      "Please provide a quotation for this request."
    ];

    const finalMessage = messageArray.join("\n");
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${GARAGE_PHONE}&text=${encodeURIComponent(finalMessage)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    toast.success("Redirecting to WhatsApp...", {
      icon: '🚀',
      style: {
        borderRadius: '10px',
        background: '#1c1b17',
        color: '#fff',
        border: '1px solid #f0c93b',
      },
    });

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        fullName: "", email: "", phone: "", vehicleBrand: "",
        vehicleModel: "", vehicleYear: "", service: "", message: "",
      });
    }, 3000);
  };

  return (
    <section id="contact" className="relative w-full py-12 md:py-24 px-5 md:px-[73px] bg-[#0a0a0a]">
      <Toaster position="bottom-right" reverseOrder={false} />
      
      <div className="max-w-7xl mx-auto">
        <header className="mb-12 md:mb-20">
          <motion.h2
            className="font-['Bebas_Neue'] text-[42px] sm:text-[48px] md:text-[100px] mb-4 tracking-tight text-white uppercase"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#f0c93b]">Get a Quote </span> from Dubai's Experts
          </motion.h2>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-16 md:mb-24">
          <div className="flex flex-col justify-start">
            <h3 className="font-['Bebas_Neue'] text-white text-[32px] md:text-[56px] mb-8 uppercase">Reach Us</h3>
            <div className="flex flex-col gap-y-10 mb-12">
              <ContactDetail label="Location" value="1 Street 1 - Umm Ramool - Dubai" href={GOOGLE_MAPS_URL} />
              <ContactDetail label="Phone" value="052 489 5673" href={`tel:${GARAGE_PHONE}`} />
              <ContactDetail label="Email" value="book@genuinegarage.ae" href="mailto:book@genuinegarage.ae" />
            </div>
            <motion.button
              onClick={onCallClick}
              className="bg-[#f0c93b] w-full md:w-[400px] py-5 font-['Montserrat'] font-black text-black text-[18px] uppercase tracking-wider"
              whileHover={{ backgroundColor: "#000", color: "#f0c93b", outline: "1px solid #f0c93b" }}
              whileTap={{ scale: 0.98 }}
            >
              CALL NOW
            </motion.button>
          </div>

          <div className="flex flex-col">
            <h3 className="font-['Bebas_Neue'] text-white text-[32px] md:text-[56px] mb-8 uppercase">Request a Quote</h3>
            <form onSubmit={handleSubmit} className="space-y-6 max-w-[500px]">
              <div className="space-y-3">
                <p className="font-['Bebas_Neue'] text-[#f0c93b] text-[18px] uppercase">Contact Details</p>
                <InputField label="Full name" required value={formData.fullName} onChange={(e: any) => setFormData({ ...formData, fullName: e.target.value })} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <InputField label="Email Address" type="email" required value={formData.email} onChange={(e: any) => setFormData({ ...formData, email: e.target.value })} />
                  <div className="flex group h-[58px]">
                    <div className="bg-[#1c1b17] border-y border-l border-white/10 rounded-l-lg px-3 text-white/50 text-sm flex items-center select-none group-focus-within:border-[#f0c93b]">
                      +971
                    </div>
                    <input
                      type="tel" required value={formData.phone}
                      onChange={(e: any) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '') })}
                      placeholder="Phone"
                      className="bg-[#1c1b17] border border-white/10 rounded-r-lg w-full py-4 px-4 font-['Montserrat'] text-white text-[16px] outline-none focus:border-[#f0c93b] transition-all"
                      maxLength={10}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <p className="font-['Bebas_Neue'] text-[#f0c93b] text-[18px] uppercase">Vehicle Information</p>
                <InputField label="Vehicle Brand" required value={formData.vehicleBrand} onChange={(e: any) => setFormData({ ...formData, vehicleBrand: e.target.value })} />
                <div className="grid grid-cols-2 gap-3">
                  <InputField label="Model" required value={formData.vehicleModel} onChange={(e: any) => setFormData({ ...formData, vehicleModel: e.target.value })} />
                  <input
                    type="text" inputMode="numeric" required placeholder="Year"
                    value={formData.vehicleYear} maxLength={4}
                    onChange={(e) => setFormData({ ...formData, vehicleYear: e.target.value.replace(/\D/g, '') })}
                    className="bg-[#1c1b17] border border-white/10 rounded-lg w-full py-4 px-5 font-['Montserrat'] text-white outline-none focus:border-[#f0c93b] transition-all"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <p className="font-['Bebas_Neue'] text-[#f0c93b] text-[18px] uppercase">Service Details</p>
                <SelectField label="Select Service" value={formData.service} onChange={(e: any) => setFormData({ ...formData, service: e.target.value })} />
                <TextAreaField label="Describe the issue..." value={formData.message} onChange={(e: any) => setFormData({ ...formData, message: e.target.value })} />
              </div>

              <motion.button
                type="submit"
                className="bg-[#f0c93b] w-full py-5 font-['Montserrat'] font-black text-black text-[18px] uppercase tracking-wider"
                whileHover={{ backgroundColor: "#000", color: "#f0c93b", outline: "1px solid #f0c93b" }}
                whileTap={{ scale: 0.98 }}
              >
                SEND REQUEST
              </motion.button>
            </form>
          </div>
        </div>

        {/* --- MAP SECTION (Now inside the container) --- */}
        <motion.div
          className="flex flex-col w-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[2px] w-12 bg-[#f0c93b]" />
            <h3 className="font-['Bebas_Neue'] text-white text-[32px] md:text-[56px] uppercase">Visit our Workshop</h3>
          </div>

          <div className="group relative w-full h-[400px] md:h-[500px] rounded-2xl border-2 border-white/10 overflow-hidden shadow-2xl transition-all duration-500 hover:border-[#f0c93b]/50">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent pointer-events-none z-10 opacity-60" />
            
            <iframe
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.435775791782!2d55.3520299!3d25.2296107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d305a0adebf%3A0xb484371531874cb5!2sGenuine%20Auto%20General%20Repairing!5e0!3m2!1sen!2sae!4v1710000000000!5m2!1sen!2sae"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(1) invert(0.92) contrast(1.2) brightness(0.8)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Workshop Location"
              className="transition-all duration-700 group-hover:filter-none group-hover:brightness-100"
            />

            <motion.a 
              href={GOOGLE_MAPS_URL} 
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-8 right-8 z-20 bg-white text-black px-6 py-3 font-['Montserrat'] font-bold text-sm uppercase flex items-center gap-2 shadow-xl hover:bg-[#f0c93b] transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M21.71 11.29l-9-9a.996.996 0 00-1.41 0l-9 9a.996.996 0 000 1.41l9 9c.39.39 1.02.39 1.41 0l9-9a.996.996 0 000-1.41zM14 14.5V12h-4v3H8v-4c0-.55.45-1 1-1h5V7.5l3.5 3.5-3.5 3.5z"/></svg>
              Get Directions
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// --- SUB-COMPONENTS ---

function ContactDetail({ label, value, href }: any) {
  return (
    <motion.div 
      whileHover={{ x: 10 }} 
      className="flex flex-col items-start gap-1"
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
    >
      <p className="font-['Bebas_Neue'] text-[#f0c93b] text-[20px] md:text-[28px] uppercase tracking-wide leading-none">
        {label}
      </p>
      {href ? (
        <a 
          href={href} 
          target={href.startsWith('http') ? "_blank" : undefined}
          rel="noopener noreferrer"
          className="font-['Montserrat'] font-medium text-white/90 text-[14px] md:text-[18px] hover:text-[#f0c93b] transition-colors leading-snug"
        >
          {value}
        </a>
      ) : (
        <p className="font-['Montserrat'] font-medium text-white/90 text-[14px] md:text-[18px] leading-snug">
          {value}
        </p>
      )}
    </motion.div>
  );
}

function InputField({ label, type = "text", value, onChange, required = false }: any) {
  return (
    <input
      type={type} required={required} value={value} onChange={onChange} placeholder={label}
      className="bg-[#1c1b17] border border-white/10 rounded-lg w-full py-4 px-5 font-['Montserrat'] text-white text-[16px] outline-none focus:border-[#f0c93b] transition-all placeholder:text-white/20"
    />
  );
}

function SelectField({ label, value, onChange }: any) {
  const services = ["Pre-Sale Inspection", "Oil Change", "Diagnostics", "Auto Repair", "Preventive Maintenance", "Car Spa", "Tinting", "Paint Protection", "Detailing", "Other"];
  return (
    <div className="relative">
      <select
        value={value} onChange={onChange} required
        className="bg-[#1c1b17] border border-white/10 rounded-lg w-full py-4 px-5 font-['Montserrat'] text-white text-[16px] outline-none appearance-none cursor-pointer focus:border-[#f0c93b]"
      >
        <option value="" disabled>{label}</option>
        {services.map((s) => <option key={s} value={s} className="bg-[#1c1b17]">{s}</option>)}
      </select>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/30 text-xs">▼</div>
    </div>
  );
}

function TextAreaField({ label, value, onChange }: any) {
  return (
    <textarea
      value={value} onChange={onChange} placeholder={label} rows={4}
      className="bg-[#1c1b17] border border-white/10 rounded-lg w-full py-4 px-5 font-['Montserrat'] text-white text-[16px] outline-none focus:border-[#f0c93b] resize-none placeholder:text-white/20"
    />
  );
}