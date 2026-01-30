import { motion, AnimatePresence } from "motion/react";
import { X, Phone, MessageCircle, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

interface CallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CallModal({ isOpen, onClose }: CallModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    timeSlot: "",
  });

  // Lock background scroll to focus on the centered modal
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleCallMe = () => {
    window.location.href = "tel:0524895673";
    onClose();
  };

  const handleWhatsApp = () => {
    const message = `Hi, I'm ${formData.name || "a customer"}. I'd like to speak with a service expert${
      formData.timeSlot ? ` at ${formData.timeSlot}` : ""
    }.`;
    window.open(
      `https://wa.me/971524895673?text=${encodeURIComponent(message)}`,
      "_blank"
    );
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop - High Layer */}
          <motion.div
            className="fixed inset-0 bg-black/90 z-[999] backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal - Perfectly Centered via 50% offsets and transforms */}
          <motion.div
            className="fixed left-1/2 top-1/2 z-[1000] w-[95%] sm:w-[90%] max-w-[550px] max-h-[90vh] overflow-y-auto outline-none"
            initial={{ opacity: 0, scale: 0.9, x: "-50%", y: "-40%" }} // Start slightly above center
            animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}   // End at dead center
            exit={{ opacity: 0, scale: 0.9, x: "-50%", y: "-40%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div className="bg-[#1c1b17] rounded-2xl border border-[#f0c93b]/50 shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden">
              {/* Header */}
              <div className="bg-[#f0c93b] px-6 py-5 md:px-8 md:py-6 flex justify-between items-center sticky top-0 z-10">
                <h2 className="font-['Bebas_Neue'] text-black text-2xl md:text-4xl uppercase leading-none">
                  Talk to a Service Expert
                </h2>
                <button
                  onClick={onClose}
                  className="text-black/70 hover:text-black p-1 transition-colors"
                >
                  <X className="w-7 h-7 md:w-8 md:h-8" />
                </button>
              </div>

              {/* Form Content */}
              <div className="p-6 md:p-8">
                <p className="font-['Montserrat'] text-gray-300 text-sm md:text-base mb-6">
                  Fill in your details and we'll get back to you right away.
                </p>

                <div className="space-y-4">
                  <div>
                    <label className="font-['Montserrat'] text-[#f0c93b] text-xs uppercase tracking-wider font-semibold mb-1.5 block">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="w-full bg-[#2a2823] border border-[#f0c93b]/20 rounded-xl px-4 py-3.5 font-['Montserrat'] text-white text-base outline-none focus:border-[#f0c93b] transition-all"
                    />
                  </div>

                  <div>
                    <label className="font-['Montserrat'] text-[#f0c93b] text-xs uppercase tracking-wider font-semibold mb-1.5 block">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+971 -- --- ----"
                      className="w-full bg-[#2a2823] border border-[#f0c93b]/20 rounded-xl px-4 py-3.5 font-['Montserrat'] text-white text-base outline-none focus:border-[#f0c93b] transition-all"
                    />
                  </div>

                  <div className="relative">
                    <label className="font-['Montserrat'] text-[#f0c93b] text-xs uppercase tracking-wider font-semibold mb-1.5 block">
                      Preferred Time
                    </label>
                    <div className="relative">
                      <select
                        value={formData.timeSlot}
                        onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                        className="w-full bg-[#2a2823] border border-[#f0c93b]/20 rounded-xl px-4 py-3.5 font-['Montserrat'] text-white text-base outline-none focus:border-[#f0c93b] transition-all cursor-pointer appearance-none"
                      >
                        <option value="">Select a time slot</option>
                        <option value="9:00 AM - 11:00 AM">Morning (9AM - 11AM)</option>
                        <option value="11:00 AM - 1:00 PM">Midday (11AM - 1PM)</option>
                        <option value="1:00 PM - 3:00 PM">Early Afternoon (1PM - 3PM)</option>
                        <option value="3:00 PM - 5:00 PM">Late Afternoon (3PM - 5PM)</option>
                        <option value="5:00 PM - 8:00 PM">Evening (5PM - 8PM)</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#f0c93b] pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3 mt-8">
                  <motion.button
                    onClick={handleCallMe}
                    className="flex-1 bg-[#f0c93b] rounded-xl px-6 py-4 flex items-center justify-center gap-3 order-2 sm:order-1"
                    whileHover={{ scale: 1.02, backgroundColor: "#ffd54f" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Phone className="w-5 h-5 text-black" />
                    <span className="font-['Montserrat'] font-bold text-black text-sm md:text-base uppercase tracking-tight">
                      Direct Call
                    </span>
                  </motion.button>

                  <motion.button
                    onClick={handleWhatsApp}
                    className="flex-1 bg-[#25D366] rounded-xl px-6 py-4 flex items-center justify-center gap-3 order-1 sm:order-2"
                    whileHover={{ scale: 1.02, backgroundColor: "#1EBE57" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <MessageCircle className="w-5 h-5 text-white" />
                    <span className="font-['Montserrat'] font-bold text-white text-sm md:text-base uppercase tracking-tight">
                      WhatsApp
                    </span>
                  </motion.button>
                </div>

                <p className="mt-6 text-center text-[10px] text-gray-500 font-['Montserrat'] uppercase tracking-widest">
                  Genuine Auto Repair Shop • Umm Ramool, Dubai
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}