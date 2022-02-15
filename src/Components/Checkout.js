import {Input,Button} from '@material-ui/core';
import React from 'react';
import './Checkout.css';
import {Link} from "react-router-dom";
function Checkout() {
  return <div>
      <div className="checkout_wrap">
          <h2>Shipping Details</h2>
          <form action="">
              <div className="checkout_form">
              <div className="checkout_column">
                  <label>First Name*</label>
                  <Input required name='firstname' />
              </div>
              <div className="checkout_column">
                  <label>Last_ Name*</label>
                  <Input required name='lastname' />
              </div>
              <div className="checkout_column">
                  <label>Adress*</label>
                  <Input required name='address' />
              </div>
              <div className="checkout_column">
                  <label>Email*</label>
                  <Input required name='email' />
              </div>
              <div className="checkout_column">
                  <label>City*</label>
                  <Input required name='city' />
              </div>
              <div className="checkout_column">
                  <label>Zipcode*</label>
                  <Input required name='zipcode' />
              </div>
              <div className="checkout_column">
                  <label>Shipping Country*</label>
                  <select name="country" >
                  <option >Nepal</option>
                  </select>
                 

              </div>
              <div className="checkout_column">
                  <label>Shipping subdivision*</label>
                  <select name="subdivision" id="">
                  <option value="">Pokhara</option>
                  </select>
              </div>
              <div className="checkout_column">
                 <Link to="/slip">
                 <Button>Payout</Button>
                 </Link>
              </div>
              </div>
          </form>
      </div>
  </div>;
}

export default Checkout;
