import { useState } from "react";
import CryptoJS from "crypto-js";
import {
  Button,
  Container,
  Input,
  InputGroup,
  Label,
  Title,
} from "./LoginStyled";
import { Form } from "react-router-dom";

export const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const currentUser = sessionStorage.getItem("user");

  if (currentUser != null && !isLoggedIn) {
    setIsLoggedIn(true);
  }

  const handleLogin = (event) => {
    event.preventDefault();
    const encryptedUser = CryptoJS.AES.encrypt(
      username,
      "secret key 123"
    ).toString();
    const encryptedPassword = CryptoJS.AES.encrypt(
      password,
      "secret key 123"
    ).toString();

    sessionStorage.setItem("user", encryptedUser);
    sessionStorage.setItem("password", encryptedPassword);

    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    sessionStorage.clear();
    setIsLoggedIn(false);
  };

  if (isLoggedIn) {
    return (
      <Container>
        <Title>Você está logado!</Title>
        <Button onClick={handleLogout}>Sair</Button>
      </Container>
    );
  }
  return (
    <Container>
      <Form onSubmit={handleLogin}>
        <Title>Login</Title>
        <InputGroup>
          <Label>Usuário</Label>
          <Input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </InputGroup>
        <InputGroup>
          <Label>Senha</Label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </InputGroup>
        <Button type="submit">Entrar</Button>
      </Form>
    </Container>
  );
};

export default Login;
