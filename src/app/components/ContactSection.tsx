import { motion } from "motion/react";
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
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        vehicleBrand: "",
        vehicleModel: "",
        vehicleYear: "",
        service: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <div className="relative w-full py-12 md:py-24 px-5 md:px-[73px] overflow-hidden bg-[#0a0a0a]">
      {/* Section Title */}
      <motion.h2
        className="font-['Bebas_Neue'] text-[42px] sm:text-[48px] md:text-[100px] mb-4 tracking-tight uppercase leading-[1.1]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-[#f0c93b]">CONTACT </span>
        <span className="text-white">GENUINE GARAGE</span>
      </motion.h2>

      <motion.p
        className="font-['Montserrat'] font-medium text-white/80 text-[15px] md:text-[22px] mb-12 md:mb-20 max-w-[800px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Get in touch with our team for inquiries, quotes, or appointments. We are Dubai's trusted experts for premium car care.
      </motion.p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        {/* Left Side - Contact Info */}
        <div className="flex flex-col">
          <motion.h3
            className="font-['Bebas_Neue'] text-white text-[32px] md:text-[56px] mb-8 uppercase"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            Reach Us
          </motion.h3>

          <div className="space-y-8 md:space-y-10 mb-12">
            <ContactDetail icon={<LocationIcon />} label="Location" value="1 Street 1 - Umm Ramool - Dubai - UAE" delay={0} />
            <ContactDetail icon={<PhoneIcon />} label="Phone" value="052 489 5673" href="tel:0524895673" delay={0.1} />
            <ContactDetail icon={<EmailIcon />} label="Email" value="book@genuinegarage.ae" href="mailto:book@genuinegarage.ae" delay={0.2} />
          </div>

          <motion.button
            onClick={(e) => { e.preventDefault(); onCallClick(); }}
            className="flex items-center justify-center bg-[#f0c93b] w-full md:w-[400px] py-5 md:py-6 gap-4 cursor-pointer active:scale-95 transition-all shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ backgroundColor: "#ffd54f", scale: 1.02 }}
          >
            <CallIcon className="w-6 h-6 md:w-8 md:h-8" />
            <span className="font-['Montserrat'] font-black text-black text-[18px] md:text-[24px] uppercase tracking-wider">
              CALL NOW
            </span>
          </motion.button>
        </div>

        {/* Right Side - Contact Form */}
        <div className="flex flex-col">
          <motion.h3
            className="font-['Bebas_Neue'] text-white text-[32px] md:text-[56px] mb-8 uppercase"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            Request a Quote
          </motion.h3>

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6 flex flex-col items-start w-full max-w-[500px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {/* Group 1: Personal Details */}
            <div className="w-full space-y-3">
              <p className="font-['Bebas_Neue'] text-[#f0c93b] text-[18px] tracking-wide uppercase">Contact Details</p>
              <InputField label="Full name" value={formData.fullName} onChange={(e: any) => setFormData({ ...formData, fullName: e.target.value })} />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <InputField label="Email Address" type="email" value={formData.email} onChange={(e: any) => setFormData({ ...formData, email: e.target.value })} />
                <InputField label="Phone Number" type="tel" value={formData.phone} onChange={(e: any) => setFormData({ ...formData, phone: e.target.value })} />
              </div>
            </div>
            
            {/* Group 2: Vehicle Information */}
            <div className="w-full space-y-3">
               <p className="font-['Bebas_Neue'] text-[#f0c93b] text-[18px] tracking-wide uppercase">Vehicle Information</p>
               <InputField label="Vehicle Brand (e.g. Mercedes, BMW)" value={formData.vehicleBrand} onChange={(e: any) => setFormData({ ...formData, vehicleBrand: e.target.value })} />
               <div className="grid grid-cols-2 gap-3 w-full">
                  <InputField label="Model" value={formData.vehicleModel} onChange={(e: any) => setFormData({ ...formData, vehicleModel: e.target.value })} />
                  <InputField label="Year" type="text" value={formData.vehicleYear} onChange={(e: any) => setFormData({ ...formData, vehicleYear: e.target.value })} />
               </div>
            </div>

            {/* Group 3: Service Details */}
            <div className="w-full space-y-3">
              <p className="font-['Bebas_Neue'] text-[#f0c93b] text-[18px] tracking-wide uppercase">Service Details</p>
              <SelectField label="Select Service" value={formData.service} onChange={(e: any) => setFormData({ ...formData, service: e.target.value })} />
              <TextAreaField label="Describe the issue or service needed..." value={formData.message} onChange={(e: any) => setFormData({ ...formData, message: e.target.value })} />
            </div>

            <motion.button
              type="submit"
              className="bg-[#f0c93b] w-full py-5 md:py-6 font-['Montserrat'] font-black text-black text-[18px] md:text-[24px] cursor-pointer uppercase tracking-wider active:scale-95 transition-all shadow-lg mt-2"
              whileHover={{ backgroundColor: "#ffd54f", scale: 1.01 }}
            >
              SEND REQUEST
            </motion.button>

            {isSubmitted && (
              <motion.p className="font-['Montserrat'] font-bold text-[#f0c93b] text-[16px] md:text-[18px]" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                Message Sent! We'll be in touch shortly.
              </motion.p>
            )}
            
            <p className="font-['Montserrat'] text-gray-500 text-[11px] md:text-[13px] uppercase tracking-widest pt-2">
              Working Hours: Mon - Sat, 9:00 AM - 8:00 PM
            </p>
          </motion.form>
        </div>
      </div>

      {/* Map Section */}
      <motion.div className="mt-20 md:mt-32" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <div className="w-full h-[300px] md:h-[500px] rounded-2xl border-2 border-[#f0c93b]/30 overflow-hidden relative shadow-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.643647185888!2d55.3678!3d25.2285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDEzJzQyLjYiTiA1NcKwMjInMDQuMSJF!5e0!3m2!1sen!2sae!4v1625000000000!5m2!1sen!2sae"
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: "grayscale(1) invert(0.9) contrast(1.2)" }}
            allowFullScreen 
            loading="lazy" 
            title="Location"
          />
        </div>
      </motion.div>
    </div>
  );
}

