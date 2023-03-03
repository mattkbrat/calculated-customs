import { Inter } from 'next/font/google'
import styles from '../page.module.css'
import Link from  'next/link';
import '../globals.css'
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] })

export default function NavBar() {
    
    return(
        <>
            <nav className={styles.grid}>
                <Link href="/">
                    <div className={styles.card}>
                        <h5 className={styles.center}>
                        CALCULATED CUSTOMS <span> 
                        <Image src="/logo.svg" alt="calculated customs logo" width={40} height={31} priority />
                        </span> 
                        </h5>
                    </div>
                </Link>
                <Link href="/compare-wheel-0-60-time">
                    <div className={styles.card}>
                        <h5 className={inter.className}>Compare Wheel 0-60 Time <span>-&gt;</span> </h5>
                    </div>
                </Link>
                <Link href="/learn">
                    <div className={styles.card}>
                        <h5 className={inter.className}>Learn <span>-&gt;</span> </h5>
                    </div>
                </Link>
                <Link href="/about">
                    <div className={styles.card}>
                        <h5 className={inter.className}>About <span>-&gt;</span> </h5>
                    </div>
                </Link>
                <Link href="/contact">
                    <div className={styles.card}>
                        <h5 className={inter.className}>Contact <span>-&gt;</span> </h5>
                    </div>
                </Link>
            </nav>
        </>
    )
}