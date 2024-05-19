import React from "react";
import { useState } from "react";
import CountUp from "react-countup";
import { BsArrowDown, BsPercent } from "react-icons/bs";
import ScrollTrigger from "react-scroll-trigger";
const CounterSection = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <ScrollTrigger className="hidden md:block"
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}>
      <div className="p-5 bg-[#1E1E2F] text-white font-bold  rounded flex items-center justify-between px-20 py-2   md:px-20 py-10 mt-5 mb-8">
        <div>
          <div className="flex gap-1 items-center ">
            {counterOn && (
              <CountUp
                className="text-2xl md:text-4xl"
                start={0}
                end={50}
                duration={2}
                delay={0}
              />
            )}{" "}
            <BsArrowDown className="text-2xl text-[#54A9CE] font-bold" />{" "}
          </div>
          <p className="font-semibold text-[#fff] ">Language supported </p>
        </div>

        <div>
          <div className="flex gap-1 items-center ">
            {counterOn && (
              <CountUp
                className="text-2xl md:text-4xl"
                start={0}
                end={98}
                duration={2}
                delay={0}
              />
            )}{" "}
            <BsPercent className="text-2xl text-[#54A9CE] font-bold md:text-4xl" />{" "}
          </div>
          <p className="font-semibold text-[#fff] ">Satisfactions</p>
        </div>
        <div>
          <div className="flex gap-1 items-center ">
            {counterOn && (
              <CountUp
                className="text-2xl md:text-4xl"
                start={0}
                end={184}
                duration={2}
                delay={0}
              />
            )}{" "}
            <h1 className="text-2xl text-[#54A9CE] font-semibold md:text-4xl">
              k{" "}
            </h1>{" "}
          </div>
          <p className="font-semibold text-[#fff] ">User's worldwide </p>
        </div>

        <div>
          <div className="flex gap-1 items-center ">
            {counterOn && (
              <CountUp
                className="text-2xl md:text-4xl"
                start={0}
                end={600}
                duration={2}
                delay={0}
              />
            )}{" "}
            <h1 className="text-2xl text-[#54A9CE] font-semibold md:text-4xl">
            /s
            </h1>{" "}
          </div>
          <p className="font-semibold text-[#fff] ">Words translated</p>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default CounterSection;
