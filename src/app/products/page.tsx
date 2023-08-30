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

const Products = async () => {
    const data: IProduct[] = await getProductData();
    return (
        <>
            <div className="w-full my-20">
                <div className='grid grid-cols-1 text-center md:grid-cols-4 gap-10 px-6'>
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
                    <div className="item py-4">
                    <Link href="/Flex-Push-Button-Bomber">
                            <Image
                                className='h-[400px] bg-gray-400'
                                src={urlForImage(data[1].image).url()}
                                width={600}
                                height={800}
                                alt="Flex Push Button Bomber"
                            />
                            <h3 className="font-extrabold text-xl tracking-widest">Flex Push Button Bomber</h3>
                            <span className="font-extrabold text-xl tracking-widest">$225</span>
                        </Link>
                    </div>
                    <div className="item py-4">
                    <Link href="/Raglan-Sweatshirt">
                            <Image
                                className='h-[400px] bg-[#cbb7a9]'
                                src={urlForImage(data[8].image).url()}
                                width={600}
                                height={800}
                                alt="Raglan Sweatshirt"
                            />
                            <h3 className="font-extrabold text-xl tracking-widest">Raglan Sweatshirt</h3>
                            <span className="font-extrabold text-xl tracking-widest">$195</span>
                        </Link>
                    </div>
                    <div className="item py-4">
                    <Link href="/Cameryn-Sash-Tie-Dress">
                            <Image
                                className='bg-[#ffece3] h-[400px]'
                                src={urlForImage(data[2].image).url()}
                                width={600}
                                height={800}
                                alt="Picture of the tshirt"
                            />
                            <h3 className='font-extrabold text-xl tracking-widest'>Cameryn Sash Tie Dress</h3>
                            <span className='font-extrabold text-xl tracking-widest'>$545</span>
                        </Link>
                    </div>
                    <div className="item py-4">
                    <Link href="/Brushed-Raglan-Sweatshirt">
                            <Image
                                src={urlForImage(data[15].image).url()}
                                width={600}
                                height={800}
                                alt="Picture of the tshirt"
                            />
                            <h3 className='font-extrabold text-xl tracking-widest'>Brushed Raglan Sweatshirt</h3>
                            <span className='font-extrabold text-xl tracking-widest'>$195</span>
                        </Link>
                    </div>
                    <div className="item py-4">
                    <Link href="/Flex-Sweatshirt">
                            <Image
                                src={urlForImage(data[12].image).url()}
                                width={600}
                                height={800}
                                alt="Picture of the tshirt"
                            />
                            <h3 className='font-extrabold text-xl tracking-widest'>Flex Sweatshirt</h3>
                            <span className='font-extrabold text-xl tracking-widest'>$175</span>
                        </Link>
                    </div>
                    <div className="item py-4">
                    <Link href="/Muscle-Tank">
                            <Image
                                src={urlForImage(data[0].image).url()}
                                width={600}
                                height={800}
                                alt="Picture of the tshirt"
                            />
                            <h3 className='font-extrabold text-xl tracking-widest'>Muscle Tank</h3>
                            <span className='font-extrabold text-xl tracking-widest'>$525</span>
                        </Link>
                    </div>
                    <div className="item py-4">
                    <Link href="/Brushed-Bomber">
                            <Image
                                src={urlForImage(data[10].image).url()}
                                width={600}
                                height={800}
                                alt="Picture of the tshirt"
                            />
                            <h3 className='font-extrabold text-xl tracking-widest'>Brushed Bomber</h3>
                            <span className='font-extrabold text-xl tracking-widest'>$75</span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Products;