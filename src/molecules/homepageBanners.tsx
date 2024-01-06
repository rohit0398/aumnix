/* eslint-disable @next/next/no-img-element */

"use client";
import { Button } from "@/atom";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { AnimateContainer, AnimateSlideContainer } from "./animateContainer";

const banners = [
  {
    img: "/banner1.png",
    title: "Unlock Your Home with AI",
    desc: "Where AI meets IoT for top-tier security. Facial recognition and edge-based object detection ensure a clear view of your doorstep's visitors.",
  },
  {
    img: "/banner1.png",
    title: "Ease Your Farming with AI",
    desc: `Elevate your agriculture with AIAgri. Precision farming, crop analysis, and harvest forecasts. Seamlessly integrate e-commerce, optimize supply chains, and get detailed nutritional analysis reports for your yield.`,
  },
  {
    img: "/banner1.png",
    title: "Smart City with AI",
    desc: `Discover a sustainable life with AISmarc. Optimize power and natural resources, implement target-based waste management, and monetize waste. Experience city-level surveillance with AI patrol bots.`,
  },
  {
    img: "/banner1.png",
    title: "Let’s Fly with Experience of AI",
    desc: `Elevate your perspective with AIHawk, the eye in the sky. Benefit from autonomous operations, patrolling capabilities, and advanced geo-surveying for a truly immersive flying experience.`,
  },
  {
    img: "/banner1.png",
    title: "Automate your Retail with AI",
    desc: `Transform your business at your fingertips with AIRetail. Benefit from AI-driven supply chain management, real-time tracking, efficient inventory management and optimization, and advanced demand forecasting with automated replenishment.`,
  },
];

let intervalId: any = null;
export function HomePageBanners() {
  const [index, setIndex] = useState(0);
  const divRef = useRef(null);
  const isInView = useInView(divRef);

  useEffect(() => {
    if (isInView === false && intervalId) clearInterval(intervalId);
    else {
      intervalId = setInterval(() => {
        setIndex((prev) => {
          return prev === 3 ? 0 : prev + 1;
        });
      }, 5000);
    }
    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, [isInView]);

  return (
    <div ref={divRef} className=" flex justify-end relative mt-10">
      <div className=" absolute top-0 sm:top-3 lg:top-12 left-0 right-[45%]">
        <AnimateContainer runAgain={index}>
          <div className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl 2xl:text-8xl leading-none sm:leading-tight lg:leading-none font-semibold line-clamp-2">
            {banners[index].title}
          </div>

          <div className=" text-[.5rem] sm:text-sm md:text-base lg:text-xl xl:text-2xl leading-tight font-light my-4 lg:my-10 xl:my-12 line-clamp-3">
            {banners[index].desc}
          </div>
        </AnimateContainer>

        <div>
          <Button title="Request For Demo" />
        </div>
      </div>
      <AnimateSlideContainer runAgain={index}>
        <img
          src={banners[index].img}
          className=" w-11/12 lg:w-10/12 object-cover"
          alt="header-img"
        />
      </AnimateSlideContainer>
    </div>
  );
}
