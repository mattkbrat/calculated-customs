import { Inter } from 'next/font/google'
import styles from '../page.module.css'
import Link from  'next/link';
import '../globals.css'
import Image from 'next/image';

interface WheelSVGProps {
    TireDia: boolean
    WheelDia: string
    isVisible: boolean
}

export default function WheelSVG(props: any) {
    return props.isVisible ? (
        <svg width="200" height="200" viewBox="-12.5 -12.5 25 25" xmlns="http://www.w3.org/2000/svg">

            <style>
            #tireC, #outerWheelC, path{
                stroke: #262626
            }
            path {
                fill: #262626
            }
            </style>

            <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#fde047;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#ca8a04;stop-opacity:1" />
                
            </linearGradient>

            </defs>

            <circle 
                id="tireC"
                cx="0" cy="0" r="11.25" 
                fill ="transparent" 
                
                stroke-width="2.5"
                stroke-dasharray="62.8319"
                stroke-linecap="round"
                transform="rotate(20)"
            />

            <circle 
            id="outerWheelC"
            cx="0" cy="0" r="8.625" 
            fill ="transparent" 
            stroke="grey" 
            stroke-width="2.85" 
            stroke-dasharray="48.1711"
            stroke-linecap="round"
            transform="rotate(20)"
            />
            <circle 
            id="wheelC"
            cx="0" cy="0" r="8.625" 
            fill ="transparent" 
            stroke="url(#grad1)" 
            stroke-width="2.25"
            stroke-dasharray="48.1711"
            stroke-linecap="round"
            transform="rotate(20)"
            />

            <g>
                <path 
                stroke-width=".1"
                d="
                    M 0 0
                    L .553 1.668
                    A 1 1 0 0 1 1.457 1.800
                    L 4.535 4.037
                    A 1 1 0 0 1 4.579 5.621
                    A 7.25 7.25 0 0 0 6.761 2.618
                    A 1 1 0 0 1 5.241 3.066
                    L 2.162 .829
                    A 1 1 0 0 1 1.750 0
                    L 0 0
            
                "
                />
                <path 
                transform="rotate(72)"
                stroke-width=".1"
                d="
                    M 0 0
                    L .553 1.668
                    A 1 1 0 0 1 1.457 1.800
                    L 4.535 4.037
                    A 1 1 0 0 1 4.579 5.621
                    A 7.25 7.25 0 0 0 6.761 2.618
                    A 1 1 0 0 1 5.241 3.066
                    L 2.162 .829
                    A 1 1 0 0 1 1.750 0
                    L 0 0
            
                "
                />
                <path 
                transform="rotate(144)"
                stroke-width=".1"
                d="
                    M 0 0
                    L .553 1.668
                    A 1 1 0 0 1 1.457 1.800
                    L 4.535 4.037
                    A 1 1 0 0 1 4.579 5.621
                    A 7.25 7.25 0 0 0 6.761 2.618
                    A 1 1 0 0 1 5.241 3.066
                    L 2.162 .829
                    A 1 1 0 0 1 1.750 0
                    L 0 0
            
                "
                />
                <path 
                transform="rotate(-144)"
                stroke-width=".1"
                d="
                    M 0 0
                    L .553 1.668
                    A 1 1 0 0 1 1.457 1.800
                    L 4.535 4.037
                    A 1 1 0 0 1 4.579 5.621
                    A 7.25 7.25 0 0 0 6.761 2.618
                    A 1 1 0 0 1 5.241 3.066
                    L 2.162 .829
                    A 1 1 0 0 1 1.750 0
                    L 0 0
            
                "
                />
                <path 
                transform="rotate(-72)"
                stroke-width=".1"
                d="
                    M 0 0
                    L .553 1.668
                    A 1 1 0 0 1 1.457 1.800
                    L 4.535 4.037
                    A 1 1 0 0 1 4.579 5.621
                    A 7.25 7.25 0 0 0 6.761 2.618
                    A 1 1 0 0 1 5.241 3.066
                    L 2.162 .829
                    A 1 1 0 0 1 1.750 0
                    L 0 0
            
                "
                />
            </g>
                </svg>

    ) : null;
  }
  