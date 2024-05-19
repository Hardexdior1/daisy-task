import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Event from "./Components/Event";
// import Faq from "./Components/Faq";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from "./Pages/Home";
import BlogContent from "./Pages/BlogContent";

// ren .git .git_backup
import Navbar from "./Components/Navbar";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from "./Components/Footer";

function App() {
 
  return (
    <section className="App">
      <BrowserRouter>
<Navbar />
        <Routes> 
          <Route
            path="/"
            element={
              <Home
                
              />
            }
          />
          <Route path="/Blog/:id" element={<BlogContent />} />
          
         
        </Routes>


        <Footer />
      </BrowserRouter>
    </section>
  );
}

export default App;
