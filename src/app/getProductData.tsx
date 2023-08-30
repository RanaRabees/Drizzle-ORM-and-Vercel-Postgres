import { client } from "@/lib/sanityClient";
import { Image as IImage } from "sanity";
import { urlForImage } from "../../sanity/lib/image";




export const getProductData  = async () => {
    const res = await client.fetch(`*[_type == 'product']{
      title,
      description,
      _id,
      price,
      image,
      category -> {
        name
      }
    }`);
    return res;
  }
  
  
//   interface IProduct {
//     _id: string,
//     price: number,
//     title: string,
//     description: string,
//     image: IImage,
//     category: {
//       name: string
//     }
//   }
  
  