import { useCartContext } from '../context/cartContext'
import CartDetails from './CartDetails'
import '../assets/css/cart.css'

function Cart() {
  const { cart } = useCartContext()

  return (
    <>
      <div className='cart-container'>

        <div style={{ width: "20%" }}>Items</div>
        <div style={{ width: "20%" }}>Price</div>
        <div style={{ width: "20%" }}>Quantity</div>
        <div style={{ width: "20%" }}>Subtotal</div>
        <div style={{ width: "20%" }}>Remove</div>

      </div>

      <hr className='cart-container-line' />

      {
        cart.map((currEleme, index) => {
          return <CartDetails key={index} {...currEleme} />
        })
      }

    </>
  )
}

export default Cart