import PropTypes from "prop-types";
import { CardContainer } from "./CardStyled";

const Card = ({ product, onEdit, onRemove }) => {
  const currentUser = sessionStorage.getItem("user");

  return (
    <CardContainer>
      <div>
        <img src={product.image} alt="" />
      </div>
      <div>
        <h2>{product.name}</h2>
        <p>R$ {product.price.toFixed(2)}</p>
        <p>{product.description}</p>
        {currentUser != null && <button onClick={onEdit}>Editar Produto</button> }
        {currentUser != null && <button onClick={onRemove}>Remover Produto</button> }
        {currentUser == null && <button>Comprar</button>}
      </div>
    </CardContainer>
  );
};

Card.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
  onEdit: PropTypes.func.isRequired, // Garante que onEdit é uma função e é obrigatória
  onRemove: PropTypes.func.isRequired, // Garante que onRemove é uma função e é obrigatória
};
export default Card;
