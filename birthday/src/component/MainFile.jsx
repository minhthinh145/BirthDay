import { SparkleEffect } from "./SparkleEffect";
import { CaDongIcon } from "./1dongicon";
import { LoiChuc } from "./chucsn";
import { useNavigate } from "react-router-dom";

export const MainFile = () => {
  const navigate = useNavigate(); // Dùng navigate để chuyển hướng

  return (
    <div className="relative flex flex-col items-center justify-center h-screen text-white bg-gradient-to-br from-pink-200 to-yellow-200">
      {/* Đặt SparkleEffect và CaDongIcon làm nền với z-index thấp */}
      <div className="absolute inset-0 z-0">
        <SparkleEffect />
        <CaDongIcon />
      </div>
      {/* Đảm bảo LoiChuc nằm trên cùng với z-index cao */}
      <div className="relative z-50">
        <LoiChuc />
      </div>
    </div>
  );
};
