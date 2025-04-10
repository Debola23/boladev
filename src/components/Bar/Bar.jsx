import Styles from "./Bar.module.css";
import { useState } from "react";
import { Home, User, Computer, Code } from "lucide-react";
import { useNavigate } from "react-router-dom";  

export const Bar = () => {
  const [active, setActive] = useState(null);
  const navigate = useNavigate();  

  const items = [
    { id: 1, icon: <Home size={18} />, label: "Home", path: "/" },
    { id: 2, icon: <User size={18} />, label: "about", path: "/about" },
    { id: 3, icon: <Computer size={18} />, label: "skill", path: "/skills" }, 
    { id: 4, icon: <Code size={18} />, label: "code", path: "/projects" },
  ];

  return (
    <div className={Styles.Dock}>
      <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 p-4 rounded-2xl flex gap-8 shadow-[0px_0px_6px_3px_rgba(163,163,163,1)] bg-black" id={Styles.dock}>
        {items.map((item) => (
          <button 
            key={item.id} 
            onClick={() => {
              setActive(item.id);
              navigate(item.path); 
            }} 
            className={`p-2 rounded-full transition-all 
              ${active === item.id ? "bg-[#eaeaeb]" : "bg-[#858585]"}`}>
            {item.icon}
          </button>
        ))}
      </div>
    </div>
  );
};