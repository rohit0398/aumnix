"use client";
/* eslint-disable @next/next/no-img-element */

import { Button, CustomLink, ProductTypeChecklist } from "@/atom";
import { ContactUs } from "@/molecules/contactUs";
import { useSearchParams } from "next/navigation";

type PType = "ai_homes" | "ai_agri" | "ai_smarc" | "ai_hawk" | "ai_retail";
export default function Products() {
  const search = useSearchParams();

  const products = {
    ai_homes: {
      title: "Unleash the Future of Home Intelligence",
      text: "AIH (AI Home) brings a smarter living experience to your doorstep. Explore GingerDoorBell for advanced security with AI and IoT. Keep an eye on your baby's activities using GingerSecurity. Optimize electricity consumption effortlessly with GingerSenergy. Elevate your home with AIH – where security, childcare, and energy efficiency converge seamlessly. Welcome to the future of smart living.",
      banner: "/productBanner1.png",
      product: [
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
    },
    ai_agri: {
      title: "Ease Your Farming with AI",
      text: "AIA (AI Agri) redefines farming excellence. Agri Monitor revolutionizes season performance analysis, while Agri Flow ensures an efficient agricultural supply chain. Elevate your farming with AIA – where monitoring, analysis, and supply chain meet seamlessly for success in agriculture's future.",
      banner: "/productBanner2.png",
      product: [
        {
          title: "Agri Auto",
          description:
            "AgriAuto introduces layered automation for increased productivity in agriculture.",
          img: "/productImg1.png",
          icon: "/auto.png",
          feature: `- Layered Automation
          - Precision Farming
          - Irrigation Control`,
        },
        {
          title: "Agri Flow",
          description:
            "AgriFlow manages the e-commerce aspect of agricultural products, creating an efficient supply chain.",
          img: "/productImg1.png",
          icon: "/flow.png",
          feature: `- E-commerce Integration
          - Efficient Supply Chain Management
          - Real-time Inventory Tracking`,
        },
        {
          title: "Agri Monitor",
          description:
            "AgriMon provides a comprehensive platform to monitor and analyze the complete performance of the agricultural season.",
          img: "/productImg1.png",
          icon: "/monitor.png",
          feature: `- Seasonal Performance Monitoring
          - Crop Analysis
          - Weather Integration`,
        },
      ],
    },
    ai_smarc: {
      title: "Smart City with AI",
      text: "AI SMarc redefines smart cities. Smarc Gateway handles diverse protocols for seamless IoT connectivity. Smar cPMS monitors real-time electricity, ensuring efficient energy management citywide. Elevate urban living with AI SMarc – where connectivity and energy efficiency unite for a brighter future.",
      banner: "/productBanner3.png",
      product: [
        {
          title: "Smarc Gateway",
          description:
            "SmarcGW is a smart city data gateway handling multiple protocols and serving as a gateway for IoT devices across the city.",
          img: "/productImg1.png",
          icon: "/gateway.png",
          feature: `- Data Gateway for IoT Devices
          - Protocol Handling`,
        },
        {
          title: "Smarc Power Management",
          description:
            "SmarcPMS monitors real-time electricity usage, contributing to efficient energy management in the city.",
          img: "/productImg1.png",
          icon: "/powerManage.png",
          feature: `- Real-time Electricity Monitoring
          - Consumption Optimization`,
        },
        {
          title: "Smarc Security",
          description:
            "SmarcKAWACH provides city-level surveillance using cameras and UAVs, ensuring enhanced security.",
          img: "/productImg1.png",
          icon: "/smarcSecurity.png",
          feature: `- City-level Surveillance
          - CCTV Integration
          - UAV-based Monitoring`,
        },
        {
          title: "Smarc Waste Management",
          description:
            "SmarcWMS revolutionizes waste management in smart cities with AI-controlled systems from collection to recycling.",
          img: "/productImg1.png",
          icon: "/waste.png",
          feature: `- Waste Management Automation
          - SCM for Waste Materials
          - Recycling Management`,
        },
      ],
    },
    ai_hawk: {
      title: "Let’s Fly with Experience of AI",
      text: "AI Hawk is a groundbreaking autonomous UAV, excelling in patrolling and geo-surveying. With cutting-edge capabilities, it redefines unmanned aerial vehicles, unlocking new possibilities in the skies. Elevate your perspective with the precision of AI Hawk.",
      banner: "/productBanner4.png",
      product: [
        {
          title: "AI based Unmaned Areial Vehchile",
          description:
            " AI Hawk:AI Hawk is an autonomous UAV designed for various use cases, including patrolling and geo-surveying.",
          img: "/productImg1.png",
          icon: "/uav.png",
          feature: `- Autonomous Operation
          - Patrolling Capabilities
          - Geo-surveying`,
        },
      ],
    },
    ai_retail: {
      title: "Automate your Retail with AI",
      text: "AI Retail redefines the retail experience. Air SCM customizes AI for seamless supply chain management, exclusively for the retail sector. Dive into precision with Air IN, as it transforms inventory tracking, ensuring efficiency and accuracy that sets a new standard in retail operations. Elevate your retail game with AI Retail.",
      banner: "/productBanner5.png",
      product: [
        {
          title: "AI Inventory Management",
          description:
            "AirIN revolutionizes inventory management in the retail sector, leveraging AI for efficient and accurate tracking.",
          img: "/productImg1.png",
          icon: "/inventory.png",
          feature: `- Inventory Management
          - Real-time Tracking
          - Automated Replenishment`,
        },
        {
          title: "AI SCM",
          description:
            "AirSCM introduces AI-based Supply Chain Management (SCM) tailored for the retail sector.",
          img: "/productImg1.png",
          icon: "/scm.png",
          feature: `- AI-based Supply Chain Management
          - Inventory Optimization
          - Demand Forecasting`,
        },
      ],
    },
  };

  const type = search.get("type") as PType;
  return (
    <div className=" container">
      <div className=" absolute top-0 left-0 right-0 -z-10">
        <img
          src={products[type]?.banner}
          className=" object-cover w-full min-h-[60vh] lg:min-h-fit aspect-[1/.48]"
          alt="bannerImg"
        />
      </div>

      <div className=" w-full min-h-[50vh] lg:min-h-fit aspect-[1/.42] flex flex-col justify-between gap-10 py-12 lg:py-8 xl:py-12">
        <ProductTypeChecklist />
        <div className=" flex flex-col gap-6 xl:gap-10">
          <div className=" font-bold text-xl sm:text-3xl lg:text-4xl xl:text-6xl">
            {products[type]?.title}
          </div>
          <div className=" font-normal text-xs sm:text-base xl:text-2xl max-w-full lg:max-w-[75%] line-clamp-5">
            {products[type]?.text}
          </div>
        </div>
      </div>

      <div className=" flex flex-col gap-40 mt-20 lg:mt-40">
        {products[type]?.product.map((val, ind) => (
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
                <CustomLink href="#lets-talk">
                  <Button title="Let’s Talk" variant="out-lined" />
                </CustomLink>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className=" my-28" id="lets-talk">
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
