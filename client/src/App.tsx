import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Landing from "./pages/Landing";
import MemoP from "./pages/MemoP";
import NewMemo from "./pages/NewMemo";
import NewPaper from "./pages/NewPaper";
import Paper from "./pages/Paper";

function App() {
  const [title, setTitle] = useState<string>("");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/memo" element={<MemoP />} />
        <Route path="/newmemo" element={<NewMemo />} />
        <Route path="/newpaper" element={<NewPaper />} />
        <Route path="/paper" element={<Paper />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
