"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { Search, ShoppingCart } from "lucide-react";


export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <header className="w-full mx-auto px-4 sm:px-20 fixed top-0 z-50 shadow lg:bg-white md:bg-white bg-[#fcf4f4] dark:bg-stone-900 dark:border-stone-600">
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link href="/">
              <div className="container flex items-center space-x-2">
                <h2 className="text-2xl hover:cursor-pointer font-extrabold">
                  O - Dine - Market
                </h2>
              </div>
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
              }`}
          >
            <div className="items-center text-center justify-center space-y-10 lg:pt-0 md:pt-0 pt-32 lg:pb-0 md:pb-0 pb-40 md:flex md:space-x-6 md:space-y-0">
              <Link
                href="/male"
                className={
                  "block lg:inline-block hover:cursor-pointer text-neutral-900 hover:text-neutral-500 dark:text-neutral-100"
                }
                onClick={() => setNavbar(!navbar)}
              >
                Male
              </Link>
              <Link
                href="/female"
                className={
                  "block lg:inline-block hover:cursor-pointer text-neutral-900 hover:text-neutral-500 dark:text-neutral-100"
                }
                onClick={() => setNavbar(!navbar)}
              >
                Female
              </Link>
              <Link
                href="/kids"
                className={
                  "block lg:inline-block hover:cursor-pointer text-neutral-900 hover:text-neutral-500 dark:text-neutral-100"
                }
                onClick={() => setNavbar(!navbar)}
              >
                Kids
              </Link>
              <Link
                href="/products"
                className={
                  "lg:pr-24 md:pr-0 pr-0 block lg:inline-block hover:cursor-pointer text-neutral-900 hover:text-neutral-500 dark:text-neutral-100"
                }
                onClick={() => setNavbar(!navbar)}
              >
                All Products
              </Link>
              <div className="flex pl-5">
                <Search color="green" className="pr-1 rounded-l" />{" "}
                <input
                  type="text"
                  placeholder="What you are looking for"
                  className="text-center rounded-r"
                ></input>
              </div>
              <Link
                href="/cart"
                className={"flex justify-center"}
                onClick={() => setNavbar(!navbar)}
              >
                <div className="p-3 lg:w-auto justify-center shadow-black hover:shadow-2xl md:w-auto w-[200px] rounded-full lg:flex md:flex flex bg-gray-300">
                  <ShoppingCart color="blue" />
                  <span className="lg:absolute md:absolute top-1 right-20 h-6 w-6 text-center rounded-full bg-pink-400 text-white">
                    0
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
