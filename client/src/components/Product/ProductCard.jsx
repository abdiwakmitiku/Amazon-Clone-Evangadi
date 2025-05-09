import React from "react";
import { Rating } from "@mui/material";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from "./../Product/Product.module.css";

function ProductCard({ product }) {
  const { image, title, rating, price } = product;
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <>
      <div className={classes.card__container}>
        <a href="">
          <img src={image} alt="" />
          <div>
            <h3>{truncate(title, 45)}</h3>
            <div className={classes.rating}>
              {/* rating */}
              <Rating value={rating?.rate} precision={0.1} />
              {/* count */}
              <small>{rating?.count}</small>
            </div>
            <div>
              {/* price */}
              <CurrencyFormat amount={price} />
            </div>
            <button className={classes.button}>Add to Cart</button>
          </div>
        </a>
      </div>
    </>
  );
}

export default ProductCard;
