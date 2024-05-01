import { useState } from "react";
import { useEffect } from "react";
import data from "../../../data.json";
import { ListProductsStyled } from "./ListProductsStyled";
import Card from "../../components/Card/Card";

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
          <Card key={index} product={product}/>
      ))}
    </ListProductsStyled>
  );
};

export default ListProducts;
