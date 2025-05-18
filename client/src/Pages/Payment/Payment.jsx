import React from "react";
import classes from "./Payment.module.css";
import LayOut from "../../components/Layout/LayOut";

function Payment() {
  return (
    <LayOut>
      <section>
          <h1 style={{ padding: "30px" }}>Results</h1>
          <p style={{ padding: "30px" }}>Category/{categoryName}</p>
          <hr />
          {isLoading ? (
            <Loader />
          ) : (
            <div className={classes.products_container}>
              {Results?.map((product) => (
                <ProductCard key={product.id} product={product} renderDesc={false} renderAdd={true} />
              ))}
            </div>
          )}
        </section>
    </LayOut>
  );
}

export default Payment;
