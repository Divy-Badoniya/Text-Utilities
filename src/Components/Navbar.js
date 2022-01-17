import React from 'react'
import '../Components Style/myFlexBox.css'
import '../Components Style/myText.css'
import '../Components Style/myBackGround.css'
import '../Components Style/myPadandmar.css'
import {Link} from "react-router-dom"

export default function Navbar() {
    return (
        <nav className='bg-dark flex align-center pd-5'>
            <li>
                <a className='text-color-light text-decor-none font-size-2' href="/">Text Utilities</a>
            </li>
            <div className='flex jst-even align-center'>
                <li>
                    <Link className='text-color-light text-decor-none font-size-1-half' to="/">Home</Link>
                </li>
                <li>
                    <Link className='text-color-light text-decor-none font-size-1-half' to="/about">About</Link>
                </li>
            </div>
        </nav>
    )
}
