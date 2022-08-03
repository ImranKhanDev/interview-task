import React from "react";
import person1 from "../Asset/person1.webp";
import person2 from "../Asset/person2.webp";
import { MdOutlineLocalShipping } from "react-icons/md";
const Cart = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="cart text-start">
          <h5>Your Cart</h5>
          <br />
          <div className="cart-item d-flex justify-content-around align-items-center">
            <div className="cart-content d-flex justify-content-around align-items-center">
              <img
                src={person1}
                style={{
                  height: "40px",
                  width: "40px",
                  borderRadius: "50%",
                  marginRight: "30px",
                }}
                alt="person"
              />
              <div className="item">
                <h6>
                  T shirt <br /> Summer vibes{" "}
                </h6>
                <h6 style={{ color: "grey" }}>#3458745</h6>
              </div>
            </div>
            <div className="price">
              <h4>$89.967</h4>
            </div>
          </div>
          <div className="cart-item mt-4  d-flex justify-content-around align-items-center">
            <div className="cart-content d-flex justify-content-around align-items-center">
              <img
                src={person2}
                style={{
                  height: "40px",
                  width: "40px",
                  borderRadius: "50%",
                  marginRight: "30px",
                }}
                alt="person"
              />
              <div className="item">
                <h6>
                  Basic Slim <br /> T-shirt{" "}
                </h6>
                <h6 style={{ color: "grey" }}>#3458745</h6>
              </div>
            </div>
            <div className="price">
              <h4>$69.967</h4>
            </div>
          </div>

          <div className="total mt-5 pt-3 d-flex justify-content-around align-items-center">
            <p>Total Cost</p>
            <p>$159.98</p>
          </div>
        </div>
        <div className="shipment mt-3 d-flex justify-content-center align-items-center">
          <span>
            <MdOutlineLocalShipping
              color={"black"}
              style={{ marginRight: "20px" }}
            />
          </span>
          <p>
            You are 30.02 from <br /> free shipping{" "}
          </p>
        </div>

        <br />
      </div>
     
    </>
  );
};

export default Cart;
