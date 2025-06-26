import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import MainGamePage from "./Pages/MainGamePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/ReactTextRpg" element={<LoginPage />} />
        <Route path="/ReactTextRpg/Game" element={<MainGamePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
