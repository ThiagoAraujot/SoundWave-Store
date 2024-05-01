// import React from "react";
import PropTypes from "prop-types";


const Card = ({ product }) => {
    return (
        <div>
      <div>
        <img src={product.image} alt="" />
      </div>
      <div>
        <h2>{product.name}</h2>
        <p>{product.price}</p>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  product: PropTypes.object.isRequired,
};
export default Card;
