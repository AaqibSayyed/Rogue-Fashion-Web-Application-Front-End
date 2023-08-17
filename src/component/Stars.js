import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

import React from 'react'

function Stars({stars, reviews}) {
    const ratingStar = Array.from({length: 5}, (elem,i)=>{
        
        const number = i+0.5;
        i = i+1;
        

        // i 1, 2, 3, 4, 5
        // star 5, 
        // number 0.5, 1.5, 2.5, 3.5, 4.5
        
        console.log(i, stars, number)
        return (
            <span key ={i}>

            {i<=stars? <FaStar className="icon"/>: stars>=number?  <FaStarHalfAlt className="icon"/>: <AiOutlineStar className="icon"/>}

        </span>
        )
    })

  return (
    <>
    <div className="stars-reviews">
    <div>{ratingStar}</div> 
    <span className="reviews"> ({reviews}) </span>
    </div>
    </>
  )
}

export default Stars