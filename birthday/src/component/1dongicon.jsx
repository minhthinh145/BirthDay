import { GiCakeSlice } from "react-icons/gi";
import { FaBirthdayCake, FaRegSmileWink } from "react-icons/fa";

const icons = [GiCakeSlice, FaBirthdayCake, FaRegSmileWink];

export const CaDongIcon = () => {
  const items = Array.from({ length: 40 }, (_, i) => {
    const Icon = icons[Math.floor(Math.random() * icons.length)];
    const size = Math.floor(Math.random() * 30 + 20); // 20px – 50px

    const style = {
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      fontSize: `${size}px`,
      position: "absolute",
      opacity: Math.random() * 0.4 + 0.2,
      color: "#1f2937",
      animation: `float-icon ${
        3 + Math.random() * 5
      }s ease-in-out infinite, move-icon ${
        5 + Math.random() * 5
      }s ease-in-out infinite`,
      animationDelay: `${Math.random() * 3}s`,
      transform: `rotate(${Math.random() * 360}deg)`,
    };

    return <Icon key={i} style={style} />;
  });

  return (
    <div className="absolute inset-0 pointer-events-none z-0">{items}</div>
  );
};
