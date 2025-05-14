import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const LoadingScreen = () => {
  const [text, setText] = useState("");
  const fullText =
    "Năm nay trình t có tiến bộ nên cái trang web này đc đẻ ra để mừng sn m :)))";
  const [done, setDone] = useState(false);
  const navigate = useNavigate(); // <-- dùng navigate

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          setDone(true);
        }, 300); // Đợi thêm chút rồi mới hiện nút
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen px-4 ">
      <div className="mb-4 text-3xl sm:text-4xl font-mono font-bold text-center text-black relative z-10">
        {text} {!done && <span className="animate-blink ml-1">|</span>}
      </div>

      {/* Thanh loading */}
      {!done && (
        <div className="w-full max-w-xs h-[2px] bg-gray-800 rounded relative overflow-hidden mb-6">
          <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
        </div>
      )}

      {/* Nút tiếp tục sau khi loading xong */}
      {done && (
        <button
          className="mt-4 px-8 py-4 text-lg rounded-full bg-gradient-to-r from-[#fef3c7] to-[#f9a8d4] font-semibold shadow-md hover:from-[#f9a8d4] hover:to-[#fef3c7] transition text-black border border-pink-400"
          onClick={() => navigate("/main")} // Sửa lại để chỉ navigate khi nhấn nút
        >
          Ấn vào đây đê
        </button>
      )}
    </div>
  );
};
