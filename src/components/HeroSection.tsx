import React from "react";
import Image from "next/image";
import { CgShoppingCart } from "react-icons/cg";
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




const HeroSection = async () => {
  const data: IProduct[] = await getProductData();
  return (
    <header className="header md:pr-0 md:pl-0 pl-5 lg:m-[6rem] md:m-[6rem] m-[5px] pr-5 relative flex justify-between gap-[4rem]">
      <div className="header-left-side lg:text-left md:text-left text-center  flex flex-col justify-between pt-[6rem] pb-[6rem] flex-1">
        <div className="header-content flex flex-col justify-center gap-10">
          <span className="bg-indigo-100 h-10 w-32 rounded-md flex items-center justify-center text-indigo-700 font-semibold">
            Sale 70%
          </span>
          <h1 className="font-bold lg:text-[3.5rem] md:text-[3.5rem] text-[3rem] text-gray-900 leading-[55px] tracking-wide text-left">
            An Industrial Take on Streetwear
          </h1>
          <p className="font-normal text-base leading-6 text-gray-700 lg:w-[70%] md:w-[70%] w-full">
            Anyone can beat you but no one can beat your outfit as long as you
            wear Dine outfits.
          </p>
          <Link href="/products">
            <button
              className="btn transition-all lg:bg-transparent md:bg-transparent bg-[#212121] lg:text-[#937d72] md:text-[#937d72] text-white lg:rounded-xl md:rounded-xl rounded-3xl hover:rounded-3xl lg:shadow-lg md:shadow-lg shadow-2xl hover:shadow-[#a19996] hover:shadow-2xl hover:bg-[#212121] hover:text-white text-[1.1rem] lg:w-[40%] md:w-[40%] w-full"
              type="button"
            >
              <CgShoppingCart size={40} />
              Start Shopping
            </button>
          </Link>
        </div>
        <div className="header-featured mt-10 grid gap-[1rem] grid-cols-4">
          <Image
            src={urlForImage(data[11].image).url()}
            className="w-[80px] h-[35px]"
            width={100}
            height={35}
            alt="img"
          />
          <Image
            src={urlForImage(data[5].image).url()}
            className="w-[80px] h-[35px]"
            width={100}
            height={35}
            alt="img"
          />
          <Image
            src={urlForImage(data[6].image).url()}
            className="w-[80px] h-[35px]"
            width={100}
            height={35}
            alt="img"
          />
        </div>
      </div>
      <div className="header-right-side flex flex-1 pt-[3rem] pb-[3rem] ">
        <div className="header-circle bg-[#ffece3] overflow-hidden lg:h-[600px] md:h-[600px] h-[0] lg:w-[600px] md:w-[600px] w-[0px] rounded-full">
          <Image
            className="header-img absolute pt-[5rem] -top-5 lg:h-[650px] md:h-[650px] h-[0] lg:w-[650px]  md:w-[650px] w-[0px] rounded-full"
            // src={mainImg}
            src={urlForImage(data[2].image).url()}
            width={650}
            height={650}
            alt="header image"
          />
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
