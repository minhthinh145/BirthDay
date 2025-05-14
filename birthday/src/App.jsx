import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LoadingScreen } from "./component/LoadingScreen";
import { MainFile } from "./component/MainFile"; // Đảm bảo MainFile được import đúng
import "./index.css";
import { Final } from "./component/final";

function App() {
  return (
    <Router basename="/Birthday">
      <Routes>
        <Route path="/" element={<LoadingScreen />} />
        <Route path="/main" element={<MainFile />} />
        <Route path="/final" element={<Final />} />
      </Routes>
    </Router>
  );
}

export default App;
