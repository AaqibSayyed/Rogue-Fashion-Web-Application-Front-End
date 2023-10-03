import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import '../assets/css/productDetails.css'

function Stars({stars, reviews}) {
    const ratingStar = Array.from({length: 5}, (elem,i)=>{
        
        const number = i+0.5;
        i = i+1;
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