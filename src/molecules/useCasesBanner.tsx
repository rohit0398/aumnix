/* eslint-disable @next/next/no-img-element */


"use client";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { AnimateContainer, AnimateSlideContainer } from "./animateContainer";

const useCases = [
  {
    img: "/usecaseAgri.png",
    title: "Agri Mon",
    text: "AgriMon offers a holistic platform, analyzing agricultural performance across the entire season. AgriAuto implements tiered automation, boosting productivity in farming practices.",
  },
  {
    img: "/usecaseHome.png",
    title: "Ginger Bell",
    text: "Ginger Bell, a leading smart doorbell, integrates AI and IoT for top-tier security. Its edge-based facial recognition and object detection offer reliable insights on your doorstep visitors.",
  },
  {
    img: "/usecaseSmarc.png",
    title: "Smarc GW",
    text: "SmarcGW acts as a versatile smart city gateway, facilitating diverse IoT devices citywide. SmarcWMS innovates waste management through AI-controlled systems, transforming collection and recycling processes in smart cities.",
  },
  {
    img: "/usecaseHawk.png",
    title: "AI Hawk",
    text: "AIHawk, with cutting-edge drone intellect, assesses crops and pests with precision, enabling informed decisions for optimized farming practices. Integrating intelligence seamlessly, AIHawk enhances yield and sustainability, revolutionizing agricultural efficiency.",
  },
  {
    img: "/usecaseRetail.png",
    title: "AI Retail",
    text: "AI Retail redefines the retail experience. Air SCM customizes AI for seamless supply chain management, exclusively for the retail sector. Dive into precision with Air IN, as it transforms inventory tracking, ensuring efficiency and accuracy that sets a new standard in retail operations. Elevate your retail game with AI Retail.",
  },
];

let intervalId: any = null;

export function UseCaseBanner() {
  const [index, setIndex] = useState(0);
  const divRef = useRef(null);
  const isInView = useInView(divRef);

  useEffect(() => {
    if (isInView === false && intervalId) clearInterval(intervalId);
    else {
      intervalId = setInterval(() => {
        setIndex((prev) => {
          return prev === useCases.length - 1 ? 0 : prev + 1;
        });
      }, 5000);
    }
    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, [isInView]);

  function handleClick(bool: boolean) {
    clearInterval(intervalId);
    if (bool) {
      setIndex((prev) => {
        return prev === useCases.length - 1 ? 0 : prev + 1;
      });
    } else
      setIndex((prev) => {
        return prev === 0 ? useCases.length : prev - 1;
      });
  }

  return (
    <AnimateContainer>
      <div ref={divRef} className=" mt-28" id="use_case">
        <div className=" text-xs lg:text-xl text-app-cyan font-semibold">
          Real-world Magic
        </div>
        <div className=" text-4xl lg:text-6xl mt-2">Use Cases</div>

        <div className=" relative mt-14 min-h-80 rounded-3xl [background:linear-gradient(90.3deg,_rgba(255,_255,_255,_0.04),_rgba(255,_255,_255,_0.04))] [backdrop-filter:blur(200px)] box-border  border-2 border-solid border-gray-500">
          <div className="absolute inset-0 rounded-3xl [background:linear-gradient(175.61deg,_rgba(37,_43,_61,_0),_rgba(3,_253,_187,_0.38))] blur-1xl"></div>
          <div className=" absolute z-10 -top-12 lg:-top-5 right-0 lg:right-20 flex gap-2">
            <div className=" bg-white/70 hover:bg-white p-2 rounded-full cursor-pointer">
              <ChevronLeftIcon
                onClick={() => handleClick(false)}
                className="h-6 w-6 text-black"
              />
            </div>
            <div className=" bg-white/70 hover:bg-white p-2 rounded-full cursor-pointer">
              <ChevronRightIcon
                onClick={() => handleClick(true)}
                className="h-6 w-6 text-black"
              />
            </div>
          </div>
          <div className=" flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12 shrink-0">
            <AnimateContainer runAgain={index}>
              <div className=" p-6 lg:p-12">
                <div className=" text-xl lg:text-[2.6rem] font-medium">
                  {useCases[index].title}
                </div>

                <div className=" text-xs lg:text-base font-normal mt-6 lg:mt-12">
                  {useCases[index].text}
                </div>
              </div>
            </AnimateContainer>

            <div className=" shrink-0 flex justify-end relative">
              <AnimateSlideContainer runAgain={index}>
                <img
                  src={useCases[index].img}
                  className=" w-11/12 object-cover scale-110 translate-y-6 translate-x-4"
                  alt={`usecase-img`}
                />
              </AnimateSlideContainer>
            </div>
          </div>
        </div>
      </div>
    </AnimateContainer>
  );
}
