import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { urlForImage } from "../../../sanity/lib/image";
import { Image as IImage } from "sanity";
import { getProductData } from "../../app/getProductData";


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

const Kids = async () => {
    const data: IProduct[] = await getProductData();
    return (
        <>
            <div className="w-full my-32">
                <div className='grid grid-cols-1 md:grid-cols-3 gap-10 px-6'>
                    <div className="item py-4">
                        <Link href="/Little-Boy-Clothes">
                            <Image className="w-[600px] h-[400px]"
                                src={urlForImage(data[7].image).url()}
                                width={600}
                                height={800}
                                alt="Boy"
                            />
                            <h3 className="font-extrabold text-xl tracking-widest">Little Boy Clothes</h3>
                            <span className="font-extrabold text-xl tracking-widest">$220</span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Kids;