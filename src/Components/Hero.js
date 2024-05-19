import React from "react";
import hero1 from "../images/Image (2).png";
import vector1 from "../images/Vector 1 (1).png";
import hero2 from "../images/Image.png";
import play from "../images/play.png";
import duolingo from "../images/g3.png";
import udemy from "../images/Udemy svg.png";
import trustPilot from "../images/Trustpilot svg.png";
import babel from "../images/Frame.png";
import Blog from "./Blog";
import { FaArrowRight } from 'react-icons/fa';
import CounterSection from "./CounterSection";

const Hero = () => {
  return (
    <main>
      <section className="hidden grid gap-8 md:flex border items-center bg-[#F8F8FB] md:px-20 py-14">
        <div className="relative w-full">
          <img src={hero1} alt="hero-img" />
          <img
            src={vector1}
            alt="vector-img"
            className="absolute top-0 right-0"
          />
        </div>

        <div className="w-full flex flex-col gap-6">
          <div className="flex items-center gap-1 font-bold">
            <div className="bg-[#F4DD0A] h-0.5 w-10"></div>
            <p>About Us</p>
          </div>

          <div className="text-[#1E1E2F] text-3xl font-bold">
            <h1>Crafting a Legacy of Innovation in Communication </h1>
          </div>

          <div className="text-[#4B4B59] border-l-4 border-[#F4DD0A] pl-4">
            <p>
              Embark on a journey with us. At Lingoo, discover the passion for
              breaking down language barriers and fostering global connections.
            </p>
          </div>

          <div className="text-[#4B4B59]">
            <p>
              Join us in shaping a world where conversations know no bounds.
            </p>
          </div>

          <div>
            <button className="bg-[#1E1E2F] text-white rounded px-8 py-2">
             <div className="flex items-center gap-3"> Learn More <FaArrowRight /></div>
            </button>
          </div>
        </div>
      </section>

      <CounterSection />

      <section className="grid gap-8 px-4 py-10 bg-[#F8F8FB] md:hidden">
       <div className="relative w-full"> 
          <img src={hero2} alt="hero-img" />
          <img
            src={vector1}
            alt="vector-img"
            className="absolute top-0 right-0"
          />
        </div>

        <div className="w-full flex flex-col gap-6">
          <div className="flex items-center gap-1 font-bold">
            <div className="bg-[#F4DD0A] h-1 w-10"></div>
            <p>a new era of global communication</p>
          </div>

          <div className="text-[#1E1E2F] text-3xl font-bold">
            <h1>Video calls with instant language translation </h1>
          </div>

          <div className="text-[#4B4B59] border-l-4 border-[#F4DD0A] pl-4">
            <p>
              Connect with the world without any linguistic barriers. Try it
              today and open the doors to borderless communication.
            </p>
          </div>

          <div className="flex flex-col gap-6 items-center-justify-center">
            <button className="bg-[#1E1E2F] text-white rounded px-8 py-2 font-bold flex gap-2 items-center justify-center">
              Get Started Now <FaArrowRight />
            </button>
            <center>
            {/* <Link className="font-semibold flex gap-3 items-center">
                    Learn More 

                    
                  </Link> */}
             
              <button className="bg-[#fff] text-[#1E1E2F] font-bold rounded px-8 py-2 flex items-center text-center justify-center gap-2 w-full">
                <img src={play} alt="play-img" className="h-6 w-6" /> Watch More <FaArrowRight />
              </button>
            </center>
          </div>
        </div>
        {/* trusted by 5000+ */}

        <div>
          <p className="text-center mb-2">
            Trusted by 5000+ Companies worldwide
          </p>
          <center>
            <div className="h-0.5 w-20 bg-[#000]"></div>
          </center>
        </div>

        <center className="grid grid-cols-2 gap-4 items-center justify-center">
          <div>
            {" "}
            <img src={duolingo} alt="duolingo-img" />
          </div>
          <div>
            {" "}
            <img src={udemy} alt="udemy-img" />
          </div>
          <div>
            {" "}
            <img src={trustPilot} alt="trustPilot-img" />
          </div>
          <div><img src={babel} alt="babel-img" /></div>
        </center>
      </section>

      <Blog />
    </main>
  );
};

export default Hero;
