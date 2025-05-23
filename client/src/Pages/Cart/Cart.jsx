// import React, { useContext } from "react";
// import classes from "./Cart.module.css";
// import LayOut from "../../components/Layout/LayOut";
// import { DataContext } from "../../components/DataProvider/DataProvider";
// import ProductCard from "../../components/Product/ProductCard";
// import CurrencyFormat from "../../components/CurrencyFormat/CurrencyFormat";
// import { Link } from "react-router";
// import { Type } from "../../Utility/action.type";
// import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

// function Cart() {
//   const [{ basket, user }, dispatch] = useContext(DataContext);
//   const total = basket.reduce((amount, item) => {
//     return item.price * item.amount + amount;
//   }, 0);

//   const increment = (item) => {
//     dispatch({
//       type: Type.ADD_TO_BASKET,
//       item,
//     });
//   };

//   const decrement = (id) => {
//     dispatch({
//       type: Type.REMOVE_FROM_BASKET,
//       id,
//     });
//   };

//   return (
//     <LayOut>
//       <section className={classes.container}>
//         <div className={classes.cart_container}>
//           <h2>Hello</h2>
//           <h3>Your shopping basket</h3>
//           <hr />

//           {basket?.length === 0 ? (
//             <p>Opps! No Item in Your Cart</p>
//           ) : (
//             basket?.map((item, i) => (
//               <section className={classes.cart_align}>
//                 {" "}
//                 <div className={classes.cart_product} key={i}>
//                   <ProductCard
//                     renderAdd={false}
//                     product={item}
//                     renderDesc={true}
//                     flex={true}
//                   />
//                 </div>
//                 <div className={classes.btn_container}>
//                   <button
//                     className={classes.btn}
//                     onClick={() => increment(item)}
//                   >
//                     <IoIosArrowUp size={20} />
//                   </button>
//                   <span>{item.amount}</span>
//                   <button
//                     className={classes.btn}
//                     onClick={() => decrement(item.id)}
//                   >
//                     <IoIosArrowDown size={20} />
//                   </button>
//                 </div>
//               </section>
//             ))
//           )}
//         </div>

//         {basket?.length !== 0 && (
//           <div className={classes.subtotal}>
//             <div>
//               <p>Subtotal ({basket?.length} items)</p>
//               <CurrencyFormat amount={total} />
//             </div>
//             <span>
//               <input type="checkbox" id="gift" />
//               <label htmlFor="gift">This order contains a gift</label>
//             </span>
//             <Link to="/payments">Continue to Checkout</Link>
//           </div>
//         )}
//       </section>
//     </LayOut>
//   );
// }

// export default Cart;

import React, { useContext } from "react";
import classes from "./Cart.module.css";
import LayOut from "../../components/Layout/LayOut";
import { DataContext } from "../../components/DataProvider/DataProvider";
import ProductCard from "../../components/Product/ProductCard";
import CurrencyFormat from "../../components/CurrencyFormat/CurrencyFormat";
import { Link } from "react-router";
// import { Type } from "../../Utility/action.type";
// import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

function Cart() {
  const [{ basket, user }, dispatch] = useContext(DataContext);
  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);

  // const increment = (item) => {
  //   dispatch({
  //     type: Type.ADD_TO_BASKET,
  //     item,
  //   });
  // };

  // const decrement = (id) => {
  //   dispatch({
  //     type: Type.REMOVE_FROM_BASKET,
  //     id,
  //   });
  // };

  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.cart_container}>
          <h2>Hello</h2>
          <h3>Your shopping basket</h3>
          <hr />

          {basket?.length === 0 ? (
            <p>Opps! No Item in Your Cart</p>
          ) : (
            basket?.map((item, i) => {
                // <div className={classes.cart_product}>
                  return <ProductCard
                    key={i}
                    product={item}
                    renderDesc={true}
                    renderAdd={false}
                    flex={true}
                  />
                // </div>
                {/* <div className={classes.btn_container}>
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
                </div> */}
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
              <input type="checkbox" id="gift" />
              <small htmlFor="gift">This order contains a gift</small>
            </span>
            <Link to="/payments">Continue to Checkout</Link>
          </div>
        )}
      </section>
    </LayOut>
  );
}

export default Cart;
