import { Product } from '@/interfaces/product';
import { Metadata } from 'next'
import Image from 'next/image';
import React from 'react'

interface Props {
    params: { id: string }
}

// DYNAMIC METADATA
export async function generateMetadata({ params }:Props): Promise<Metadata> {
    const { id }= params;
    const response = await fetch(`https://techstore-rest-api.vercel.app/products/${ id }`);
    const product = await response.json() as Product;

    return {
        title: product.name
    }   
}

async function getProduct(id:string) {
    // ISR
    const response = await fetch(`https://techstore-rest-api.vercel.app/products/${ id }`,{
        next: {
            revalidate: 60
        }
    });

    const data = await response.json();
    return data as Product;
}


const ProductPage = async ({ params }: Props) => {
    const product = await getProduct(params.id)

    return (
        <main className='min-h-screen pt-10'>
            <div className='product'>
                <Image
                    alt={ product.name }
                    src={ product.images[1] }
                    width='700'
                    height='700'
                />
                <div>
                    <h1>{ product.name }</h1>
                    <h2>Descricion del producto:</h2>
                    <p>{ product.description }</p>
                    <div className='mt-5'>
                        <h3>Precio:</h3>
                        <p>{ product.price }</p>
                    </div>
                    <div className='mt-5'>
                        <h3>Stock disponible:</h3>
                        <p>{ product.inStock }</p>
                    </div>

                    <button className='button'>
                        Comprar producto
                    </button>
                </div>
            </div>
        </main>
    )
}

export default ProductPage