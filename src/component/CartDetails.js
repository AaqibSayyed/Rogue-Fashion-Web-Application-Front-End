import { React, useState } from 'react'
import { FaMinus, FaPlus } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import {useCartContext} from '../context/cart_context'

function CartDetails(currEleme) {

    const { id, name, amount, quantity, image, stock } = currEleme
    const {removeCartItem} = useCartContext()
    // id: product.id,
    // name: product.name, 
    // imgae: product.single_product_image,
    // quantity:amount,
    // amount: product.total_amount   
    const [quantityCount, setQuantityCount] = useState(quantity)


    function setDecrease() {
        setQuantityCount(quantityCount > 1 ? quantityCount - 1 : 1);
    }

    function setIncrease() {
        setQuantityCount(quantityCount < stock ? quantityCount + 1 : stock);
    }


    return (
        <>
            <div className='cart-container'>

                <div style={{ width: "20%" }}>
                    <figure><img src={image} alt='cart product' style={{ width: 30, height: 30 }} /></figure>
                    {name}</div>
                <div style={{ width: "20%" }}>₹{amount}</div>


                <div style={{ width: "20%" }}><FaMinus className='plus-minus-cart' onClick={() => { setDecrease() }} /> {quantityCount} <FaPlus className='plus-minus-cart' onClick={() => { setIncrease() }} /> </div>



                <div style={{ width: "20%" }}>₹{amount * quantityCount}</div>
                <div style={{ width: "20%" }}><FaTrash style={{color:"red", cursor:"pointer"}} onClick={()=>{
                    removeCartItem(id)
                }}/></div>

            </div>

        </>
    )
}

export default CartDetails