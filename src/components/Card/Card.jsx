import PropTypes from "prop-types";
import { CardContainer } from "./CardStyled";

const Card = ({ product, onEdit }) => {
  return (
    <CardContainer>
      <div>
        <img src={product.image} alt="" />
      </div>
      <div>
        <h2>{product.name}</h2>
        <p>{product.price}</p>
        <p>{product.description}</p>
        <button onClick={onEdit}>Editar Produto</button>
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
};
export default Card;
