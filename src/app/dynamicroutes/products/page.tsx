import React from "react";
import axios from "axios";


export const dynamic = "1"


const page = async ({}) => {

    const products = await axios.get('https://dummyjson.com/products')

    // console.log(products.json())


    return (
        <div>
            {/*{products.stringify}*/}
        </div>
    )
}

export default page
