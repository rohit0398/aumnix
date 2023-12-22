"use client";

import { CustomLink } from "@/atom";
import { navs, productNames } from "@/utils/constants";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";

export function Footer() {
  const { push } = useRouter();
  return (
    <div className=" container mb-16">
      <div className=" grid grid-cols-4 gap-10">
        <div
          onClick={() => push("/")}
          className=" mx-auto flex items-center gap-4 cursor-pointer"
        >
          <div className=" max-w-14">
            <Image
              src="/logo.svg"
              alt="Logo"
              className=" object-contain"
              priority
              width={56}
              height={48}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
          <div className=" font-semibold text-4xl  ">Aumnix</div>
        </div>
        <div className=" flex flex-col gap-6 justify-center items-center">
          <div className=" text-2xl font-bold text-app-cyan inline-block">
            Aumnix
          </div>
          {navs.map((val, ind) => (
            <CustomLink
              key={ind}
              href={
                val === "Home" ? "/" : val?.toLowerCase()?.replaceAll(" ", "_")
              }
              text={val}
              className={`text-white hover:scale-[1.05] text-xl font-medium`}
            ></CustomLink>
          ))}
        </div>
        <div className="flex flex-col gap-6 justify-center items-center">
          <div className=" text-2xl font-bold text-app-cyan inline-block">
            Products
          </div>
          {productNames.map((val, ind) => (
            <CustomLink
              key={ind}
              href={
                val === "Home" ? "/" : val?.toLowerCase()?.replaceAll(" ", "_")
              }
              text={val}
              className={`text-white hover:scale-[1.05] text-xl font-medium`}
            ></CustomLink>
          ))}
        </div>
        <div className="flex flex-col gap-6">
          <div className=" text-2xl font-bold text-app-cyan inline-block">
            Contact
          </div>
          <div className=" text-xl font-medium">
            Kendriya Vihar 2 , Sector 82, Pocket 5, A-19 Uttar Pradesh, Noida -
            201304 India
          </div>
          <div>
            <EnvelopeIcon className="h-6 w-6 inline-block" />
            <CustomLink
              href={"mailto:hello@aumnix.co.in"}
              text={"hello@aumnix.co.in"}
              className={`text-white hover:scale-[1.05] text-xl font-medium`}
            ></CustomLink>
          </div>
          <div>
            <PhoneIcon className="h-6 w-6 inline-block" />
            <CustomLink
              href={"tel:+91-9876543219"}
              text={"+91-9876543219"}
              className={`text-white hover:scale-[1.05] text-xl font-medium`}
            ></CustomLink>
          </div>
        </div>
      </div>
    </div>
  );
}
