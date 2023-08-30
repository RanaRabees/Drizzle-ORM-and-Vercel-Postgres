import React from "react";
import Image from "next/image";
import logo from "../../public/logo.png";
import { GrFacebookOption, GrTwitter, GrLinkedinOption } from "react-icons/gr";
import Link from "next/link";
import { urlForImage } from "../../sanity/lib/image";
import { Image as IImage } from "sanity";
import { getProductData } from "../app/getProductData";

interface IProduct {
  _id: string,
  price: number,
  title: string,
  description: string,
  image: IImage,
  category: {
    name: string
  }
}

const Myfooter = async () => {
  const data: IProduct[] = await getProductData();
  return (
    <footer>
      <div className="footer lg:pl-24 md:pl-24 pl-5 bg-white grid grid-cols-2 md:grid-cols-4">
        <div className="logo flex flex-wrap flex-col justify-between w-4/5">
          <Image src={urlForImage(data[13].image).url()} width={180} height={30} alt="logo" />
          <p className="font-normal w-[300px] text-base lg:pb-10 md:pb-10 pb-0 leading-5 text-gray-700">
            Small, artisan label that offers a thoughtfully curated collection
            of high quality everyday essentials made.
          </p>
          <div className="icon-container flex gap-4">
            <div className="bg-gray-200 cursor-pointer pt-[10px] pb-[10px] pr-[12px] pl-[12px] rounded-[10px]">
              <Link href="https://twitter.com/RanaRabees">
                <GrTwitter size={20} />
              </Link>
            </div>
            <div className="bg-gray-200 cursor-pointer pt-[10px] pb-[10px] pr-[12px] pl-[12px] rounded-[10px]">
              <Link href="https://www.facebook.com/profile.php?id=100088975870807">
                <GrFacebookOption size={20} />
              </Link>
            </div>
            <div className="bg-gray-200 cursor-pointer pt-[10px] pb-[10px] pr-[12px] pl-[12px] rounded-[10px]">
              <Link href="https://pk.linkedin.com/in/ranarabees">
                <GrLinkedinOption size={20} />
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:visible md:visible invisible footer-links lg:ml-28 md:ml-28 ml-0">
          <h3 className="mt-10 font-bold text-xl leading-5 tracking-widest text-gray-700">
            Dine - Market
          </h3>
          <ul>
            <li className="mt-4 font-normal text-base leading-5 text-gray-700">
              About
            </li>
            <li className="mt-4 font-normal text-base leading-5 text-gray-700">
              Terms of Use
            </li>
            <li className="mt-4 font-normal text-base leading-5 text-gray-700">
              Privacy Policy
            </li>
            <li className="mt-4 font-normal text-base leading-5 text-gray-700">
              How it Works
            </li>
            <li className="mt-4 font-normal text-base leading-5 text-gray-700">
              Contact Us
            </li>
          </ul>
        </div>
        <div className="lg:visible md:visible invisible footer-links lg:ml-16 md:ml-16 ml-0">
          <h3 className="mt-10 font-bold text-xl leading-5 tracking-widest text-gray-700">
            Support
          </h3>
          <ul>
            <li className="mt-4 font-normal text-base leading-5 text-gray-700">
              Support Carrer
            </li>
            <li className="mt-4 font-normal text-base leading-5 text-gray-700">
              24h Service
            </li>
            <li className="mt-4 font-normal text-base leading-5 text-gray-700">
              Quick Chat
            </li>
          </ul>
        </div>
        <div className="lg:visible md:visible invisible footer-links">
          <h3 className="mt-10 font-bold text-xl leading-5 tracking-widest text-gray-700">
            Contact
          </h3>
          <ul>
            <li className="mt-4 font-normal text-base leading-5 text-gray-700">
              Whatsapp
            </li>
            <li className="mt-4 font-normal text-base leading-5 text-gray-700">
              Support 24h
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright lg:mt-32 md:mt-32 mt-0 grid border-[1px] border-t-[#666666] grid-cols-3">
        <p className="m-[1.5rem] lg:ml-20 md:ml-20 ml-5">
          Copyright © 2022{" "}
          <span className="font-[700px] text-[16px] leading-4 text-[#212121]">
            {" "}
            Rabees
          </span>
        </p>
        <p className="m-[1.5rem] lg:ml-20 md:ml-20 ml-5">
          Design by...
          <span className="font-[700px] text-[16px] leading-4 text-[#212121]">
            {" "}
            Rana Rabees
          </span>
        </p>
        <p className="m-[1.5rem] lg:ml-20 md:ml-20 ml-5">
          Code by...
          <span className="font-[700px] text-[16px] leading-4 text-[#212121]">
            {" "}
            Rana Rabees
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Myfooter;
