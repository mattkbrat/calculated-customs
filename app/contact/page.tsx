import Image from 'next/image'
import pagePicture from "../../public/gold-wheel 3840x5760.jpg"
import { Inter } from 'next/font/google'
import { AiOutlineInstagram } from 'react-icons/ai'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })


export default function ContactPage() {
    return(
        <div className='flex flex-col items-center'>
            <div className='w-3/4 h-1/4 overflow-hidden rounded-xl justify-center flex flex-col'>
                    <Image
                        src={pagePicture}
                        alt="Widebody Lamborghini"
                        placeholder="blur"
                         fill={false}
                    />
                 </div>
            <div>    
                <Link href="https://www.instagram.com/calculatedcustoms" className='flex'>
                    <h1> DM Us on Instagram  </h1>
                    <div className='my-auto'> <h1> <AiOutlineInstagram /> </h1></div>
                </Link>
                <br></br>
                <h3>Services Offered</h3>
                <ul >
                    <li>Fitment Advice</li>
                    <li>Wheel Recommendations</li>
                    <li>Tire Recommendations</li>
                    <li>Transportation Services</li>
                </ul>
            </div>
        </div>
    )
}