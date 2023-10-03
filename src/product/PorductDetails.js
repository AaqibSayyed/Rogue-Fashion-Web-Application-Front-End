import { useEffect, useState } from 'react'
import { useGlobalProductContext } from '../context/productContext'
import { useParams } from 'react-router-dom'
import { MdSecurity } from "react-icons/md";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import { FaMinus, FaPlus } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import Stars from '../component/Stars'
import { useCartContext } from '../context/cartContext'
import '../assets/css/productDetails.css'

const API = "/api/v1/user/viewsingleproduct/"



function PorductDetails() {

  const [cartAmount, setCartAmount] = useState(1);
  const { productDetails, getSingleProduct } = useGlobalProductContext()
  const { name, single_product_image, stars, reviews, total_amount, detail, stock, brand, category_name } = productDetails
  const { slug } = useParams()
  const { addToCart } = useCartContext()
  // console.log('i am from product Details',productDetails )
  // console.log('i am from single product',id)
  const stars_rating = parseFloat(stars);

  function setDecreaseCount() {
    setCartAmount(cartAmount > 1 ? cartAmount - 1 : 1)
  }

  function setIncreaseCount() {
    setCartAmount(cartAmount < stock ? cartAmount + 1 : stock)
  }

  useEffect(() => {
    getSingleProduct(`${API}${slug}`)
  }, [])

  let link = '';
  // console.log('i am from category_name',category_name)

  if (category_name === `Men`) {
    link = '/menproducts'
  }

  if (category_name === `Women`) {
    link = '/womenproducts'
  }
  if (category_name === `Kid`) {
    link = '/kidproducts'

  }

  // console.log('i am from linkkk',link)




  return (
    <>

      <div className='style-link-product'>

        <NavLink to={link} className='go-back'><strong>{category_name}'s Prodcut</strong></NavLink><strong > / {name}</strong>
      </div>

      <div className='single-prodcut-container'>
        <div className="single-image-container">
          <img src={single_product_image} alt={name} className='single-product-img' />
        </div>

        <div className='single-details-container'>
          <span className='product-name'>{name}</span>


          <div className='stars'><Stars stars={stars_rating} reviews={reviews} />  </div>



          <h4><del>MRP: {total_amount + 200}</del></h4>
          <h3 className='Deal-of-day'>Deal of the Day:₹{total_amount}.00</h3>
          <h3>Porduct Detials:</h3>
          <p className='gray'>{detail}</p>

          <div className="product-data-warranty">
            <div className="product-warranty-data">
              <TbTruckDelivery className="warranty-icon" />
              <p className='icon-text'>Free Delivery</p>
            </div>

            <div className="product-warranty-data">
              <TbReplace className="warranty-icon" />
              <p className='icon-text'>30 Days Replacement</p>
            </div>

            <div className="product-warranty-data">
              <TbTruckDelivery className="warranty-icon" />
              <p className='icon-text'>Aaqib Delivery Services</p>
            </div>


            <div className="product-warranty-data">
              <MdSecurity className="warranty-icon" />
              <p className='icon-text'>2 Years warranty</p>
            </div>
          </div>

          <hr />

          <div className='more-details'>
            <div>Available: <strong>{stock > 0 ? "In Stock" : "Currently Not In Stock"}</strong></div>
            <div>Delivery: <strong>2-3 Working Days</strong></div>
            <div>Brand: <strong className='brand-name'>{brand}</strong></div>
          </div>

          <hr className='second-hr' />

          <div className='quantity-cart'>
            <button className='plus-minus' onClick={() => { setDecreaseCount() }}><FaMinus /></button>
            <div>{cartAmount}</div>
            <button className='plus-minus' onClick={() => { setIncreaseCount() }}><FaPlus /></button>
          </div>

          {/* { console.log('cartAmount productDetails', productDetails)} */}

          <NavLink to='/cart' onClick={() => addToCart(cartAmount, productDetails)}>
            <button className='add-to-cart'>Add To Cart</button>
          </NavLink>


        </div>
      </div>
    </>
  )
}

export default PorductDetails

