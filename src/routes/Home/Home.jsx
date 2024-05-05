import { HomeContainer, NewProductContainer, PopularFinds } from "./HomeStyled"
import ProductImage from "../../assets/images/bateria_pearl.png"
import ProductImage2 from "../../assets/images/fender_stratocaster.png"
import ProductImage3 from "../../assets/images/Teclado_Yamaha.webp"
import ProductImage4 from "../../assets/images/violao_taylor.png"
import ProductImage5 from "../../assets/images/sax_alto.webp"
const Home = () => {
  return (
    <>
      <HomeContainer>
        <h1>Completando sonhos <br /> junto com <br /> cordas</h1>
        <p>Descubra como podemos ajudar a realizar seus sonhos <br /> com nossos serviços personalizados</p>
        <button>Veja Mais</button>
      </HomeContainer>
      <NewProductContainer>
        <span></span>
        <h1>Novos Produtos</h1>
        <div>
          <div className="card-container">
            <div>
              <img src={ProductImage} alt="" />
            </div>
            <div>
              <h2>Bateria Pearl Export EXX</h2>
              <p>R$ 1200,00</p>
            </div>
          </div>
          <div className="card-container">
            <div>
              <img src={ProductImage2} alt="" />
            </div>
            <div>
              <h2>Guitarra Fender Stratocaster</h2>
              <p>R$ 750,00</p>
            </div>
          </div>
          <div className="card-container">
            <div>
              <img src={ProductImage3} alt="" />
            </div>
            <div>
              <h2>Teclado Yamaha PSR-E373</h2>
              <p>R$ 300,00</p>
            </div>
          </div>
        </div>
      </NewProductContainer>
      <PopularFinds>
        <span></span>
      <h2>Mais buscados</h2>
        <div>
          <div className="card-container">
            <div>
              <img src={ProductImage4} alt="" />
            </div>
            <div>
              <h2>Violão Taylor 314ce</h2>
              <p>R$ 1850,00</p>
            </div>
          </div>
          <div className="card-container">
            <div>
              <img src={ProductImage5} alt="" />
            </div>
            <div>
              <h2>Saxofone Alto Yamaha YAS-280</h2>
              <p>R$ 1050,00</p>
            </div>
          </div>
        </div>

      </PopularFinds>
     
    </>
  )

}

export default Home
