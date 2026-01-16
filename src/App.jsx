import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Homepage from "./Components/Homepage";
import Login from "./Components/Login";
import Latestproduct from "./Components/Latestproduct";
import Men from "./Components/Pages/Men";
import Women from "./Components/Pages/Women"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/latest" element = {<Latestproduct />} />
        <Route path="/men" element = {<Men />} />
        <Route path="/women" element = {<Women />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
