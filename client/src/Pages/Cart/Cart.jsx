import React, { useContext } from "react";
import classes from "./Cart.module.css";
import LayOut from "../../components/Layout/LayOut";
import { DataContext } from "../../components/DataProvider/DataProvider";

function Cart() {
   const [{basket, user}, dispatch]=useContext( DataContext)
  return (
    <LayOut>
      <section>
        <div>
          <h2>Hello</h2>
          <h3>Your Shopping Basket</h3>
          <hr />
          {/* {
            basket?.length==0?
          } */}
        </div>
        <div></div>
      </section>
    </LayOut>
  );
}

export default Cart;
