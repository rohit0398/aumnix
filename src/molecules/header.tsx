/* eslint-disable react-hooks/exhaustive-deps */

"use client";

import { useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { Button, CustomLink } from "@/atom";
import { navs } from "@/utils/constants";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function Header() {
  const { push } = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const [hashValue, setHashValue] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Get the hash value directly from the window.location
    const hashValue = window.location.hash.substring(1);
    if (hashValue) setHashValue(`/#${hashValue}`);
    else setHashValue(pathName);
  }, [searchParams]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  // ${
  //   scrolled
  //     ? "[background:linear-gradient(120.38deg,_#3b4563,_#151924)] rounded-b-lg"
  //     : "bg-transparent"
  // }
  return (
    <Disclosure
      as="nav"
      className={` container sticky top-0 z-50 transition duration-500 `}
    >
      {({ open }) => (
        <>
          <div className=" py-4 lg:mt-9">
            <div className="relative flex items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 lg:flex-none items-center justify-center lg:items-stretch">
                <div
                  onClick={() => push("/")}
                  className={`flex gap-4 flex-shrink-0 items-center cursor-pointer ${
                    scrolled ? "opacity-0" : "opacity-100"
                  } transition-opacity duration-300`}
                >
                  <div className=" lg:max-w-10 xl:max-w-14">
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
                  <div className=" font-semibold text-xl xl:text-4xl">
                    Aumnix
                  </div>
                </div>
              </div>
              <div className="hidden lg:ml-6 lg:block">
                <div className=" flex gap-10 lg:gap-4 xl:gap-10 py-8 lg:px-6 xl:px-14 rounded-full [background:linear-gradient(268.91deg,_rgba(255,_255,_255,_0.1),_rgba(126,_125,_125,_0.19))] [backdrop-filter:blur(200px)] box-border border border-solid border-gray-500">
                  {navs.map((val, ind) => (
                    <CustomLink
                      key={ind}
                      href={
                        val.link === "/products"
                          ? `${val.link}?type=ai_homes`
                          : val.link
                      }
                      text={val.name}
                      className={`${
                        hashValue === val.link
                          ? "text-white"
                          : "text-white/20 hover:text-white/70 hover:scale-[1.05]"
                      } text-xl font-semibold text-center line-clamp-1`}
                    ></CustomLink>
                  ))}
                </div>
              </div>
              <div>
                <Button
                  title="Talk to us"
                  onClick={() => push("/#lets-talk")}
                />
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden absolute top-16 left-4 right-4 z-50 rounded-lg flex justify-start [background:linear-gradient(270.38deg,_#3b4563,_#151924)]  box-border">
            <div className="space-y-1 px-4 py-8 text-left">
              {navs.map((val) => (
                <Disclosure.Button
                  key={val.name}
                  as="a"
                  href={val.link}
                  // onClick={() => setSelected(val.href)}
                  className={`${
                    hashValue === val.link
                      ? "text-white"
                      : "text-white/20 hover:text-white/70 hover:scale-[1.05]"
                  } text-xl font-semibold block text-left`}
                  aria-current={val ? "page" : undefined}
                >
                  {val.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
