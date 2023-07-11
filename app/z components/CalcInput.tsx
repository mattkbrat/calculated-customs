import { Inter } from 'next/font/google'
import Link from  'next/link';
import Image from 'next/image';
import { Props } from 'next/script';
import { useRef } from 'react';
import WidthDataList from './WidthDataList';
import AspectDataList from './AspectDataList';
import '../globals.css'


interface CalcInputProps {
    isVisible: boolean
    setValue: any
    list?: string 
    placeHolder?: string
    value: string | boolean
    title: string
}

const CalcInput: React.FC<CalcInputProps> = (props) => {

    const inputRef = useRef<HTMLInputElement>(null);

    const handleInput =() :void => {
        if (!inputRef.current) {return}
        inputRef.current.validity.valid ? props.setValue(inputRef.current.value) : props.setValue('')

        if (props.title === "Aspect Ratio %") {
            const lastNum = parseInt(inputRef.current.value) % 10;
            if (inputRef.current.value.length === 1) {(lastNum > 0) || (props.setValue(inputRef.current.value))}
            if (inputRef.current.value.length === 2) {(lastNum === 0) || (lastNum === 5) || (props.setValue(''))}
        }
        if (props.title === "Tire Width mm") {
            const lastNum = parseFloat(inputRef.current.value)% 10
            if (inputRef.current.value.length == 1) {(lastNum>0 && lastNum<10)|| props.setValue(inputRef.current.value='')}
            //2nd tire number can be anything
            if (inputRef.current.value.length == 3) {(lastNum == 0 || lastNum ==5)||props.setValue(inputRef.current.value='')}
        } 
    }

    let inputElement = null;

    if (typeof props.value === 'boolean') {
        inputElement = (
            <div className='flex items'>
                <input type="checkbox" checked={props.value} onChange={()=>{props.setValue(!props.value)}}/> 
                <div className='ml-2'> ex. 325/40R22 </div> 
            </div>
        );
    } else if (typeof props.value === 'string') {
        if (props.title.includes("Inertia")) {  //results elements are special inputs
            inputElement = (<input className='w-full' type="number" value={props.value} disabled />);
        } else {                                //all other elements are standard inputs
            inputElement = (<input className='w-full' type="number" value={props.value} ref={inputRef} onInput={handleInput} pattern="[0-9.]" placeholder={props.placeHolder}   onClick={()=>{props.setValue("")}} list = {props.title} max="500" min="0" step = "0.1"/>);
        }
    }
    
    return props.isVisible ? (
        <div> 
            {inputElement}
            {(props.title === "Tire Width mm") && (<WidthDataList title = {props.title} />)}
            {(props.title ==="Aspect Ratio %") && (<AspectDataList title = {props.title} />)}
        </div> 
    ) : null
}
export default CalcInput

