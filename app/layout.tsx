import { Inter } from 'next/font/google'
import styles from './page.module.css'
import './globals.css'
import NavBar from './z components/NavBar';
import Footer from './z components/Footer'
import { Analytics } from '@vercel/analytics/react';


const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'Calculated Customs',
  description: 'Calculate and compare Rotational Inertia and Zero-to-sixty (0-60mph) times to select the fastest wheel and tire setup.'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main className={styles.main}>
          
            <NavBar />
            {children}      
            <Footer />
            <Analytics />
        </main>
      </body>
    </html>
  )
}
