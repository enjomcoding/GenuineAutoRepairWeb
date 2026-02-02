import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, MessageCircle, ChevronDown, AlertCircle } from "lucide-react";
import { useState, useEffect } from "react";

interface CallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CallModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    timeSlot: "",
  });
  
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setErrors({});
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  const validate = () => {
    const nameValid = formData.name.trim().length >= 2;
    const phoneValid = /^[0-9+\s-]{7,15}$/.test(formData.phone.trim()); 
    
    setErrors({
      name: !nameValid,
      phone: !phoneValid,
    });

    return nameValid && phoneValid;
  };

  const handleCallMe = () => {
    window.location.href = "tel:+971524895673";
    onClose();
  };

  const handleWhatsApp = () => {
    if (!validate()) return;

    const timeLabel = formData.timeSlot || "as soon as possible";

    // Normal Professional Chat Message
    const message = `Hi Genuine Garage, my name is ${formData.name}. I'd like to book a service for my car. I'm looking for a slot ${timeLabel}. Please let me know if you are available. My number is ${formData.phone}. Thanks!`;

    window.open(
      `https://wa.me/971524895673?text=${encodeURIComponent(message)}`,
      "_blank"
    );
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <section>
          <motion.div
            className="fixed inset-0 bg-black/95 z-[999] backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            className="fixed left-1/2 top-1/2 z-[1000] w-[92%] sm:w-[480px]"
            initial={{ opacity: 0, scale: 0.9, x: "-50%", y: "-50%" }}
            animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
            exit={{ opacity: 0, scale: 0.9, x: "-50%", y: "-50%" }}
          >
            <div className="bg-[#1c1b17] border-2 border-[#f0c93b] shadow-2xl overflow-hidden">
              
              <div className="bg-[#f0c93b] px-6 py-5 flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="font-['Bebas_Neue'] text-black text-3xl leading-none">PRIORITY BOOKING</span>
                  <span className="font-['Montserrat'] text-black text-[10px] font-bold uppercase tracking-widest mt-1">Umm Ramool • Dubai</span>
                </div>
                <button onClick={onClose} className="text-black transition-transform hover:scale-110">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="p-6 md:p-8">
                <div className="space-y-5">
                  <div>
                    <label className="font-['Montserrat'] text-[#f0c93b] text-[10px] uppercase font-bold mb-2 block">Full Name *</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full bg-white/5 border ${errors.name ? 'border-red-500' : 'border-white/10'} px-4 py-3 font-['Montserrat'] text-white text-sm outline-none focus:border-[#f0c93b]`}
                      placeholder="e.g. Ahmed Ali"
                    />
                  </div>

                  <div>
                    <label className="font-['Montserrat'] text-[#f0c93b] text-[10px] uppercase font-bold mb-2 block">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full bg-white/5 border ${errors.phone ? 'border-red-500' : 'border-white/10'} px-4 py-3 font-['Montserrat'] text-white text-sm outline-none focus:border-[#f0c93b]`}
                      placeholder="+971 -- --- ----"
                    />
                  </div>

                  <div className="relative">
                    <label className="font-['Montserrat'] text-[#f0c93b] text-[10px] uppercase font-bold mb-2 block">Booking Window</label>
                    <div className="relative">
                      <select
                        value={formData.timeSlot}
                        onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 px-4 py-3 font-['Montserrat'] text-white text-sm appearance-none outline-none cursor-pointer focus:border-[#f0c93b]"
                      >
                        <option value="" className="bg-[#1c1b17]">Immediate Assistance</option>
                        <option value="Morning (9AM - 11AM)" className="bg-[#1c1b17]">Morning (9AM - 11AM)</option>
                        <option value="Midday (11AM - 1PM)" className="bg-[#1c1b17]">Midday (11AM - 1PM)</option>
                        <option value="Early Afternoon (1PM - 3PM)" className="bg-[#1c1b17]">Early Afternoon (1PM - 3PM)</option>
                        <option value="Late Afternoon (12PM - 4PM)" className="bg-[#1c1b17]">Late Afternoon (12PM - 4PM)</option>
                        <option value="Evening (5PM - 8PM)" className="bg-[#1c1b17]">Evening (5PM - 8PM)</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#f0c93b] pointer-events-none" />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3 mt-8">
                  <motion.button
                    onClick={handleWhatsApp}
                    className="w-full bg-[#25D366] text-white py-4 flex items-center justify-center gap-3 font-['Montserrat'] font-black text-xs uppercase tracking-widest hover:brightness-110 transition-all"
                    whileTap={{ scale: 0.97 }}
                  >
                    <MessageCircle className="w-5 h-5 fill-current" />
                    Book via WhatsApp
                  </motion.button>

                  <button
                    onClick={handleCallMe}
                    className="w-full bg-transparent border border-[#f0c93b] text-[#f0c93b] py-4 flex items-center justify-center gap-3 font-['Montserrat'] font-black text-xs uppercase tracking-widest hover:bg-[#f0c93b] hover:text-black transition-all"
                  >
                    <Phone className="w-5 h-5" />
                    Call Expert Directly
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      )}
    </AnimatePresence>
  );
}