import React from 'react'
import { HomeBanner } from '@/components/HomeBanner';
import { ProductCard } from '@/components/ProductCard';
import { Product } from '@/interfaces/product';


async function getAllProducts() {
  
  // GET STATIC PROPS
  // const response = await fetch('https://techstore-rest-api.vercel.app/products');

  // GET SERVER SIDE PROPS
  const response = await fetch('https://techstore-rest-api.vercel.app/products',{
    cache: 'no-cache',
  });
  const data = await response.json();

  return data as Product[];
}

const Home = async () => {
  const products = await getAllProducts();


  return (
    <>
      <HomeBanner product={ products[5] }/>
      <h1 className='mb-5'>Todos los productos</h1>
      <div className='card__container'>
        {
          products.map( product => (
            <ProductCard product={ product }/>
          ))
        }
      </div>
    </>
  )
}


export default Home