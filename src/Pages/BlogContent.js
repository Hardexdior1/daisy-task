import { useParams } from "react-router-dom";

// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { useEffect } from 'react';
// import Watches from "../Components/BlogData";
import blogs from "../Components/BlogData";
import Navbar from "../Components/Navbar";
import { useEffect, useState } from "react";

const BlogContent = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, 3000);
  const { id } = useParams();
  let data = blogs.find((item) => item.id == id);
  let text =
    "corporis asperiores, quibusdam eum ducimus veritatis illum quae. iure distinctio, assumenda nihil sunt aliquid maiores, placeat eveniet ab vero saepe eius asperiores quaerat sunt. Soluta similique aspernatur fuga cupiditate tenetur ad neque laboriosam labore maxime quis, dignissimos autem reiciendis quae facere ratione, quibusdam tempore veniam veritatis inventore voluptates. Nobis quasi sequi esse commodi voluptatibus beatae libero corrupti cumque neque voluptatum quaerat praesentium quidem illo officiis, debitis facilis dolore sequi quam vero veritatis maiores hic. Eos vero ab, corporis sed ullam nihil modi voluptatibus labore architecto laboriosam laborum quis nam blanditiis neque mollitia. Vel dolorum molestiae minus placeat at,quos saepe cum, sint dolorum atque fugiat veritatis, sed, impedit provident soluta nobis temporibus ipsum! Ab modi pariatur magni dolorum similique ipsa vitae enim porro quasi. Necessitatibus animi repellendus ipsum corrupti placeat cumque quaerat tempore molestias. Praesentium dicta impedit provident. Harum incidunt vitae voluptatum quo, dolorem expedita porro dolorum? Consectetur ab veniam perferendis Eveniet ullam cupiditate aliquid tempora id unde nobis hic Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem at nisi autem sit sapiente tempore illo consectetur molestias eligendi non dignissimos, impedit, at repellat ab praesentium natus non eos cumque sapiente ad porro possimus cumque enim quisquam dolorem omnis, qui";
  console.log(text.length);

  const [showAll, setShowAll] = useState(true);
  return (
    <div>
      {/* <Navbar /> */}
      <div className="px-5 py-5 grid gap-6 items-center justify-center md:px-40 py-10 flex w-5/10 grid">
        <center>
          {" "}
          <img
            src={data.img}
            alt="blog-img"
            className="w-full object-cover md:w-1/2"
          />
        </center>
     <div className="font-bold text-1.5xl grid items-center justify-center md:text-2xl">
                    <h1>{data.text1} {data.text2}</h1>
                  </div>
        <div className="flex">
          <p>
           
            {showAll ? (
              <p>
                {text.substring(0, 600)}{" "}
               
              </p>
            ) : (
              <p>{text}</p>
            )}

<button
                  className="text-blue-400 font-bold "
                  onClick={() => {
                    setShowAll(!showAll);
                  }}>
                  {showAll ? "show more..." : "show less"}
                </button>

          </p>
          
        
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
