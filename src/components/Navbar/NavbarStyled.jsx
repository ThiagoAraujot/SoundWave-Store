import styled from "styled-components";

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 2rem;
  background-color: #505050;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    img {
      width: 64px;
      filter: invert(100%);
    }
    
    h1 {
      font-size: 1.5rem;
      font-weight: 300;
      color: #fff;
      
      span {
        font-weight: 600;
      }
    }
  }

  ul {
    display: flex;
    gap: 1rem;
  }

  li {
    list-style: none;
    cursor: pointer;
    color: #fff;
    font-weight: 500;
    font-size: 1.1rem;
  }

  button {
    padding: 0.5rem 1rem;
    background-color: #AB0433;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

`