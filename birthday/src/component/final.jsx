import { useState, useEffect } from "react";
import birthdayCake from "../assets/birthday.GIF"; // Đảm bảo đường dẫn này chính xác

export const Final = () => {
  const [text, setText] = useState("");
  const [showSecondChat, setShowSecondChat] = useState(false);
  const [showButtonAndBox2, setShowButtonAndBox2] = useState(false);

  const fullText =
    "Hmm hồi cuối năm ngoái, t cứ tưởng t với m chắc hết chơi với nhau r. Nhưng mà hông, tới giờ t vẫn còn một đứa bạn ở đây ( nhìn khá là ngu ), vẫn chill chill này nọ. Vẫn có ng để t code ra quả web CMSN xấu lòi mắt này :)))";

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
        }, 1000);
      }
    };
    const interval = setInterval(typeText, 50);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleButtonClick = () => {
    setShowSecondChat(true);

    // Kích hoạt hiệu ứng confetti bằng window.confetti
    if (window.confetti) {
      window.confetti({
        particleCount: 5000, // Số lượng mảnh confetti
        spread: 70, // Độ lan tỏa
        origin: { y: 0.6 }, // Vị trí xuất phát (giữa màn hình)
        colors: ["#f9a8d4", "#fef3c7", "#ff6f61"], // Màu sắc giống gradient của nút
      });
    }
  };

  const box2TextContent = showSecondChat
    ? "Háp pi bớt đay :))))))"
    : showButtonAndBox2
    ? "Ấn nút bên kia đi thì đc đọc tiếp, hê hê"
    : "\u00A0"; // Giữ non-breaking space để có chiều cao tối thiểu ban đầu

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left half (text boxes) */}
      <div className="w-full md:w-1/2 p-4 md:p-10 flex flex-col md:justify-center">
        <div className="mb-4 p-3 md:p-4 bg-white border-2 border-gray-300 rounded-lg text-sm md:text-base w-full max-w-[90%]">
          <span
            className="block"
            style={{
              whiteSpace: "normal", // Cho phép text xuống dòng tự nhiên
              overflowWrap: "break-word", // Ép xuống dòng tại từ
              lineHeight: "1.5", // Khoảng cách dòng dễ nhìn
            }}
          >
            {text}
          </span>
        </div>

        {/* Box 2: Giới hạn chiều cao và căn giữa nội dung */}
        <div className="p-3 md:p-4 bg-white border-2 border-gray-300 rounded-lg text-sm md:text-base w-full h-[70px] md:h-[80px] flex items-center overflow-hidden">
          <span
            className={`w-full ${
              showSecondChat || showButtonAndBox2 ? "animate-typing" : ""
            }`}
          >
            {box2TextContent}
          </span>
        </div>
      </div>

      {/* Right half (GIF and button) */}
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
