import { useState, useEffect } from "react";
import { AutoRepairDesign } from "./components/AutoRepairDesign";

export default function App() {
  const [isNavSticky, setIsNavSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsNavSticky(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#1d1b20]">
      <AutoRepairDesign isNavSticky={isNavSticky} />
    </div>
  );
}