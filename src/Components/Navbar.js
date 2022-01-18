import React from 'react'
import '../Components Style/myFlexBox.css'
import '../Components Style/myText.css'
import '../Components Style/myBackGround.css'
import '../Components Style/myPadandmar.css'
import '../Components Style/myList.css'
import '../Components Style/mySizing.css'
import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <nav className='bg-light flex align-center pd-5'>
            <div className='flex jst-even align-center'>
                <li className='list-style-nostyle mxl-8 mxr-8'>
                    <Link className='text-color-dark text-decor-none font-size-2' to="/">Text Utilities</Link>
                </li>
                <li className='list-style-nostyle mxl-8 mxr-8'>
                    <Link className='text-color-dark text-decor-none font-size-1-half' to="/">Home</Link>
                </li>
                <li className='list-style-nostyle mxl-8 mxr-8'>
                    <Link className='text-color-dark text-decor-none font-size-1-half' to="/about">About</Link>
                </li>
            </div>
        </nav>
    )
}
