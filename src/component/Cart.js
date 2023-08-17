import React from 'react'
import { useCartContext } from '../context/cart_context'
import CartDetails from './CartDetails'

function Cart() {
  const {cart} = useCartContext()

  console.log('cart me kya aa rha ',cart)


  return (
    <>
    <div className='cart-container'>

      <div style={{width: "20%"}}>Items</div>
      <div style={{width: "20%"}}>Price</div>
      <div style={{width: "20%"}}>Quantity</div>
      <div style={{width: "20%"}}>Subtotal</div> 
      <div style={{width: "20%"}}>Remove</div>

    </div>
    
    <hr className='cart-container-line'/>

    {
      cart.map((currEleme, index)=>{
        return <CartDetails key={index} {...currEleme} />
      })
    }

</>
  )
}

export default Cart