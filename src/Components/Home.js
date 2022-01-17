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

    return (
        <div className='flex col align-center mg-5'>
            <p className='mg-3'>Enter Text Here</p>
            <textarea className='' name="" value={Text} onChange={change} cols="100" rows="15"></textarea>
            <div className='flex col'>
                <p className=''>
                    Letters Count: {Text.length}
                </p>
                <p>
                    Words Count: {Text.split(/[ ,.\n]+/).filter(word => word.length!==0).length}
                </p>
            </div>
        </div>
    )
}
