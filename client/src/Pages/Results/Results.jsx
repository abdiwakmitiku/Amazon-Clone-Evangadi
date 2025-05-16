import React, { useEffect, useState } from "react";
import classes from "./Results.module.css";
import LayOut from "../../components/Layout/LayOut";
import { useParams } from "react-router";
import axios from "axios";
import { productUrl } from "../../API/EndPoint";
import ProductCard from "../../components/Product/ProductCard";
import Loader from "../../components/Loader/Loader";

function Results() {
  const [Results, setResults] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const { categoryName } = useParams();
  useEffect(() => {
    setisLoading(true);
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        setResults(res.data);
        setisLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <LayOut>
      <>
        <section>
          <h1 style={{ padding: "30px" }}>Results</h1>
          <p style={{ padding: "30px" }}>Category/{categoryName}</p>
          <hr />
          {isLoading ? (
            <Loader />
          ) : (
            <div className={classes.products_container}>
              {Results?.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </section>
      </>
    </LayOut>
  );
}

export default Results;
