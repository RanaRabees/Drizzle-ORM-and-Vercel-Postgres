import React from "react";
import Image from "next/image";
import img from "../../public/feature.png";
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

const Unique = async () => {
  const data: IProduct[] = await getProductData();
  return (
    <section className="features-section">
      <div className="title">
        <h1>
          Unique and
          <br /> Authentic Vintage
          <br /> Designer Jewellery
        </h1>
      </div>

      <div className="content">
        <div className="left">
          <div className="feature-background">Different from others</div>
          <div>
            <h3>Using Good Quality Materials</h3>
            <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
          </div>
          <div>
            <h3>100% Handmade Products</h3>
            <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
          </div>
          <div>
            <h3>Modern Fashion Design</h3>
            <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
          </div>
          <div>
            <h3>Discount for Bulk Orders</h3>
            <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
          </div>
        </div>

        <div className="right">
          <Image src={urlForImage(data[12].image).url()} width={300} height={350} alt="img" />
          <div>
            <p>
              This piece is ethically crafted in our small family-owned workshop
              in Peru with unmatched attention to detail and care. The Natural
              color is the actual natural color of the fiber, undyed and 100%
              traceable.
            </p>
            <Link href="/products">
              <button
                className="text-center tracking-wider p-[15px] transition-all lg:bg-transparent md:bg-transparent bg-[#212121] lg:text-[#b92020] md:text-[#b92020] text-white lg:rounded-xl md:rounded-xl rounded-3xl hover:rounded-3xl lg:shadow-lg md:shadow-lg shadow-2xl hover:shadow-[#a19996] hover:shadow-2xl hover:bg-[#212121] hover:text-white text-[0.9rem] w-full"
                type="button"
              >
                See All Products
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Unique;
