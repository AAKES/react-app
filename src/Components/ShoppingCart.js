import React from 'react';
import './Cart.css'
import {Link} from 'react-router-dom';
function ShoppingCart() {
  return <div>
      <div className="checkout">
          <div className="checkout_left">
              <img src="https://icms-image.slatic.net/images/ims-web/4b1ceeb6-d2d6-4073-8d36-22f45f6bc1de.jpg_1200x1200.jpg" alt=""className='checkout_ad' />
              <h3>Hello meroDokan</h3>
                <h2>Shopping Basket</h2>
              <div className="checkoutproduct">
                  <img src="https://static-01.daraz.com.np/p/45c8f911e5e51dce64599b7fc7ded8d7.jpg" alt="" className='checkoutproduct_img' />
                 <div className="checkoutproduct_info">
                 <p className="checkoutproduct_title">Product Name</p>
                  <p className="checkoutproduct_price">
                     Rs : 1000 * 1 = Rs : 1000
                  </p>
                  <button>Remove Products</button>
                 </div>
              </div>
              <div className="checkoutproduct">
                  <img src="https://static-01.daraz.com.np/p/d92d613591548d27156bf72af964e785.png" alt="" className='checkoutproduct_img' />
                 <div className="checkoutproduct_info">
                 <p className="checkoutproduct_title">Product Name</p>
                  <p className="checkoutproduct_price">
                     Rs : 1000 * 1 = Rs : 1000
                  </p>
                  <button>Remove Products</button>
                 </div>
              </div>
              <div className="checkoutproduct">
                  <img src="https://static-01.daraz.com.np/p/3505bb234855f3ea3664921048b0db3f.jpg" alt="" className='checkoutproduct_img' />
                 <div className="checkoutproduct_info">
                 <p className="checkoutproduct_title">Product Name</p>
                  <p className="checkoutproduct_price">
                     Rs : 1000 * 1 = Rs : 1000
                  </p>
                  <button>Remove Products</button>
                 </div>
              </div>
              <div className="checkoutproduct">
                  <img src="https://static-01.daraz.com.np/p/694fba6cb7522e5fe078f2973626eb25.jpg" alt="" className='checkoutproduct_img' />
                 <div className="checkoutproduct_info">
                 <p className="checkoutproduct_title">Product Name</p>
                  <p className="checkoutproduct_price">
                     Rs : 1000 * 1 = Rs : 1000
                  </p>
                  <button>Remove Products</button>
                 </div>
              </div>
          </div>
          <div className="checkout_right">
              <div className="subtotal">
                  <p>Subtotal (2 items): <strong>Rs:2999.00</strong></p>
                  <smal className="subtotal_gift">
                      <input type ="checkbox"/>This order content a gift
                  </smal>
              </div>
              <Link to='/checkout'>
              <button type='button'>Proceed to checkout</button>
              </Link>
          </div>
      </div>
  </div>;
}

export default ShoppingCart;
