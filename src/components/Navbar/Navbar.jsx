import { Link } from "react-router-dom";
import { NavContainer } from "./NavbarStyled";
import soundWave from "../../assets/images/ondas-sonoras.png";

const Navbar = () => {
  return (
    <NavContainer>
      <div>
        <img src={soundWave} alt="" />
        <h1>
          Sound<span>Wave</span>
        </h1>
      </div>

      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/products">
          <li>Produtos</li>
        </Link>
        <Link to="/contact">
          <li>Contato</li>
        </Link>
      </ul>

      <button>Login</button>
    </NavContainer>
  );
};

export default Navbar;
