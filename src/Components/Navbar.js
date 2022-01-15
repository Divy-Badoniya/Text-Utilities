import React from 'react'
import '../Components Style/Navbar.css'

export default function Navbar() {
    return (
        <nav className='my-nav bg-dark my-flex'>
            <li>
                <a className='my-text-light my-text-decor my-font-size-2' href="/">Text Utilities</a>
            </li>
            <div className='my-flex my-Sspace my-align'>
                <li>
                    <a className='my-text-light my-text-decor my-font-size-1-half' href="/">Home</a>
                </li>
                <li>
                    <a className='my-text-light my-text-decor my-font-size-1-half' href="/">About</a>
                </li>
            </div>
        </nav>
    )
}
