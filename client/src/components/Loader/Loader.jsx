import React from "react";
import { ClipLoader } from "react-spinners";

function Loader() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "50vh",
      }}
    >
      <ClipLoader color="rgba(54, 215, 183, 1)" />
    </div>
  );
}

export default Loader;
