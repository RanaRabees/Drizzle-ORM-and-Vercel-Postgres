import React from "react";
import Image from "next/image";
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

const Promotions = async () => {
  const data: IProduct[] = await getProductData();

  return (
    <section className="pro-container md:pr-0 pr-5 md:pl-0 pl-5 lg:mt-0 md:mt-0 mt-[100px] lg:m-[6rem] md:m-[6rem] m-0">
      <div className="subtitle text-center flex flex-col gap-4 mb-8">
        <span className="font-bold text-md leading-4 text-center tracking-widest text-blue-600">
          PROMOTIONS
        </span>
        <h2 className="font-bold text-3xl leading-10 text-center text-gray-900 tracking-widest">
          Our Promotions Events
        </h2>
      </div>
      <div className="flex flex-wrap justify-between gap-8">
        <div className="flex-1 flex lg:flex-nowrap md:flex-nowrap flex-wrap flex-col gap-4">
          <div className="bg-[#d6d6d8] w-full flex lg:flex-nowrap md:flex-nowrap flex-wrap justify-between items-center tracking-wider text-gray-900 lg:pl-[2rem] md:pl-[2rem] pl-0">
            <div className="content lg:ml-0 md:ml-0 ml-10 lg:mt-0 md:mt-0 mt-10 lg:mb-0 md:mb-0 mb-5">
              <h3 className="font-bold text-3xl leading-9">
                GET UP TO{" "}
                <span className="font-extrabold text-4xl leading-10">60%</span>
              </h3>
              <p className="font-normal text-lg leading-6 tracking-wide">
                For the summer season
              </p>
            </div>
            <Image
              className="h-48 w-[300px] lg:pr-5 md:pr-5 pr-0"
              src={urlForImage(data[3].image).url()}
              width={300}
              height={0}
              alt="event"
            />
          </div>
          <div className="bg-gray-900 text-white flex lg:flex-nowrap md:flex-nowrap flex-wrap flex-col justify-center items-center pt-[3rem] pb-[2rem] lg:pr-[2rem] lg:pl-[2rem]">
            <h3 className="font-extrabold text-4xl mb-4 leading-10 tracking-tighter">
              GET 30% Off
            </h3>
            <p className="font-normal text-sm leading-4 mb-4 tracking-tighter">
              USE PROMO CODE
            </p>
            <button className="font-bold text-xl leading-10 text-white bg-gray-800 mb-4 mt-1 rounded-lg tracking-widest border-none lg:pr-12 md:pr-12 pr-6 lg:pl-12 md:pl-12 pl-6">
              DINEWEEKENDSALE
            </button>
          </div>
        </div>
        <div className="flex lg:flex-nowrap md:flex-nowrap flex-wrap justify-between items-center lg:gap-10 md:gap-10 gap-0 flex-1">
          <div className="tracking-wide bg-[#efe1c7] pt-[3rem] flex flex-col justify-between items-center lg:w-[280px] md:w-[280px] w-full">
            <div className="details">
              <p className="font-normal text-md leading-6 tracking-wide">
                Raglan SweatShirt
              </p>
              <div className="price">
                <span className="relative font-medium line-through">
                  $100.00
                </span>
                <span className="font-bold text-lg leading-6 ml-2">$75.00</span>
              </div>
            </div>
            <Image
              className="pt-4 w-[280px] h-[340px]"
              src={urlForImage(data[8].image).url()}
              width={280}
              height={340}
              alt="event"
            />
          </div>
          <div className="lg:mt-0 md:mt-0 mt-[2rem] tracking-wide bg-[#d6d6d8] pt-[3rem] flex flex-col justify-between items-center lg:w-[280px] md:w-[280px] w-full">
            <div className="details">
              <p className="font-normal text-md leading-6 tracking-wide">
                Flex Push Button Bomber
              </p>
              <div className="price">
                <span className="relative font-medium line-through">
                  $225.00
                </span>
                <span className="font-bold text-lg leading-6 ml-2">
                  $190.00
                </span>
              </div>
            </div>
            <Image
              className="pt-4 w-[280px] h-[340px]"
              src={urlForImage(data[1].image).url()}
              alt="event"
              width={280}
              height={340}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotions;
