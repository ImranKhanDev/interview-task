import React from "react";
import AppBar from "./AppBar";
import Cart from "./Cart";
import Payment from "./Payment";
import Shipping from "./Shipping";

function Home() {
  return (
    <>
    
      <div className="container">
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
      </div>
    </>
  );
}

export default Home;
