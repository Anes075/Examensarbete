import React from "react";
import "./breadcrumb.css";

const Breadcrumb = (props) => {
  const { product } = props;
  return (
    <div className="breadcrumb">
      <p>
        Home / Shop / {product.category} / {product.name}
      </p>
    </div>
  );
};

export default Breadcrumb;
