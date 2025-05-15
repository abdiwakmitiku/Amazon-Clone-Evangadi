import React, { useEffect, useState } from "react";
import classes from "./ProductDetail.module.css";
import LayOut from "../../components/Layout/LayOut";
import { useParams } from "react-router";
import axios from "axios";
import { productUrl } from "../../API/EndPoint";
import ProductCard from "../../components/Product/ProductCard";

function ProductDetail() {
  const [Product, setProduct] = useState([]);
  const { productId } = useParams();
  useEffect(() => {
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <LayOut>
      <ProductCard product={Product} />
    </LayOut>
  );
}

export default ProductDetail;
