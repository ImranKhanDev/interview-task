import React from "react";
import AppBar from "./AppBar";
import Cart from "./Cart";
import Payment from "./Payment";
import Shipping from "./Shipping";
import { IoMdArrowBack } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineLocalShipping } from "react-icons/md";
function Home() {
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col col-md-6 text-start">
            <h4>Shipping & Payment</h4>
          </div>
          <div className="col col-md-6">
            <div className="icon d-flex justify-content-end">
              <span
                className="me-2 "
                style={{
                  border: "1px solid green",
                  borderRadius: "50%",
                  cursor: "pointer",
                }}
              >
                <AiOutlineShoppingCart
                  color={"black"}
                  style={{ width: "30px", height: "20px" }}
                />
              </span>
              <hr
                width="20%"
                className="text-center"
                style={{ height: "2px" }}
              />
              <span className="ms-2">
                <MdOutlineLocalShipping
                  style={{
                    cursor: "pointer",
                    color: "white",

                    padding: "6px 0px",
                    background: "#59CE8F",
                    borderRadius: "50%",
                  }}
                  size={30}
                />
              </span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <Shipping />
          </div>
          <div className="col-md-4">
            <Payment />
          </div>
          <div className="col-md-4">
            {" "}
            <Cart />
          </div>
        </div>
        <div className=" d-flex justify-content-between align-items-center ">
          <div className="back d-flex justify-content-around align-items-center">
            <span>
              <IoMdArrowBack />
            </span>
            <p className="mb-0 ms-3">Back</p>
          </div>
          <div
            className="button mb-3  d-flex
      justify-content-end
      "
          >
            <button className="btn1" style={{ marginRight: "30px" }}>
              CONTINUE SHOPPING
            </button>
            <button className="btn1" style={{ background: "#59CE8F" }}>
              PROCEED TO SHIPPING
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
