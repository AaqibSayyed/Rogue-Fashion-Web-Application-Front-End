import React from 'react'
import { NavLink } from 'react-router-dom'

function MainProductPage(element) {
  const { slug, name, product_images, total_amount, brand } = element
  return (

    <>


      <NavLink to={`/productdetails/${slug}`}>
        <div className='card'>
          <figure className='fig'>

            <img src={product_images} alt={slug} className='product-image' />
            <figcaption className='card-data-writeup'>{brand}</figcaption>
          </figure>


          <div className="card-data">
            <div className="card-data-flex">
              <h5 className='card-data-writeup'>{name}</h5>
              <p className="card-data-writeup"><del>Rs.{total_amount + 200}</del> Rs.{total_amount}</p>
            </div>
          </div>

        </div>
      </NavLink>


    </>



  )
}

export default MainProductPage