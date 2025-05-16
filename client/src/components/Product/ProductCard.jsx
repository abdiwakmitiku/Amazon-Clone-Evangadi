import React from "react";
import { Rating } from "@mui/material";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from "./../Product/Product.module.css";
import { Link } from "react-router";

function ProductCard({ product, flex, renderDesc }) {
  const { image, title, id, rating, price, description } = product;
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <>
      <div
        className={`${classes.card__container} ${
          flex ? classes.product_flexed : ""
        } `}
      >
        <Link to={`/products/${id}`}>
          <img src={image} alt="" />
          <div>
            {renderDesc?(<h3>{(title)}</h3>):(<h3>{truncate(title, 45)}</h3>)}
            {renderDesc && <div style={{maxWidth:"750px"}}>{description}</div>}
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
        </Link>
      </div>
    </>
  );
}

export default ProductCard;
