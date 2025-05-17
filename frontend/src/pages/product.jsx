import React, { useContext } from "react";
import { ShopContext } from "../context/shopContext";
import { useParams } from "react-router-dom";
import Breadcrumb from "../components/breadcrumbs/breadcrumb";

const Product = () => {
  const { allProducts } = useContext(ShopContext);
  const { productId } = useParams();
  const product = allProducts.find((i) => i.id === Number(productId));

  return (
    <div>
      <Breadcrumb product={product} />
    </div>
  );
};

export default Product;
