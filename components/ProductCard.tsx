import { FC } from 'react'
import Link from 'next/link';
import Image from 'next/image';

import { Product } from '@/interfaces/product'

interface Props{
    product: Product;
}

export const ProductCard: FC<Props> = ({ product }) => {
    return (
        <Link href={`/product/${ product.id }`} className='card__item'>
            <Image
                alt={ product.name }
                src={ product.images[0] }
                width='200'
                height='200'
            />
            <div className='mt-5'>
                <h2>{ product.name }</h2>
                <h3>Precio: { product.price }$</h3>
            </div>
        </Link>
    )
}
