import { useState } from "react";
import data from "../../../data.json";
import { Button, Input, ListProductsStyled } from "./ListProductsStyled";
import Card from "../../components/Card/Card";
import { Form } from "react-router-dom";

export const ListProducts = () => {
  const [products, setProducts] = useState(data.products);
  const [form, setForm] = useState({
    id: null,
    name: "",
    price: "",
    description: "",
    image: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const currentUser = sessionStorage.getItem("user");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const startEdit = (product) => {
    setForm(product);
    setIsEditing(true);
  };

  const submitProduct = (event) => {
    event.preventDefault();
    if (isEditing) {
      const updatedProducts = products.map((product) =>
        product.id === form.id
          ? { ...form, price: parseFloat(form.price) }
          : product
      );
      setProducts(updatedProducts);
      setIsEditing(false);
    } else {
      const newProduct = {
        ...form,
        id: products.length + 1,
        price: parseFloat(form.price),
        
      };
      setProducts([...products, newProduct]);
    }
    setForm({ id: null, name: "", price: "", description: "", image: "" }); // Reset form
  };

  const handleRemove = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  }

  return (
    <ListProductsStyled>
      <h1>Catálogo de Produtos</h1>

      {currentUser != null && (
        <Form onSubmit={submitProduct}>
          <Input
            type="text"
            name="name"
            placeholder="Nome do Produto"
            value={form.name}
            onChange={handleInputChange}
            required
          />
          <Input
            type="number"
            name="price"
            placeholder="Preço"
            value={form.price}
            onChange={handleInputChange}
            required
          />
          <Input
            name="description"
            placeholder="Descrição"
            value={form.description}
            onChange={handleInputChange}
            required
          />
          <Input
            type="text"
            name="image"
            placeholder="URL da Imagem"
            value={form.image}
            onChange={handleInputChange}
          />
          <Button type="submit">
            {isEditing ? "Atualizar Produto" : "Adicionar Produto"}
          </Button>
        </Form>
      )}

      <div>
        {products.map((product, index) => (
          <Card
            key={index}
            product={product}
            onEdit={() => startEdit(product)}
            onRemove={() => handleRemove(product.id)}
          />
        ))}
      </div>
    </ListProductsStyled>
  );
};

export default ListProducts;
