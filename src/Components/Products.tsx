import React, { useEffect, useRef, useState } from 'react'
import IProduct from '../Models'
import { products } from '../Data/Products'


interface ProductProps {
    product: IProduct
}

const Products = ({ product }: ProductProps) => {
    const [details, setDetails] = useState<boolean>(false)
    const [description, setDescription] = useState<string>("Show Description")

    const BtnBgNameClasses = details ? 'bg-purple-500' : 'bg-blue-500'

    const BtnClasses = ["border rounded py-2 px-4", BtnBgNameClasses]

    return (<>
    <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
        <img src={product.image} className="w-1/6"/>
        <h1>{product.title}</h1>
        {/* <h1>{product.description}</h1> */}
        <h1 className="font-bold">{product.price}$</h1>
        <button className={BtnClasses.join(' ')} onClick={() => setDetails(!(details))}>{details ? 'Hide details' : 'Show Details'}</button>
        {details && <div className="text-center">
            <p className="font-bold">Category: {product.category.toUpperCase()}</p>
            <p>{product.description}</p>
        </div>}
    </div>
    </>)
}

export default Products