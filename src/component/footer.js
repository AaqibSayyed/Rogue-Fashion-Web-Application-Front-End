import React from 'react'
import {NavLink} from 'react-router-dom'

function footer() {
  return (
    <>

      <footer class="footer">
        <div class="container">
          <div class="row">

            <div class="footer-col">
              <h4>company</h4>
              <ul>
                <li><NavLink to='/about'>about us</NavLink></li>
                <li><NavLink to='/services'>our services</NavLink></li>
              </ul>
            </div>


            <div class="footer-col">
              <h4>get help</h4>
              <ul>
                <li><NavLink to='/'>FAQ</NavLink></li>
                <li><NavLink to='/'>shipping</NavLink></li>
                <li><NavLink to='/'>returns</NavLink></li>
                <li><NavLink to='/'>order status</NavLink></li>
                <li><NavLink to='/'>payment options</NavLink></li>
              </ul>
            </div>

            <div class="footer-col">
              <h4>online shop</h4>
              <ul>
                <li><NavLink to='/'>Men's Collection</NavLink></li>
                <li><NavLink to='/'>Women's Collection</NavLink></li>
                <li><NavLink to='/'>Kid's Collection</NavLink></li>
              </ul>
            </div>

            <div class="footer-col">
              <h4>follow us</h4>
              <div class="socials">
                <a href="#" class="fa fa-youtube"></a>
                <a href="#" class="fa fa-instagram"></a>
                <a href="#" class="fa fa-facebook"></a>
                <a href="#" class="fa fa-twitter"></a>
                <a href="#" class="fa fa-tumblr"></a>
             </div>

            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default footer