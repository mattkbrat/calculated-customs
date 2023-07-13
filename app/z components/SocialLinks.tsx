import { Inter } from 'next/font/google'
import Link from  'next/link';
import Image from 'next/image';
import { AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai"

const inter = Inter({ subsets: ['latin'] })


export default function SocialLinks() {
    
    return(
        <div className='flex'>
        
            <Link href="https://youtube.com/channel/UCazq-Zh2hxOYou0geTXhOTA">
                <div >
                    <h3 >  <AiOutlineYoutube /> </h3>
                </div>
            </Link>
        
        
            <Link href="https://www.instagram.com/calculatedcustoms">
                <div >
                    <h3 >  <AiOutlineInstagram /> </h3>
                </div>
            </Link>
</ div> 
    )
}

//list="widthList" maxLength={3} step="1"
//list="aspectList" maxLength={3} step="1" 