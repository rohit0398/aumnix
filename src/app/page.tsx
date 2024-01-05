/* eslint-disable @next/next/no-img-element */
import { Button, CustomLink } from "@/atom";
import { AnimateContainer } from "@/molecules/animateContainer";
import { ContactUs } from "@/molecules/contactUs";
import { HomePageBanners } from "@/molecules/homepageBanners";
import { UseCaseBanner } from "@/molecules/useCasesBanner";

export default function Home() {
  const products = [
    {
      img: "/productHome.png",
      text: "AIH (AI Home) brings a smarter living experience to your doorstep. Explore GingerDoorBell for advanced security with AI and IoT. Keep an eye on your baby's activities using GingerSecurity. Optimize electricity consumption effortlessly with GingerSenergy. Elevate your home with AIH – where security, childcare, and energy efficiency converge seamlessly. Welcome to the future of smart living.",
    },
    {
      img: "/productAgri.png",
      text: "AIA (AI Agri) redefines farming excellence. Agri Monitor revolutionizes season performance analysis, while Agri Flow ensures an efficient agricultural supply chain. Elevate your farming with AIA – where monitoring, analysis, and supply chain meet seamlessly for success in agriculture's future.",
    },
    {
      img: "/productSmarc.png",
      text: "AI SMarc redefines smart cities. Smarc Gateway handles diverse protocols for seamless IoT connectivity. Smar cPMS monitors real-time electricity, ensuring efficient energy management citywide. Elevate urban living with AI SMarc – where connectivity and energy efficiency unite for a brighter future.",
    },
    {
      img: "/productHawk.png",
      text: "AI Hawk is a groundbreaking autonomous UAV, excelling in patrolling and geo-surveying. With cutting-edge capabilities, it redefines unmanned aerial vehicles, unlocking new possibilities in the skies. Elevate your perspective with the precision of AI Hawk.",
    },
    {
      img: "/productRetail.png",
      text: "AI Retail redefines the retail experience. Air SCM customizes AI for seamless supply chain management, exclusively for the retail sector. Dive into precision with Air IN, as it transforms inventory tracking, ensuring efficiency and accuracy that sets a new standard in retail operations. Elevate your retail game with AI Retail.",
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

      <UseCaseBanner />

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
