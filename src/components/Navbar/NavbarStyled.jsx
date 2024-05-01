import styled from "styled-components";

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #f5f5f5;

  h1 {
    font-size: 1.5rem;
  }

  ul {
    display: flex;
    gap: 1rem;
  }

  li {
    list-style: none;
    cursor: pointer;
  }

  button {
    padding: 0.5rem 1rem;
    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

`