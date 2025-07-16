import { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import birthdayCake from "../assets/birthday.GIF";

export const Final = () => {
  const [text, setText] = useState("");
  const [showSecondChat, setShowSecondChat] = useState(false);
  const [showButtonAndBox2, setShowButtonAndBox2] = useState(false);

  const fullText =
    "Ây, T k cố ý bơ tin nhắn m đâu, t cần 1 chút thời gian để deploy cái quỷ này :)))";

  useEffect(() => {
    let index = 0;
    const typeText = () => {
      if (index < fullText.length) {
        setText((prevText) => prevText + fullText.charAt(index));
        index++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setShowButtonAndBox2(true);
        }, 200);
      }
    };
    const interval = setInterval(typeText, 50);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleButtonClick = () => {
    setShowSecondChat(true);

    confetti({
      particleCount: 5000,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#f9a8d4", "#fef3c7", "#ff6f61"],
    });
  };

  const box2TextContent = showSecondChat
    ? "Háp pi bớt đay :))))))"
    : showButtonAndBox2
    ? "Ấn nút bên kia đi. Ấn đê ..."
    : "\u00A0";

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="w-full md:w-1/2 p-4 md:p-10 flex flex-col justify-center items-center">
        <div
          className="mb-4 p-3 md:p-4 bg-white border-2 border-gray-300 rounded-lg text-sm md:text-base"
          style={{
            width: "fit-content",
            maxWidth: "100%",
            minWidth: "0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span
            className="block text-center"
            style={{
              whiteSpace: "normal",
              overflowWrap: "break-word",
              lineHeight: "1.5",
            }}
          >
            {text}
          </span>
        </div>

        <div className="p-3 md:p-4 bg-white border-2 border-gray-300 rounded-lg text-sm md:text-base w-full h-[70px] md:h-[80px] flex justify-center items-center overflow-hidden">
          <span
            className={`w-full text-center ${
              showSecondChat || showButtonAndBox2 ? "animate-typing" : ""
            }`}
          >
            {box2TextContent}
          </span>
        </div>
      </div>

      <div className="w-full md:w-1/2 p-4 md:p-10 flex flex-col md:justify-center items-center">
        <img
          src={birthdayCake}
          alt="Birthday Cake GIF"
          className="w-80 h-80 sm:w-96 sm:h-96 mb-6 object-cover rounded-xl"
        />
        {showButtonAndBox2 && (
          <button
            className="mt-2 px-6 py-2 text-base sm:text-lg rounded-full bg-gradient-to-r from-[#fef3c7] to-[#f9a8d4] font-semibold shadow-md hover:from-[#f9a8d4] hover:to-[#fef3c7] transition text-black fade-in"
            onClick={handleButtonClick}
          >
            <span className="animate-button">Ấn đây, ấn vào đây..</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Final;
