import React, { useEffect, useState } from "react";
import classes from "./Results.module.css";
import LayOut from "../../components/Layout/LayOut";
import { useParams } from "react-router";
import axios from "axios";
import { productUrl } from "../../API/EndPoint";

function Results() {
  const [Results, setResults] = useState([]);
  const { categoryName } = useParams();
  useEffect(() => {
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        setResults(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <LayOut>
      <section>
        
      </section>
    </LayOut>
  );
}

export default Results;
