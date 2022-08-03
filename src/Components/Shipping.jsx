import React from "react";
import { Form } from "react-bootstrap";
import Cart from "./Cart";
import Payment from "./Payment";

const Shipping=()=> {
  return (
    <>
      <div className="container shipping-container">
        
          <div className="shipping-item text-start pb-5">
            <h4>Shipping & Payment</h4>
            <br />
            <button style={{marginRight:"10px",background:"#53BF9D"}}>LOG IN</button>
            <button>SIGN IN</button>
            <br />
          </div>
          <div className="log">
            <h6>shipping information</h6>
            <div className="content">
              <div className="input">
                <input type="text" placeholder="email" />
                <input type="text" placeholder="Address" />
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="City" />
                <input type="text" placeholder="Last Name" />
                <input type="text" placeholder="Postal Code /zip " />

                <select name="poland" id="poland">
                  <option value="poland">poland</option>
                </select>
              </div>
            </div>
          </div>
   
      </div>
    </>
  );
}

export default Shipping;
