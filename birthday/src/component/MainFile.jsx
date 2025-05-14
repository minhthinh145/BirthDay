import { SparkleEffect } from "./SparkleEffect";
import { CaDongIcon } from "./1dongicon";
import { LoiChuc } from "./chucsn";

export const MainFile = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen text-white bg-gradient-to-br from-pink-200 to-yellow-200">
      <div className="absolute inset-0 z-0">
        <SparkleEffect />
        <CaDongIcon />
      </div>
      <div className="relative z-50">
        <LoiChuc />
      </div>
    </div>
  );
};
