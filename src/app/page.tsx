/* eslint-disable @next/next/no-img-element */
import { Button, CustomLink } from "@/atom";
import {
  AnimateButtonContainer,
  AnimateContainer,
} from "@/molecules/animateContainer";
import { ContactUs } from "@/molecules/contactUs";
import { HomePageBanners } from "@/molecules/homepageBanners";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

export default function Home() {
  const products = [
    {
      img: "/smartAgri.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
    {
      img: "/smartAgri.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
    {
      img: "/smartAgri.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
    {
      img: "/smartAgri.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
    {
      img: "/smartAgri.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
  ];

  const useCases = [
    {
      img: "/droneMonitor.png",
      title: "Drone Intellect",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  const clients = [
    "/client1.png",
    "/client2.png",
    "/client3.png",
    "/client4.png",
    "/client5.png",
    "/client6.png",
  ];

  return (
    <main className=" container min-h-screen">
      <HomePageBanners />

      <div className=" mt-28">
        <div className=" text-xs lg:text-xl text-app-cyan font-semibold">
          Innovate with Intelligent Devices
        </div>
        <div className=" text-4xl lg:text-6xl mt-2">Products</div>

        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-12 mt-6">
          {products.map((val, ind) => (
            <div
              key={ind}
              className={` ${
                ind % 2 !== 0 ? "lg:translate-y-24" : ""
              } relative flex flex-col p-6 lg:p-8 min-h-40 [background:linear-gradient(90.3deg,_rgba(255,_255,_255,_0.03),_rgba(255,_255,_255,_0.03))] [backdrop-filter:blur(200px)] box-border rounded-3xl border-2 border-solid border-gray-600`}
            >
              <div className="absolute top-1/4 bottom-1/4 left-1/4 right-1/4 rounded-full [background:linear-gradient(266.46deg,_rgba(234,_237,_255,_0.3),_rgba(255,_255,_255,_0.18)_45.9%),_linear-gradient(91.9deg,_rgba(100,_77,_255,_0.4),_rgba(114,_149,_255,_0.4)_21.12%,_rgba(137,_217,_255,_0.4)_45.61%,_rgba(208,_201,_240,_0.4)_64.06%,_rgba(84,_91,_239,_0.4))] blur-[5rem] opacity-60"></div>
              <div className=" max-w-80">
                <img
                  src={val?.img}
                  className=" object-contain"
                  alt={`product-img-${ind}`}
                />
              </div>
              <AnimateContainer>
                <div className=" mt-5 w-11/12 text-xs lg:text-base">
                  {val.text}
                </div>
              </AnimateContainer>

              <div className=" ml-auto mt-6 lg:mt-10">
                <CustomLink href="/products?type=ai_homes">
                  <Button title="Read More" variant="out-lined" />
                </CustomLink>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AnimateContainer>
        <div className=" mt-28" id="use_case">
          <div className=" text-xs lg:text-xl text-app-cyan font-semibold">
            Real-world Magic
          </div>
          <div className=" text-4xl lg:text-6xl mt-2">Use Cases</div>

          <div className=" relative mt-14 min-h-80 rounded-3xl [background:linear-gradient(90.3deg,_rgba(255,_255,_255,_0.04),_rgba(255,_255,_255,_0.04))] [backdrop-filter:blur(200px)] box-border  border-2 border-solid border-gray-500">
            <div className="absolute inset-0 rounded-3xl [background:linear-gradient(175.61deg,_rgba(37,_43,_61,_0),_rgba(3,_253,_187,_0.38))] blur-1xl"></div>
            <div className=" absolute z-10 -top-12 lg:-top-5 right-0 lg:right-20 flex gap-2">
              <div className=" bg-white/70 hover:bg-white p-2 rounded-full cursor-pointer">
                <ChevronLeftIcon className="h-6 w-6 text-black" />
              </div>
              <div className=" bg-white/70 hover:bg-white p-2 rounded-full cursor-pointer">
                <ChevronRightIcon className="h-6 w-6 text-black" />
              </div>
            </div>
            <div className=" flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12 shrink-0">
              <div className=" p-6 lg:p-12">
                <div className=" text-xl lg:text-[2.6rem] font-medium">
                  {useCases[0].title}
                </div>

                <AnimateContainer>
                  <div className=" text-xs lg:text-base font-normal mt-6 lg:mt-12">
                    {useCases[0].text}
                  </div>
                </AnimateContainer>
              </div>
              <div className=" shrink-0 flex justify-end relative">
                <img
                  src={useCases[0].img}
                  className=" w-11/12 object-cover scale-110 translate-y-6 translate-x-4"
                  alt={`usecase-img`}
                />
              </div>
            </div>
          </div>
        </div>
      </AnimateContainer>

      <div className=" mt-48 mb-32" id="clients">
        <div className=" text-xs lg:text-xl text-app-cyan font-semibold">
          Trusted by Brands
        </div>
        <div className=" text-4xl lg:text-6xl mt-2">Our Clients</div>

        <div className=" mt-8 w-full overflow-x-auto flex gap-12 items-center scroll-thin">
          {clients.map((val, ind) => (
            <div key={ind} className=" max-w-xs min-w-44">
              <img src={val} className=" object-contain " alt={`partner-img`} />
            </div>
          ))}
        </div>
      </div>

      <div className=" mb-28" id="lets-talk">
        <div className=" text-xs lg:text-xl text-app-cyan font-semibold">
          Let’s Talk get more Details
        </div>
        <div className=" text-4xl lg:text-6xl mt-2">Let’s Discuss</div>

        <div className=" relative mt-12 p-6 lg:p-8 rounded-3xl [background:linear-gradient(90.3deg,_rgba(255,_255,_255,_0.04),_rgba(255,_255,_255,_0.03))] [backdrop-filter:blur(200px)] box-border border-2 border-solid border-gray-500">
          <div className="absolute -z-10 top-1/4 bottom-0 left-1/4 right-1/4 rounded-full [background:linear-gradient(266.46deg,_rgba(234,_237,_255,_0.3),_rgba(255,_255,_255,_0.18)_45.9%),_linear-gradient(91.9deg,_rgba(100,_77,_255,_0.4),_rgba(114,_149,_255,_0.4)_21.12%,_rgba(137,_217,_255,_0.4)_45.61%,_rgba(208,_201,_240,_0.4)_64.06%,_rgba(84,_91,_239,_0.4))] blur-[5rem] opacity-40"></div>
          <ContactUs />
        </div>
      </div>
    </main>
  );
}
