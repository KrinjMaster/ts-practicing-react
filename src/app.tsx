import React, { useEffect, useState } from 'react';
import './App.css';
import Product from './Components/Product';
import axios from 'axios';
import { IProduct } from './Module';

const App: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([])

  async function getProducts() {
    const response = await axios.get<IProduct[]>(`https://fakestoreapi.com/products/`)
    setProducts(response.data)
  }

  useEffect(() => {
    getProducts()
  },[])


  return (
    <div>
      { products.map(product => <Product product={product} key={product.id}/>) }
    </div>
  )
}

export default App;
