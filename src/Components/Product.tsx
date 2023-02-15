import React, { useState } from 'react'
import {IProduct}  from '../Module'

interface ProductProps {
    product: IProduct
}

const Product = (props: ProductProps) => {
    const [description, setDescription] = useState(false)

    return (
        <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
            <h1 className='font-bold'>{props.product.title}</h1>
            <p className="font-bold">{props.product.price}</p>
            <img src={props.product.image} className='w-1/6'/>
            <button className='border-round px-2 py-4 bg-blue-400' onClick={() => setDescription(prev => !prev)}>{description ? 'Hide description' : 'Show desciption'}</button>
            {description && <h2>{props.product.description}</h2>}
        </div>
    )
}

export default Product
