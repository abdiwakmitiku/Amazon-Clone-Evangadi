import React, { useContext } from "react";
import classes from "./Cart.module.css";
import LayOut from "../../components/Layout/LayOut";
import { DataContext } from "../../components/DataProvider/DataProvider";
import ProductCard from "../../components/Product/ProductCard";
import CurrencyFormat from "../../components/CurrencyFormat/CurrencyFormat";
import { Link } from "react-router";
import { Type } from "../../Utility/action.type";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

function Cart() {
  const [{ basket, user }, dispatch] = useContext(DataContext);
  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);

  const increment = (item) => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item,
    });
  };
  const decrement = (id) => {
    dispatch({
      type: Type.REMOVE_FROM_BASKET,
      id,
    });
  };

  return (
    <>
      <LayOut>
        <section className={classes.container}>
          <div className={classes.cart_container}>
            <h2>Hello</h2>
            <h3>Your Shopping Basket</h3>
            <hr />
            {basket?.length == 0 ? (
              <p>Opps! No Item in Your Cart</p>
            ) : (
              basket?.map((item, i) => {
                return (
                  <div className={classes.cart_product}>
                    <ProductCard
                      renderAdd={false}
                      key={i}
                      product={item}
                      renderDesc={true}
                      flex={true}
                    />
                    <div className={classes.btn.container}>
                      <button
                        className={classes.btn}
                        onClick={() => increment(item)}
                      >
                        <IoIosArrowUp size={20} />
                      </button>
                      <span>{item.amount}</span>
                      <button
                        className={classes.btn}
                        onClick={() => decrement(item.id)}
                      >
                        <IoIosArrowDown size={20} />
                      </button>
                    </div>
                  </div>
                  // <div className={classes.cart_product} key={i}>
                  //   <ProductCard
                  //     renderAdd={false}
                  //     product={item}
                  //     renderDesc={true}
                  //     flex={true}
                  //   />
                  //   <div className={classes.quantity_control}>
                  //     <button onClick={() => increment(item)}>
                  //       <IoIosArrowUp size={20} />
                  //     </button>
                  //     <span>{item.amount}</span>
                  //     <button onClick={() => decrement(item.id)}>
                  //       <IoIosArrowDown size={20} />
                  //     </button>
                  //   </div>
                  // </div>
                );
              })
            )}
          </div>
          {basket?.length !== 0 && (
            <div className={classes.subtotal}>
              <div>
                <p>Subtotal ({basket?.length} items)</p>
                <CurrencyFormat amount={total} />
              </div>
              <span>
                <input type="checkbox" />
                <small>This order Contains a Gift</small>
              </span>
              <Link to="payments">Continue to Checkout</Link>
            </div>
          )}
        </section>
      </LayOut>
    </>
  );
}

export default Cart;
