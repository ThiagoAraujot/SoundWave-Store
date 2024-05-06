import { HomeContainer, NewProductContainer, PopularFinds } from "./HomeStyled";
import { useState } from "react";
import data from "../../../data.json"; // Importando os produtos do JSON

const Home = () => {
  const [products] = useState(data.products); // Armazenando os produtos no estado

  return (
    <>
      <HomeContainer>
        <h1>Completando sonhos <br /> junto com <br /> cordas</h1>
        <p>Descubra como podemos ajudar a realizar seus sonhos <br /> com nossos serviços personalizados</p>
        <button >Veja Mais</button>
      </HomeContainer>
      <NewProductContainer>
        <span></span>
        <h1>Novos Produtos</h1>
        <div>
          {products.slice(0, 3).map((product, index) => (
            <div key={index} className="card-container">
              <div>
                <img src={product.image} alt="" />
              </div>
              <div>
                <h2>{product.name}</h2>
                <p>R$ {product.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </NewProductContainer>
      <PopularFinds>
        <span></span>
        <h2>Mais buscados</h2>
        <div>
          {products.slice(3, 5).map((product, index) => (
            <div key={index} className="card-container">
              <div>
                <img src={product.image} alt="" />
              </div>
              <div>
                <h2>{product.name}</h2>
                <p>R$ {product.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </PopularFinds>
    </>
  )
};

export default Home;
