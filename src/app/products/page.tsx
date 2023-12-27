/* eslint-disable @next/next/no-img-element */

import { Button, ProductTypeChecklist } from "@/atom";
import { ContactUs } from "@/molecules/contactUs";

export default function Products() {
  const data = [
    {
      title: "Ginger Bell",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      img: "/productImg1.png",
      icon: "/bell.png",
    },
    {
      title: "Ginger Security",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      img: "/productImg1.png",
      icon: "/security.png",
    },
    {
      title: "Ginger LED",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      img: "/productImg1.png",
      icon: "/led.png",
    },
    {
      title: "Ginger Baby Monitor",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      img: "/productImg1.png",
      icon: "/monitor.png",
    },
    {
      title: "Ginger Synergy",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      img: "/productImg1.png",
      icon: "/synergy.png",
    },
    {
      title: "Ginger Mirror",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      img: "/productImg1.png",
      icon: "/mirror.png",
    },
    {
      title: "Ginger Dash",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      img: "/productImg1.png",
      icon: "/dash.png",
    },
    {
      title: "Ginger Voice",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      img: "/productImg1.png",
      icon: "/voice.png",
    },
  ];
  return (
    <div className=" container">
      <div className=" absolute top-0 left-0 right-0 -z-10">
        <img
          src="/productBanner1.png"
          className=" object-cover w-full min-h-[60vh] lg:min-h-fit aspect-[1/.48]"
          alt='bannerImg'
        />
      </div>

      <div className=" w-full min-h-[50vh] lg:min-h-fit aspect-[1/.42] flex flex-col justify-between gap-10 py-14">
        <ProductTypeChecklist />
        <div>
          <div className=" font-bold text-xl lg:text-6xl">
            Unleash the
            <span className=" text-app-cyan">Future of Home</span> Intelligence
          </div>
          <div className=" font-normal text-xs lg:text-3xl max-w-[75%] line-clamp-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit .
          </div>
        </div>
      </div>

      <div className=" flex flex-col gap-40 mt-20 lg:mt-40">
        {data.map((val, ind) => (
          <div key={ind} className=" grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-0">
            <div className=" flex justify-center max-h-[28rem]">
              <img src={val?.img} className=" object-cover" alt="alt-img" />
            </div>
            <div
              className={` col-span-2 ${
                ind % 2 !== 0 ? "lg:-order-1" : "order-1"
              }`}
            >
              <div
                className={` flex gap-6 lg:gap-10 items-center ${
                  ind % 2 !== 0 ? " justify-end" : " justify-start"
                }`}
              >
                <div className=" p-6 lg:p-12 rounded-3xl [background:linear-gradient(90.3deg,_rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1))] hover:box-border">
                  <div className=" max-w-24 lg:max-w-32">
                    <img src={val?.icon} className=" object-cover" alt="alt-img" />
                  </div>
                </div>
                <div
                  className={` text-2xl lg:text-5xl font-semibold ${
                    ind % 2 !== 0 ? "-order-1" : "order-1"
                  }`}
                >
                  {val?.title}
                </div>
              </div>
              <div className=" text-sm lg:text-base text-black bg-white rounded-3xl -mt-2 lg:-mt-5 mx-0 lg:mx-10 z-10 p-4 lg:p-8">
                {val?.description}
              </div>
              <div
                className={` flex mt-6 lg:mt-10 mx-0 lg:mx-10 ${
                  ind % 2 !== 0 ? "justify-start" : "justify-end"
                }`}
              >
                {" "}
                <Button title="Let’s Talk" variant="out-lined" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className=" my-28" id="about">
        <div className=" text-xl text-app-cyan font-semibold">
          Let’s Talk get more Details
        </div>
        <div className=" text-6xl mt-2">Let’s Discuss</div>

        <div className=" relative mt-12 p-8 rounded-3xl [background:linear-gradient(90.3deg,_rgba(255,_255,_255,_0.04),_rgba(255,_255,_255,_0.03))] [backdrop-filter:blur(200px)] box-border border-2 border-solid border-gray-500">
          <div className="absolute -z-10 top-1/4 bottom-0 left-1/4 right-1/4 rounded-full [background:linear-gradient(266.46deg,_rgba(234,_237,_255,_0.3),_rgba(255,_255,_255,_0.18)_45.9%),_linear-gradient(91.9deg,_rgba(100,_77,_255,_0.4),_rgba(114,_149,_255,_0.4)_21.12%,_rgba(137,_217,_255,_0.4)_45.61%,_rgba(208,_201,_240,_0.4)_64.06%,_rgba(84,_91,_239,_0.4))] blur-[5rem] opacity-40"></div>
          <ContactUs />
        </div>
      </div>
    </div>
  );
}
