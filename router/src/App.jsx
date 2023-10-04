import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Twitter } from "./pages/Twitter/Twitter";
import { Facebook } from "./pages/Facebook/Facebook";
import { Instagram } from "./pages/Instagram/Instagram";
import { Navbar } from "./components/Navbar/Navbar";
import '../src/global.css'

//1- Config React Router
export function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/twitter" element={<Twitter />} />
          <Route path="/facebook" element={<Facebook />} />
          <Route path="/instagram" element={<Instagram/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}
