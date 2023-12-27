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
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    img: "/banner2.png",
    title: "Ease Your Farming with AI",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    img: "/banner3.png",
    title: "Real Estate with AI",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    img: "/banner4.png",
    title: "Let’s Fly with Experience of AI",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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
      }, 2000);
    }
    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, [isInView]);

  console.log("counter", index);

  return (
    <div ref={divRef} className=" flex justify-end relative mt-10">
      <div className=" absolute top-0 sm:top-3 lg:top-12 left-0 right-[45%]">
        <AnimateContainer runAgain={index}>
          <div className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl 2xl:text-8xl leading-none sm:leading-tight lg:leading-none font-semibold line-clamp-2">
            {banners[index].title}
          </div>

          <div className=" text-[.5rem] sm:text-sm md:text-base lg:text-xl xl:text-2xl leading-tight font-light my-4 lg:my-10 xl:my-12 line-clamp-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
