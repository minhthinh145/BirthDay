import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const LoiChuc = () => {
  const [text, setText] = useState("");
  const navigate = useNavigate();

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
          setDone(true);
        }, 300);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-1 items-center justify-center min-h-screen px-4 z-50">
      <div className="flex flex-col items-center text-center p-4 bg-pink-100 shadow-lg rounded-lg border-2 border-pink-500 w-auto max-w-[90%] mx-auto">
        <h1
          className="text-xl sm:text-2xl font-semibold text-gray-800 animate-typing"
          style={{
            whiteSpace: "normal",
            overflowWrap: "break-word",
            width: "100%",
            textAlign: "center",
          }}
        >
          {text}
        </h1>

        {done && (
          <button
            className="mt-2 px-6 py-2 text-base sm:text-lg rounded-full bg-gradient-to-r from-[#fef3c7] to-[#f9a8d4] font-semibold shadow-md hover:from-[#f9a8d4] hover:to-[#fef3c7] transition text-black"
            onClick={() => navigate("/final")}
          >
            Hoi thì đọc cái này đi
          </button>
        )}
      </div>
    </div>
  );
};
