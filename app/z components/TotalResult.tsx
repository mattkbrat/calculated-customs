import { Inter } from 'next/font/google'
import styles from '../page.module.css'
import Link from  'next/link';
import '../globals.css'
import Image from 'next/image';

interface TotalResultProps {
    tireInertiaResult: string;
    wheelInertiaResult: string;
    placeHolder: string;
}
 const TotalResult: React.FC<TotalResultProps> = (props) => {
    let tireInertia = "";
    let wheelInertia = "";
    if (props.tireInertiaResult) {tireInertia = (props.tireInertiaResult)}
    if (props.wheelInertiaResult) {wheelInertia = (props.wheelInertiaResult)}
    const totalInertia = (parseFloat(tireInertia) + parseFloat(wheelInertia)).toFixed(1)
  
    
    return(
        <>
            <div id="totalResult"> 
                <input placeholder={props.placeHolder} className="result" id="totalRes" type="number" disabled value={totalInertia}/> 
            </div>
        </>
    )
}

export default TotalResult;
