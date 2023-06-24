import React from 'react'
import Link from 'next/link'

export const Navbar = () => {
    return (
        <nav className='shadow-sm py-3'>
            <div className='container mx-auto flex items-center justify-between'>
                <h1>TechStore</h1>
                <ul className='flex gap-2'>
                    <li>
                        <Link href='/'>Inicio</Link>
                    </li>
                    <li>
                        <Link href='/'>Productos</Link>
                    </li>
                    <li>
                        <Link href='/'>Categorias</Link>
                    </li>
                    <li>
                        <Link href='/'>Carrito</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
