import React from "react";
import mcard from "../Asset/mcard.png";
import paypal from "../Asset/paypal.webp";
import visa from "../Asset/visa.png";
import inpost from "../Asset/inpost.png";
import dpd from "../Asset/dpd.png";
import dhl from "../Asset/dhl.jpg";
import fedex from "../Asset/fedex.jpg";
const Payment = () => {
  return (
    <>
      <div className=" mt-5 " style={{paddingLeft:"50px"}}>
        <div className="payment">
          <h5>Payment Method</h5>

          <div className="method">
            <img src={paypal} alt="paypal" />
            <img src={visa} alt="visa" />
            <img src={mcard} alt="master card" />
          </div>
          <div className="method">
            <img src={paypal} alt="paypal" />
            <img src={visa} alt="visa" />
            <img src={mcard} alt="master card" />
          </div>
        </div>
        <br />
        <div className="shipping">
          <h5>shipping Method</h5>
          <div className="delivery">
            <div className="item d-flex justify-around align-center">
              <img src={inpost} alt="inpost payment method" />
              <p style={{ marginLeft: "20px" }}>$20.00</p>
            </div>
            <div className="item d-flex justify-around align-center">
              <img src={dpd} alt="inpost payment method" />
              <p style={{ marginLeft: "20px" }}>$20.00</p>
            </div>
            {/* <img src={visa} alt="visa" />
                <img src={mcard} alt="master card" /> */}
          </div>
          <div className="delivery">
            <div className="item d-flex justify-around align-center">
              <img src={dhl}  style={{marginTop:"4px"}}alt="inpost payment method" />
              <p style={{ marginLeft: "20px" }}>$20.00</p>
            </div>
            <div className="item d-flex justify-around align-center">
              <img src={fedex} alt="inpost payment method" />
              <p style={{ marginLeft: "20px" }}>$20.00</p>
            </div>
            {/* <img src={visa} alt="visa" />
                <img src={mcard} alt="master card" /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
