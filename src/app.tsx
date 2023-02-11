import React, { useEffect } from 'react';
import './App.css';
import Products  from './Components/Products'
import { products } from './Data/Products'
import axios from 'axios';
import IProduct from './Models';

const App: React.FC = () => {

  async function FetchProducts() {
    const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=5')
    console.log(response)
  }

  useEffect(() => {
    FetchProducts();
  }, [])
  
  return (<>
    { products.map(product => <Products product={product} key={product.id} />)}
  </>);
}

export default App;
