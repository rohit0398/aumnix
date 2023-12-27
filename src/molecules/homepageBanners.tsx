/* eslint-disable @next/next/no-img-element */

"use client";
import { Button } from "@/atom";
import { useEffect, useState } from "react";
import { AnimateContainer } from "./animateContainer";

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

let inverval: any = null;
export function HomePageBanners() {
  const [index, setIndex] = useState(0);

  function getBanner(key: number) {
    switch (key) {
      case 0:
        return (
          <div className=" flex justify-end relative">
            <div className=" absolute top-12 left-0 right-2/4">
              <AnimateContainer runAgain={index}>
                <div className=" text-8xl font-semibold">
                  {banners[0].title}
                </div>

                <div className=" text-2xl font-light my-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </AnimateContainer>

              <div>
                <Button title="Request For Demo" />
              </div>
            </div>
            <img
              src="/banner1.png"
              className=" w-10/12 object-cover"
              alt="header-img"
            />
          </div>
        );
      case 1:
        return (
          <div className=" flex justify-end relative">
            <div className=" absolute top-12 left-0 right-2/4">
              <AnimateContainer runAgain={index}>
                <div className=" text-8xl font-semibold">
                  {banners[1].title}
                </div>

                <div className=" text-2xl font-light my-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </AnimateContainer>

              <div>
                <Button title="Request For Demo" />
              </div>
            </div>
            <img
              src="/banner1.png"
              className=" w-10/12 object-cover"
              alt="header-img"
            />
          </div>
        );

      default:
        return (
          <div className=" flex justify-end relative">
            <div className=" absolute top-12 left-0 right-2/4">
              <AnimateContainer runAgain={index}>
                <div className=" text-2xl lg:text-8xl font-semibold">
                  {banners[3].title}
                </div>

                <div className=" text-[.5rem] lg:text-2xl font-light my-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </AnimateContainer>

              <div>
                <Button title="Request For Demo" />
              </div>
            </div>
            <img
              src="/banner1.png"
              className=" w-10/12 object-cover"
              alt="header-img"
            />
          </div>
        );
    }
  }

  useEffect(() => {
    // inverval = setInterval(() => {
    //   console.log("index", index);
    //   if (index === 2) setIndex(0);
    //   else setIndex((prev) => prev + 1);
    // }, 2000);
    // () => {
    //   if (inverval) clearInterval(inverval);
    // };
  }, []);

  return (
    <div onClick={() => setIndex((prev) => prev + 1)}>
      <div className=" flex justify-end relative mt-10 lg:mt-0">
        <div className=" absolute top-3 lg:top-12 left-0 right-[45%]">
          <AnimateContainer runAgain={index}>
            <div className=" text-2xl lg:text-8xl leading-tight lg:leading-none font-semibold line-clamp-2">
              {banners[index].title}
            </div>

            <div className=" text-[.5rem] lg:text-2xl leading-tight lg:leading-none font-light my-4 lg:my-12 line-clamp-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </AnimateContainer>

          <div>
            <Button title="Request For Demo" />
          </div>
        </div>
        <img
          src="/banner1.png"
          className=" w-11/12 lg:w-10/12 object-cover"
          alt="header-img"
        />
      </div>
    </div>
  );
}
