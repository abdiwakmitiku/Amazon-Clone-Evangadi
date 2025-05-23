import React, { useContext } from "react";
import { Rating } from "@mui/material";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from "./../Product/Product.module.css";
import { Link } from "react-router";
import { DataContext } from "../DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";

function ProductCard({ product, flex, renderDesc,renderAdd  }) {
  const { image, title, id, rating, price, description } = product;

  const [state, dispatch] = useContext(DataContext);

  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: {
        image,
        title,
        id,
        rating,
        price,
        description,
      },
    });
  };

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
            <h3>{title}</h3>
          ) : (
            <h3>{truncate(title, 45)}</h3>
          )}
          {renderDesc && <div style={{ width: "700px", fontWeight: "500" }}>{description}</div>}
          <div className={classes.rating}>
            <Rating value={rating?.rate} precision={0.1} />

            <small>{rating?.count}</small>
          </div>
          <div>
            <CurrencyFormat amount={price} />
          </div>
         { renderAdd &&  <button className={classes.button} onClick={addToCart}>Add to Cart</button>}

        </div>
      </div>
    </>
  );
}

export default ProductCard;
