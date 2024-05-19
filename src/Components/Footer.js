import React from "react";
import logo from "../images/Logo (2).png";
import { BsArrowRight } from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      <div className="z-20 mx-4 mb-0 md:mx-20 ">
        <div
          className="text-white rounded font-semibold bg-[#54A9CE] px-4 py-2 grid gap-3 md:px-10 py-10 md:flex items-center justify-between"
          id="index">
          <h1 className="text-2xl">Ready to transform your communications ?</h1>

          <button className="bg-[#1E1E2F] flex gap-3 text-white rounded px-8 py-2 font-bold text-center inline-block  md:flex items-center ">
            <small> Get Started Now</small> <BsArrowRight />
          </button>
        </div>
      </div>

      <div
        className="px-4 py-5  bg-[#1E1E2F] mt-[-20px] md:px-20 py-20 "
        id="foot">
        <footer className="border-b-2  py-6">
          <img src={logo} alt="logo-img" className="mb-3" />

          <div className="grid gap-8 lg:grid lg:grid-cols-2 gap-6">
            <div className="text-[#F8F8FB] grid gap-4 ">
              <p className="text-[#4B4B59]">
                Stay in the loop with the latest in communication innovation!
                Subscribe to our newsletter for exclusive updates.
              </p>

              <div>
                <div>
                  <input
                    type="email"
                    name=""
                    id=""
                    className="bg-[#4B4B59] rounded px-3 py-2 mb-3 w-full md:w-1/2"
                    placeholder="name@gmail.com"
                  />
                </div>

                <button className="flex items-center gap-3 rounded px-3 py-2 bg-[#54A9CE]  sm:w-full md:w-1/3">
                  Subscribe <BsArrowRight />{" "}
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 md:grid md:grid-cols-4">
              <div className="hidden md:block w-0.5 bg-[#4B4B59] grid"></div>
              <ul>
                <h4 className="text-white text-1xl mb-3">Quick Links </h4>

                <div className="grid gap-2 text-[#4B4B59]">
                  <li>Home</li>
                  <li>About us </li>
                  <li>Blog</li>
                  <li>Contact</li>
                </div>
              </ul>

              <ul>
                <h4 className="text-white text-1xl mb-3">Utility Pages </h4>

                <div className="grid gap-2 text-[#4B4B59]">
                  <li>Instructions</li>
                  <li>Style guide</li>
                  <li>License</li>
                  <li>404</li>
                  <li>Password protected</li>
                </div>
              </ul>

              <ul>
                <h4 className="text-white text-1xl mb-3">Resources</h4>

                <div className="grid gap-2 text-[#4B4B59]">
                  <li>Support </li>
                  <li>privacy policy </li>
                  <li>Terms & conditions</li>
                  <li>Strategic finance </li>
                  <li>Video guide</li>
                </div>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
