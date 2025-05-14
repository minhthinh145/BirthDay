import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const LoiChuc = () => {
  const [text, setText] = useState("");
  const navigate = useNavigate(); // <-- dùng navigate

  const fullText =
    "Hmm, t thì ngu văn vãi lèo với t hông có sến súa cho lắm nên t cũng hông biết chúc gì...";

  const [done, setDone] = useState(false);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          setDone(true); // Sau khi gõ xong, cho phép hiện nút
        }, 300);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-1 items-center justify-center min-h-screen px-4 z-50">
      {/* Container chứa text và button */}
      <div className="flex flex-col items-center text-center p-4 bg-pink-100 shadow-lg rounded-lg border-2 border-pink-500 w-auto mx-auto">
        <h1
          className="text-xl sm:text-2xl font-semibold text-gray-800 animate-typing"
          style={{
            whiteSpace: "nowrap", // Ép text hiển thị trên một hàng ngang
            width: "fit-content", // Dãn ngang theo nội dung
            textAlign: "center", // Căn giữa text
          }}
        >
          {text}
        </h1>

        {/* Nút nằm bên trong div, hiển thị ngay bên dưới text */}
        {done && (
          <button
            className="mt-2 px-6 py-2 text-base sm:text-lg rounded-full bg-gradient-to-r from-[#fef3c7] to-[#f9a8d4] font-semibold shadow-md hover:from-[#f9a8d4] hover:to-[#fef3c7] transition text-black"
            onClick={() => navigate("/final")} // <-- điều hướng tại đây
          >
            Hoi thì đọc cái này đi
          </button>
        )}
      </div>
    </div>
  );
};
