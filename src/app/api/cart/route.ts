import { NextResponse, NextRequest } from "next/server"
import { db,cartTable  } from "../../../../drizzle"
import {v4 as uuid} from "uuid"
import { cookies } from "next/dist/client/components/headers"
import { eq } from "drizzle-orm"
import { and } from "drizzle-orm"

export const GET = async (request: NextRequest) => {
    try {
        const res = await db.select().from(cartTable);
        return NextResponse.json({res});
    } catch (error) {
        console.log(error);
        return NextResponse.json({error});
    }
}

   


export async function POST(request : NextRequest){
    
    const req = await request.json();
    const uid = uuid();
    const setcookies = cookies();
    
    const user_id = cookies().get("user_id")
    if (!user_id) {
        setcookies.set("user_id", uid);
        console.log("Everything okay! User ID set");
    }
    
    
    const userAddedData = await db.insert(cartTable).values({
        product_id: req.product_id,
        quantity: 1,
        user_id: cookies().get("user_id")?.value as string,
    }).returning();

    return NextResponse.json(userAddedData);
}






console.log("delete request ke uper hai ham boss")
export const DELETE = async (request: NextRequest) => {

    console.log("Delete me phnch gaya re apon")


    const req = await request.json();

    console.log("request ka await kar lya hai")


    const product_id = req.product_id;
    const user_id = cookies().get("user_id")?.value as string
    
    console.log("he bhiru product_id bhi mil gya re")


    const deletedCartItems /* : { name: string }[] */ = await db.delete(cartTable)
    .where(and(eq(cartTable.user_id, user_id), eq(cartTable.product_id, product_id),))
    .returning();

    console.log("murshad process done hain")

    return NextResponse.json(deletedCartItems);

    console.log("next response ke neeche a gye ham")
}
console.log("delete ke end me hain ham boss")






