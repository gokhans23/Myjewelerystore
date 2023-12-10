import React from "react";
import { useParams } from "react-router-dom";
import { cardsData } from "../helpers/Data";

export const ProductDetail = () => {
  const { id } = useParams();

  const product = cardsData.find((item) => item.id === parseInt(id));

  if (!product) {
    return <div>Ürün bulunamadı!</div>;
  }

  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.price}</p>
      {}
    </div>
  );
};
