import { useState } from "react";
import { useEffect } from "react";
import data from "../../../data.json";
import { ListProductsStyled } from "./ListProductsStyled";

export const ListProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5173/products/")
      .then((resp) => {
        return resp.json();
      })
      .then((resp) => {
        setProducts(resp);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <ListProductsStyled>
      <h1>PRODUCTS</h1>

      {data.products.map((product, index) => (
        <div key={index}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </ListProductsStyled>
  );
};

export default ListProducts;
