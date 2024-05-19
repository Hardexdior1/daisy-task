import React, { useEffect, useState } from "react";
import blogs from "./BlogData";
import { Link } from "react-router-dom";
import calender from "../images/calendar_today.png";
import account from "../images/account_circle.png";
import { FaArrowRight } from "react-icons/fa";
import vector1 from "../images/Vector 1 (1).png";
import hero2 from "../images/Image.png";
import play from "../images/play.png";
import duolingo from "../images/g3.png";
import udemy from "../images/Udemy svg.png";
import trustPilot from "../images/Trustpilot svg.png";
import babel from "../images/Frame.png";
import levelData from "./LevelData";
import hero1 from "../images/Image (2).png";
import Reviews from "./Reviews";

const Blog = () => {
  const categories = [
    "All categories",
    ...new Set(blogs.map((item) => item.category)),
  ];

  const [blog, setBlog] = useState(blogs);

  const changeCategories = (item) => {
    if (item == "All categories" || item == "") {
      setBlog(blogs);
      return;
    }
    const newItem = blogs.filter((blog) => blog.category == item);
    setBlog(newItem);
  };
  const [color, setColor] = useState(categories[0]);
  console.log(color);

  
  return (
    <div>
      <section className="hidden px-20 py-2  bg-[#F8F8FB] md:block px-20 py-20" id="blog" >
        <center>
          <div className="flex items-center justify-center gap-1 font-bold" >
            <div className="bg-[#F4DD0A] h-1 w-10"></div>
            <p>Blog</p>
          </div>

          <div className="text-[#1E1E2F] text-2xl font-bold mt-6 md:text-3xl">
            <h1>Insights And perspective </h1>
          </div>
        </center>
        {/* #54A9CE */}
        <div>
          <div className="hidden grid grid-cols-2 gap-4  justify-center mt-6 overflow-hidden md:flex items-center font-semibold">
            {categories.map((eachCategory) => {
              return (
                <button
                  onClick={() => {
                    changeCategories(eachCategory);
                    setColor(eachCategory);
                  }}
                  className={
                    color == eachCategory
                      ? "border-b-2 border-[#54A9CE] p-3"
                      : "text-[#1E1E2F] p-3"
                  }>
                  {eachCategory}
                </button>
              );
            })}
          </div>
          <select
            name=""
            id=""
            onChange={(e) => {
              changeCategories(e.target.value);
            }}
            className="w-full p-3 font-bold mt-5 rounded md:hidden">
            <option value="">select a category</option>
            {categories.map((eachCategory) => {
              return (
                <option
                  value={eachCategory}
                  onClick={() => {
                    changeCategories(eachCategory);
                  }}>
                  {eachCategory}{" "}
                </option>
              );
            })}
          </select>
        </div>

        <div className="grid gap-8 items-center  justify-center py-12 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 lg:gap-8">
          {blog.map((datum) => {
            const { name, date, img, text1, text2 } = datum;

            return (
              <Link
                className="bg-white p-4 rounded shadow-md rounded-lg overflow-hidden transform transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:bg-gray-100"
                to={"/Blog/" + datum.id}>
                <div>
                  <img src={img} alt="blog-img" className="w-full mb-2" />
                </div>

                <div className="flex items-center justify-between mb-3">
                  <div className="flex gap-2 items-center">
                    <div>
                      {" "}
                      <img src={account} alt="profile" />
                    </div>
                    <div>
                      {" "}
                      <small className="text-[#1E1E2F] font-semibold mt-4">
                        {name}
                      </small>
                    </div>
                  </div>

                  <div className="flex gap-2 items-center">
                    <div>
                      {" "}
                      <img src={calender} alt="calender" />
                    </div>
                    <div>
                      {" "}
                      <small className="text-[#1E1E2F] font-semibold mt-4">
                        {date}
                      </small>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-6">
                  <div className="font-bold text-1.5xl">
                    <h1>{text1}</h1>
                    <h1>{text2}</h1>
                  </div>

                  <Link className="font-semibold flex gap-3 items-center">
                    Learn More
                    <FaArrowRight />
                  </Link>
                </div>
              </Link>
            );
          })}
        </div>
        <center>
          <button className="bg-[#1E1E2F] flex gap-3 text-white rounded px-8 py-2 font-bold hidden md:flex items-center ">
            <small> Get Started Now</small> <FaArrowRight />
          </button>
        </center>
      </section>

      <section className="px-4 py-5  bg-[#fff] md:hidden px-20 py-20 lg:hidden px-20 py-20" id="get-started">
        <center>
          <div className="flex items-center justify-center gap-1 font-bold">
            <div className="bg-[#F4DD0A] h-1 w-10"></div>
            <p>Empowering Conversations</p>
          </div>

          <div className="text-[#1E1E2F] text-2xl font-bold mt-6 md:text-3xl">
            <h1>Unlock a new level of communication prowess.</h1>
          </div>
        </center>

        <div className="grid gap-8 items-center justify-center py-12 md:grid md:grid-cols-2 lg:grid lg:grid-cols-4 lg:gap-8 ">
          {levelData.map((datum) => {
            const { img, text1, text2 } = datum;

            return (
              <div className="bg-white border p-4 rounded shadow-md rounded-lg overflow-hidden transform transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:bg-gray-100">
                <div>
                  <img src={img} alt="blog-img" className=" mb-4 h-10 w-10" />
                </div>

                <div className="flex flex-col gap-4">
                  <div className="font-bold text-1.5xl">
                    <h1>{text1}</h1>
                  </div>
                  <div>
                    {" "}
                    <p className="font- text-[#4B4B59] text-sm">{text2}</p>
                  </div>
                  <Link className="font-semibold flex gap-3 items-center">
                    Learn More
                    <FaArrowRight />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <div className="bg-[#F8F8FB] hidden md:block py-8">
        <section className=" grid gap-8 px-4 py-10 md:flex border items-center md:px-20 py-14">
          <div className="relative w-full">
            <img src={hero2} alt="hero-img" />
            <img
              src={vector1}
              alt="vector-img"
              className="absolute top-0 right-0"
            />
          </div>
          <div>
            <div className="w-full flex flex-col gap-6">
              <div className="flex items-center gap-1 font-bold">
                <div className="bg-[#F4DD0A] h-1 w-10"></div>
                <p>a new era of global communication</p>
              </div>

              <div className="text-[#1E1E2F] text-3xl font-bold">
                <h1>Video calls with instant language translation </h1>
              </div>

              <div className="text-[#4B4B59] border-l border-[#F4DD0A] pl-4">
                <p>
                  Connect with the world without any linguistic barriers. Try it
                  today and open the doors to borderless communication.
                </p>
              </div>

              <div className="flex  gap-4 items-center">
                <button className="bg-[#1E1E2F] text-white rounded px-4 py-2 font-bold flex gap-2 items-center">
                  Get Started Now <FaArrowRight />
                </button>

                <button className="bg-[#fff] text-[#1E1E2F] font-bold rounded px-4 py-2 flex items-center text-center justify-center gap-2">
                  <img src={play} alt="play-img" className="h-6 w-6" />
                  Watch More <FaArrowRight />
                </button>
              </div>
            </div>
          </div>

          {/* trusted by 5000+ */}
        </section>
        <div className="flex items-center gap-8 justify-center">
          <p className="text-center mb-2 font-bold text-[#4B4B59]">
            Trusted by 5000+ Companies worldwide
          </p>
          <div>
            <div className="h-0.5 w-20 bg-[#000]"></div>
          </div>
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
          <div>
            <img src={babel} alt="babel-img" />
          </div>
        </div>
      </div>

      <section className="px-5 py-5 grid gap-8 md:hidden flex border items-center bg-[#F8F8FB] md:px-20 py-14">
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
            <div className="bg-[#F4DD0A] h-1 w-10"></div>
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
              <div className="flex items-center gap-3">
                {" "}
                Learn More <FaArrowRight />
              </div>
            </button>
          </div>
        </div>
      </section>

      <section className="hidden px-4 py-5  bg-[#fff] md:block md:px-20 py-20" id="get-started">
        <center>
          <div className="flex items-center justify-center gap-1 font-bold">
            <div className="bg-[#F4DD0A] h-1 w-10"></div>
            <p>Empowering Conversations</p>
          </div>

          <div className="text-[#1E1E2F] text-2xl font-bold mt-6 md:text-3xl">
            <h1>Unlock a new level of communication prowess.</h1>
          </div>
        </center>

        <div className="grid gap-8 items-center justify-center py-12 md:grid md:grid-cols-2 lg:grid lg:grid-cols-4 lg:gap-8 ">
          {levelData.map((datum) => {
            const { img, text1, text2 } = datum;

            return (
              <div className="bg-white border p-4 rounded shadow-md rounded-lg overflow-hidden transform transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:bg-gray-100">
                <div>
                  <img src={img} alt="blog-img" className=" mb-4 h-10 w-10" />
                </div>

                <div className="flex flex-col gap-4">
                  <div className="font-bold text-1.5xl">
                    <h1>{text1}</h1>
                  </div>
                  <div>
                    {" "}
                    <p className="font- text-[#4B4B59] text-sm">{text2}</p>
                  </div>
                  <Link className="font-semibold flex gap-3 items-center">
                    Learn More
                    <FaArrowRight />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="px-4 py-2  bg-[#F8F8FB] md:hidden px-20 py-20 " id="blog">
        <center>
          <div className="flex items-center justify-center gap-1 font-bold">
            <div className="bg-[#F4DD0A] h-1 w-10"></div>
            <p>Blog</p>
          </div>

          <div className="text-[#1E1E2F] text-2xl font-bold mt-6 md:text-3xl">
            <h1>Insights And perspective </h1>
          </div>
        </center>
        {/* #54A9CE */}
        <div>
          <div className="hidden grid grid-cols-2 gap-4  justify-center mt-6 overflow-hidden md:flex items-center font-semibold">
            {categories.map((eachCategory) => {
              return (
                <button
                  onClick={() => {
                    changeCategories(eachCategory);
                    setColor(eachCategory);
                  }}
                  className={
                    color == eachCategory
                      ? "border-b-2 border-[#54A9CE] p-3"
                      : "text-[#1E1E2F] p-3"
                  }>
                  {eachCategory}
                </button>
              );
            })}
          </div>
          <select
            name=""
            id=""
            onChange={(e) => {
              changeCategories(e.target.value);
            }}
            className="w-full p-3 font-bold mt-5 rounded md:hidden">
            <option value="">select a category</option>
            {categories.map((eachCategory) => {
              return (
                <option
                  value={eachCategory}
                  onClick={() => {
                    changeCategories(eachCategory);
                  }}>
                  {eachCategory}{" "}
                </option>
              );
            })}
          </select>
        </div>

        <div className="grid gap-8 items-center  justify-center py-12 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 lg:gap-8">
          {blog.map((datum) => {
            const { name, date, img, text1, text2 } = datum;

            return (
              <Link
                className="bg-white p-4 rounded shadow-md rounded-lg overflow-hidden transform transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:bg-gray-100"
                to={"/Blog/" + datum.id}>
                <div>
                  <img src={img} alt="blog-img" className="w-full mb-2" />
                </div>

                <div className="flex items-center justify-between mb-3">
                  <div className="flex gap-2 items-center">
                    <div>
                      {" "}
                      <img src={account} alt="profile" />
                    </div>
                    <div>
                      {" "}
                      <small className="text-[#1E1E2F] font-semibold mt-4">
                        {name}
                      </small>
                    </div>
                  </div>

                  <div className="flex gap-2 items-center">
                    <div>
                      {" "}
                      <img src={calender} alt="calender" />
                    </div>
                    <div>
                      {" "}
                      <small className="text-[#1E1E2F] font-semibold mt-4">
                        {date}
                      </small>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-6">
                  <div className="font-bold text-1.5xl">
                    <h1>{text1}</h1>
                    <h1>{text2}</h1>
                  </div>

                  <Link className="font-semibold flex gap-3 items-center">
                    Learn More
                    <FaArrowRight />
                  </Link>
                </div>
              </Link>
            );
          })}
        </div>
        <center>
          <button className="bg-[#1E1E2F] flex gap-3 text-white rounded px-8 py-2 font-bold hidden md:flex items-center ">
            <small> Get Started Now</small> <FaArrowRight />
          </button>
        </center>
      </section>

      <Reviews />
    </div>
  );
};

export default Blog;
