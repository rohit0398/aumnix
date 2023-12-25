"use client";

import { navs } from "@/utils/constants";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Button, CustomLink } from "../atom";

export function Header() {
  const pathName = usePathname();
  const { push } = useRouter();

  return (
    <div className=" container sticky top-0 z-50">
      <div className=" flex justify-between items-center py-9 text-white">
        <div
          onClick={() => push("/")}
          className="flex items-center gap-4 cursor-pointer"
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
        <div className=" flex gap-10 py-8 px-14 rounded-full [background:linear-gradient(268.91deg,_rgba(255,_255,_255,_0.1),_rgba(126,_125,_125,_0.19))] [backdrop-filter:blur(200px)] box-border border border-solid border-gray-500">
          {navs.map((val, ind) => (
            <CustomLink
              key={ind}
              href={
                val === "Home" ? "/" : val?.toLowerCase()?.replaceAll(" ", "_")
              }
              text={val}
              className={`${
                (pathName === "/" && val === "Home") ||
                pathName === "/" + val?.toLowerCase()?.replaceAll(" ", "_")
                  ? "text-white"
                  : "text-white/20 hover:text-white/70 hover:scale-[1.05]"
              } text-xl font-semibold text-center`}
            ></CustomLink>
          ))}
        </div>
        <div>
          <Button title="Talk to us" />
        </div>
      </div>
    </div>
  );
}
