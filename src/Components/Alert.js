import React from 'react'
import '../Components Style/myBorder.css'
import '../Components Style/mySizing.css'
import '../Components Style/myFlexBox.css'
import '../Components Style/myPadandmar.css'

export default function Alert(props) {
    return (
        props.alert && <div className='bdr ht-2 wd-60 mg-auto bg-success'>
            <strong className=''>
                {props.alert.message}
            </strong>
        </div>
    )
}
