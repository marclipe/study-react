import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Twitter } from "./pages/Twitter/Twitter";
import { Facebook } from "./pages/Facebook/Facebook";
import { Instagram } from "./pages/Instagram/Instagram";

//1- Config React Router
export function App() {
  return (
    <>
      <h1>Social Medias</h1>
      <BrowserRouter>
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
