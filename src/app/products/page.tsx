"use client";
/* eslint-disable @next/next/no-img-element */

import { Button, ProductTypeChecklist } from "@/atom";
import { ContactUs } from "@/molecules/contactUs";
import { useSearchParams } from "next/navigation";

type PType = "ai_homes" | "ai_agri" | "ai_smarc" | "ai_hawk" | "ai_retail";
export default function Products() {
  const search = useSearchParams();

  const products = {
    ai_homes: [
      {
        title: "Ginger Door Bell",
        description:
          "A cutting-edge smart doorbell, Ginger Bell combines AI and IoT for unparalleled security. Facial recognition and object detection at the edge ensure you always know who's at your door.",
        feature: `
        - Facial Recognition
        - Object Detection
        - Edge Computing
        - Real-time Alerts
        - Visitor Identification
        - Night Vision
        - Two-Way Communication`,
        img: "/productImg1.png",
        icon: "/bell.png",
      },
      {
        title: "Ginger Chime",
        description:
          "The perfect companion to Ginger Bell, Ginger Chime acts as a voice bot and announces visitors through AI Voice, enhancing your home's communication.        ",
        feature: `
        - Voice Bot Functionality
        - Announcements Through AI Voice`,
        img: "/productImg1.png",
        icon: "/security.png",
      },

      {
        title: "Ginger Baby Monitor",
        description:
          "Capture precious moments of your baby's activities with alerts and jingles. Ginger Baby Monitor adds an extra layer of care to parenting.",
        img: "/productImg1.png",
        icon: "/monitor.png",
        feature: `- Precise Baby Activity Monitoring
        - Alerts and Notifications
        - Lullaby Playback`,
      },
      {
        title: "Ginger Security",
        description:
          "Capture precious moments of your baby's activities with alerts and jingles. Ginger Baby Monitor adds an extra layer of care to parenting.",
        img: "/productImg1.png",
        icon: "/mirror.png",
        feature: `- Outdoor Security Monitoring
        - Event Recording
        - AI-Based Threat Detection`,
      },
      {
        title: "Ginger LED",
        description:
          "Transform your home with Ginger LED, a network of LEDs controlled by AI. Experience dynamic lighting patterns that adapt to your lifestyle",
        img: "/productImg1.png",
        icon: "/led.png",
        feature: `- Dynamic Lighting Patterns
        - AI-Controlled Ambiance`,
      },
      {
        title: "Ginger Voice",
        description:
          "Ginger Voice serves as a voice assistant for home automation. Seamlessly integrated into Ginger Chime, it makes home control intuitive.",
        img: "/productImg1.png",
        icon: "/voice.png",
        feature: `- Voice-Assisted Home Automation`,
      },
      {
        title: "Ginger Dash",
        description:
          "An AI-powered real-time video stream device designed for in-vehicle use. Enhance your driving experience with Ginger Dash",
        img: "/productImg1.png",
        icon: "/dash.png",
        feature: `- Real-time Video Stream
        - In-Vehicle Use`,
      },
      {
        title: "Ginger Mirror",
        description:
          "Experience the future with Ginger Magic Mirror. This AI-powered mirror checks your health, facial expressions, mood, and more.",
        img: "/productImg1.png",
        icon: "/voice.png",
        feature: `- Health Monitoring
        - Facial Expression Analysis
        - Mood Recognition`,
      },
      {
        title: "Ginger Synergy",
        description:
          "Optimize home electricity usage with Ginger Senergy. Monitor and control electricity consumption intelligently.",
        img: "/productImg1.png",
        icon: "/synergy.png",
        feature: `- Electricity Usage Monitoring
        - Optimization Controls`,
      },
    ],
    ai_agri: [],
    ai_smarc: [],
    ai_hawk: [],
    ai_retail: [],
  };

  return (
    <div className=" container">
      <div className=" absolute top-0 left-0 right-0 -z-10">
        <img
          src="/productBanner1.png"
          className=" object-cover w-full min-h-[60vh] lg:min-h-fit aspect-[1/.48]"
          alt="bannerImg"
        />
      </div>

      <div className=" w-full min-h-[50vh] lg:min-h-fit aspect-[1/.42] flex flex-col justify-between gap-10 py-12 lg:py-8 xl:py-12">
        <ProductTypeChecklist />
        <div className=" flex flex-col gap-6 xl:gap-10">
          <div className=" font-bold text-xl sm:text-3xl lg:text-4xl xl:text-6xl">
            Unleash the
            <span className=" text-app-cyan"> Future of Home</span> Intelligence
          </div>
          <div className=" font-normal text-xs sm:text-base xl:text-2xl max-w-full lg:max-w-[75%] line-clamp-5">
            {`AIH (AI Home) brings a smarter living experience to your doorstep.
            Explore GingerDoorBell for advanced security with AI and IoT. Keep
            an eye on your baby's activities using GingerSecurity. Optimize
            electricity consumption effortlessly with GingerSenergy. Elevate
            your home with AIH – where security, childcare, and energy
            efficiency converge seamlessly. Welcome to the future of smart
            living.`}
          </div>
        </div>
      </div>

      <div className=" flex flex-col gap-40 mt-20 lg:mt-40">
        {products[search.get("type") as PType].map((val, ind) => (
          <div
            key={ind}
            className=" grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-0"
          >
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
                    <img
                      src={val?.icon}
                      className=" object-cover"
                      alt="alt-img"
                    />
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
                <ul className=" list-disc list-inside mt-4 ml-4">
                  {val?.feature
                    ?.split("- ")
                    .slice(1, val?.feature?.split("- ").length)
                    .map((val, ind) => (
                      <li key={ind}>{val}</li>
                    ))}
                </ul>
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
