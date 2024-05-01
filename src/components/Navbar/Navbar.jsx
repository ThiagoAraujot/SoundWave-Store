import { Link } from "react-router-dom";
import { NavContainer } from "./NavbarStyled";

const Navbar = () => {
  return (
    <NavContainer>
      <h1>Logo</h1>

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
