import './globals.css'
import { Nunito } from 'next/font/google'
import { Navbar } from '@/components/Navbar'

const inter = Nunito({ subsets: ['latin'] })

// STATIC METADATA 
export const metadata = {
  title: 'Ecommerce',
  description: 'Tienda de productos tecnologicos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} container mx-auto`}>
        <Navbar/>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
