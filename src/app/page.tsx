"use client"
import Image from "next/image";
import { client } from "@/lib/sanityClient";
import { Image as IImage } from "sanity";
import { urlForImage } from "../../sanity/lib/image";
import StripeCheckOutButton from "./Checkout";
import HeroSection from "@/components/HeroSection";
import Promotions from "@/components/Promotions";
import ProductsSlider from "@/components/ProductsSlider";
import Unique from "@/components/Unique";
import Subscribe from "@/components/Subscribe";
import { getProductData } from "./getProductData";

const handleAddToCart = async () => {
  const res = await fetch('api/cart', {
    method: 'POST',
    body: JSON.stringify({
      product_id: "again check",
    })
  })

  const result = await res.json();
  console.log(result)
}


const handleDeleteToCart = async () => {
  // const user_id = "0b0ab240-c252-4255-9f72-36c0b06500ca";
  const res = await fetch('api/cart', {
    method: 'DELETE',
    body: JSON.stringify({
      product_id: "a46er",
    })
  })

  const result = await res.json();
  console.log(result)
}



// export async function getProductData() {
//   const res = await client.fetch(`*[_type == 'product']{
//     title,
//     description,
//     _id,
//     price,
//     image,
//     category -> {
//       name
//     }
//   }`);
//   return res;
// }


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





export default async function Home() {
  const data: IProduct[] = await getProductData();
  // console.log(data);



  return (
    <>
      <HeroSection />
      <Promotions />
      <ProductsSlider />
      <Unique />
      <Subscribe />
      {/* {data[0].title} */}
      {/* <button onClick={handleAddToCart} className='bg-slate-950 text-lg text-white rounded-xl' >Add To Cart</button> */}

      {/* <button onClick={handleDeleteToCart} className='bg-slate-950 text-lg text-white rounded-xl' >Delete from Cart</button> */}

      <div>
        {/* {data.map((item) => ( */}
        {/* // eslint-disable-next-line react/jsx-key */}
        <div>
          {/* <Image width={100} height={300} src={urlForImage(item.image).url()} alt="Product" /> */}

          {/* <Image width={100} height={300} src={urlForImage(data[1].image).url()} alt="Product" /> */}
        </div>
        {/* ))} */}
      </div>

      {/* <StripeCheckOutButton /> */}

    </>
  )
}
