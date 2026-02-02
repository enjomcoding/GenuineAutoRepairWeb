import { motion } from "framer-motion";
import { useState } from "react";

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const currentYear = new Date().getFullYear();
    const yearNum = parseInt(formData.vehicleYear);
    
    if (isNaN(yearNum) || yearNum < 1900 || yearNum > currentYear + 1) {
      alert(`Please enter a valid vehicle year (1900 - ${currentYear + 1})`);
      return;
    }
    
    const fullNumber = `+971${formData.phone.trim()}`;
    
    // PLAIN TEXT MESSAGE FORMAT (No extra formatting)
    const messageArray = [
      "NEW SERVICE INQUIRY - GENUINE GARAGE",
      "",
      `Customer Name: ${formData.fullName}`,
      `Phone Number: ${fullNumber}`,
      `Email: ${formData.email}`,
      "",
      `Vehicle: ${formData.vehicleBrand} ${formData.vehicleModel}`,
      `Year: ${formData.vehicleYear}`,
      "",
      `Service Requested: ${formData.service}`,
      `Message: ${formData.message || "None"}`,
      "",
      "Please provide a quotation for this request."
    ];

    const finalMessage = messageArray.join("\n");
    const garagePhone = "971524895673"; 
    
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${garagePhone}&text=${encodeURIComponent(finalMessage)}`;
    
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <div className="flex flex-col">
            <h3 className="font-['Bebas_Neue'] text-white text-[32px] md:text-[56px] mb-8 uppercase">Reach Us</h3>
            <div className="space-y-8 mb-12">
              <ContactDetail label="Location" value="1 Street 1 - Umm Ramool - Dubai" />
              <ContactDetail label="Phone" value="052 489 5673" href="tel:0524895673" />
              <ContactDetail label="Email" value="book@genuinegarage.ae" href="mailto:book@genuinegarage.ae" />
            </div>
            
            <motion.button
              onClick={onCallClick}
              className="bg-[#f0c93b] w-full md:w-[400px] py-5 font-['Montserrat'] font-black text-black text-[18px] uppercase tracking-wider"
              whileHover={{ scale: 1.02, backgroundColor: "#fff" }}
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
                      type="tel"
                      required
                      value={formData.phone}
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
                    type="text"
                    inputMode="numeric"
                    required
                    placeholder="Year"
                    value={formData.vehicleYear}
                    maxLength={4}
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
                whileHover={{ backgroundColor: "#000", color: "#f0c93b" }}
                whileTap={{ scale: 0.98 }}
              >
                SEND REQUEST
              </motion.button>

              {isSubmitted && (
                <motion.p className="font-['Montserrat'] font-bold text-[#f0c93b] text-[16px]" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  Redirecting to WhatsApp...
                </motion.p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// Helpers
function ContactDetail({ label, value, href }: any) {
  return (
    <div>
      <p className="font-['Bebas_Neue'] text-[#f0c93b] text-[20px] md:text-[28px] uppercase tracking-wide">{label}</p>
      {href ? (
        <a href={href} className="font-['Montserrat'] font-medium text-white/90 text-[14px] md:text-[18px] hover:text-[#f0c93b] transition-colors">{value}</a>
      ) : (
        <p className="font-['Montserrat'] font-medium text-white/90 text-[14px] md:text-[18px]">{value}</p>
      )}
    </div>
  );
}

function InputField({ label, type = "text", value, onChange, required = false }: any) {
  return (
    <input
      type={type} required={required} value={value} onChange={onChange} placeholder={label}
      className="bg-[#1c1b17] border border-white/10 rounded-lg w-full py-4 px-5 font-['Montserrat'] text-white text-[16px] outline-none focus:border-[#f0c93b] transition-all"
    />
  );
}

function SelectField({ label, value, onChange }: any) {
  const services = ["Pre-Sale Inspection", "Oil Change", "Diagnostics", "Auto Repair", "Preventive Maintenance", "Car Spa", "Tinting", "Paint Protection", "Detailing", "Other"];
  return (
    <select
      value={value} onChange={onChange} required
      className="bg-[#1c1b17] border border-white/10 rounded-lg w-full py-4 px-5 font-['Montserrat'] text-white text-[16px] outline-none appearance-none cursor-pointer focus:border-[#f0c93b]"
    >
      <option value="" disabled>{label}</option>
      {services.map((s) => <option key={s} value={s} className="bg-[#1c1b17]">{s}</option>)}
    </select>
  );
}

function TextAreaField({ label, value, onChange }: any) {
  return (
    <textarea
      value={value} onChange={onChange} placeholder={label} rows={4}
      className="bg-[#1c1b17] border border-white/10 rounded-lg w-full py-4 px-5 font-['Montserrat'] text-white text-[16px] outline-none focus:border-[#f0c93b]"
    />
  );
}