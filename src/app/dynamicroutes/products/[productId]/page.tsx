import React from "react";
import axios from "axios";


export const dynamic = 'force-dynamic'




export async function generateStaticParams() {
    const {data} = await axios.get('https://dummyjson.com/products')

    const products = data.products

    return products.map( product => {
        return 
    })
}

const page = async ({}) => {


    return (
        <div>

        </div>
    )
}

export default page
