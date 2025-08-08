import React, { useState } from 'react'
import { PiDotsThreeOutlineVerticalDuotone } from "react-icons/pi";
import { FaPenFancy } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
export default function Notes() {
    const[show,setshow]=useState(false)

    const handleshow = () => {
        setshow(!show)
    }
    return (
        <>


        <>
        <div className="card position-relative" style={{  width: "18rem", backgroundColor: "#33BAE8" }}>
  <div className="card-body position-relative">
    <h5 className="card-title">never give up one day you will success</h5>
    <div className='bottomContent'>
        <div className='date d-flex justify-content-between align-items-center'>
            <h5 className='fs-6'>7/29/2525</h5>
            {

            show && (
                <div className='dropdown'>
                <FaPenFancy size={20} cursor={"pointer"}/>
                <RiDeleteBin6Line size={25} color='red' cursor={"pointer"}/>
                </div>
            )


            }
             <div className='' onClick={handleshow}>
                <PiDotsThreeOutlineVerticalDuotone size={25} cursor={"pointer"}></PiDotsThreeOutlineVerticalDuotone>
            </div>
    </div>
            </div>
            
           
  
  </div>
</div>
        
        </>
        
        </>
    )
}