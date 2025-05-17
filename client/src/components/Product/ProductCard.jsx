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
        style={{ paddingTop: "60px" }}
        className={`${classes.card__container} ${
          flex ? classes.product_flexed : ""
        } `}
      >
        <Link to={`/products/${id}`}>
          <img src={image} alt="" />
        </Link>
        <div>
          {renderDesc ? (
            <h3 style={{ fontSize: "4vh" }}>{title}</h3>
          ) : (
            <h3>{truncate(title, 45)}</h3>
          )}
          {renderDesc && <div style={{ width: "650px" }}>{description}</div>}
          <div className={classes.rating}>
            <Rating value={rating?.rate} precision={0.1} />

            <small>{rating?.count}</small>
          </div>
          <div>
            <CurrencyFormat amount={price} />
          </div>
          <button className={classes.button}>Add to Cart</button>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
