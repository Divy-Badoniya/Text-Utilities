import React, { useState } from 'react'
import '../Components Style/myFlexBox.css'
import '../Components Style/myText.css'
import '../Components Style/myBackGround.css'
import '../Components Style/myPadandmar.css'
import '../Components Style/mySizing.css'

export default function Home() {
    const [Text, setText] = useState('');

    const change = (event) => {
        setText(event.target.value);
    }

    const remXtraSpace = () =>{
        setText(Text.split(/[ ]+/).join(" "));
    }

    const toUpper = () =>{
        setText(Text.toUpperCase());
    } 

    const toLower = () =>{
        setText(Text.toLowerCase());
    } 

    const Copy = () => {
        navigator.clipboard.writeText(Text);
    }

    return (
        <div className='flex col align-center mg-5'>
            <p className='mg-3'>Enter Text Here</p>
            <textarea className='' name="" value={Text} onChange={change} cols="100" rows="15"></textarea>
            <div className='flex wd-60 jst-even myt-8'>
                <button onClick={toUpper} className='bg-light text-color-dark ht-2'>UpperCase</button>
                <button onClick={toLower} className='bg-light text-color-dark ht-2'>LowerCase</button>
                <button onClick={Copy} className='bg-light text-color-dark ht-2'>Copy All</button>
                <button onClick={remXtraSpace} className='bg-light text-color-dark ht-2'>Remove Extra Spaces</button>
            </div>
            <p>Your Text Summary</p>
            <div className='flex'>
                <p className='mxl-8 mxr-8'>
                    Letters Count: {Text.length - Text.split(/[ \n]/).length+1}
                </p>
                <p className='mxl-8 mxr-8'>
                    Words Count: {Text.split(/[ ,.\n]+/).filter(word => word.length!==0).length}
                </p>
            </div>
        </div>
    )
}