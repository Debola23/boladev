import Styles from "./Bar.module.css";
import { useState } from "react";
import { Home, User, Computer, Code } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Bar = () => {
  const [active, setActive] = useState(null);
  const navigate = useNavigate();
  const [showTooltip, setShowTooltip] = useState(null); // For mobile tap

  const items = [
    { id: 1, icon: <Home size={18} />, label: "Home", path: "/" },
    { id: 2, icon: <User size={18} />, label: "About", path: "/about" },
    { id: 3, icon: <Computer size={18} />, label: "Skills", path: "/skills" },
    { id: 4, icon: <Code size={18} />, label: "Projects", path: "/projects" },
  ];

  return (
    <div className={Styles.Dock}>
      <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 p-4 rounded-2xl flex gap-8 shadow-[0px_0px_6px_3px_rgba(163,163,163,1)] bg-black z-50">
        {items.map((item) => (
          <div
            key={item.id}
            className="relative flex flex-col items-center group"
            onTouchStart={() =>
              setShowTooltip(showTooltip === item.id ? null : item.id)
            }
          >
            {/* Tooltip */}
            <div
              className={`
                absolute -top-8 text-sm text-white bg-black px-2 py-1 rounded opacity-0 group-hover:opacity-100
                transition duration-200 pointer-events-none
                ${showTooltip === item.id ? "opacity-100" : ""}
              `}
            >
              {item.label}
            </div>

            {/* Icon Button */}
            <button
              onClick={() => {
                setActive(item.id);
                navigate(item.path);
                setShowTooltip(null);
              }}
              className={`p-2 rounded-full transition-all 
                ${active === item.id ? "bg-[#eaeaeb]" : "bg-[#858585]"}`}
            >
              {item.icon}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