// Sub-components
function ContactDetail({ icon, label, value, href, delay }: any) {
  const content = (
    <div className="flex items-center gap-5 md:gap-8">
      <div className="w-[40px] md:w-[60px] flex-shrink-0 text-[#f0c93b]">{icon}</div>
      <div>
        <p className="font-['Bebas_Neue'] text-[#f0c93b] text-[20px] md:text-[28px] mb-0.5 uppercase tracking-wide">
          {label}
        </p>
        <p className="font-['Montserrat'] font-medium text-white/90 text-[14px] md:text-[18px]">
          {value}
        </p>
      </div>
    </div>
  );
  return (
    <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay }} viewport={{ once: true }}>
      {href ? <a href={href} className="block hover:translate-x-2 transition-transform duration-300">{content}</a> : content}
    </motion.div>
  );
}

function InputField({ label, type = "text", value, onChange }: any) {
  return (
    <input
      type={type} value={value} onChange={onChange} placeholder={label}
      className="bg-[#1c1b17] border border-white/10 rounded-lg w-full py-4 px-5 font-['Montserrat'] text-white text-[16px] outline-none focus:border-[#f0c93b] focus:ring-1 focus:ring-[#f0c93b] transition-all placeholder:text-white/30"
    />
  );
}

function SelectField({ label, value, onChange }: any) {
  return (
    <div className="relative w-full">
      <select
        value={value} onChange={onChange}
        className="bg-[#1c1b17] border border-white/10 rounded-lg w-full py-4 px-5 font-['Montserrat'] text-white text-[16px] outline-none appearance-none cursor-pointer focus:border-[#f0c93b] focus:ring-1 focus:ring-[#f0c93b]"
      >
        <option value="" className="bg-[#1c1b17]">{label}</option>
        {["Inspections", "Diagnostics", "Auto Repair", "Preventive Maintenance", "Car Wash", "Tinting", "Paint Protection", "Detailing"].map(item => (
          <option key={item} value={item} className="bg-[#1c1b17]">{item}</option>
        ))}
      </select>
      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none opacity-50">
        <svg width="12" height="8" viewBox="0 0 17 9" fill="none"><path d="M1 1L8.5 8L16 1" stroke="white" strokeWidth="2" /></svg>
      </div>
    </div>
  );
}

function TextAreaField({ label, value, onChange }: any) {
  return (
    <textarea
      value={value} onChange={onChange} placeholder={label} rows={4}
      className="bg-[#1c1b17] border border-white/10 rounded-lg w-full py-4 px-5 font-['Montserrat'] text-white text-[16px] outline-none resize-none focus:border-[#f0c93b] focus:ring-1 focus:ring-[#f0c93b] transition-all placeholder:text-white/30"
    />
  );
}

// Icons
function LocationIcon() { return <svg className="w-full h-auto" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>; }
function PhoneIcon() { return <svg className="w-full h-auto" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>; }
function EmailIcon() { return <svg className="w-full h-auto" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>; }
function CallIcon({ className }: { className?: string }) { return <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/></svg>; }