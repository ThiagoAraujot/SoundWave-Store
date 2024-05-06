import styled from "styled-components";

export const ListProductsStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2rem;

  div {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
  }

  h1 {
    text-align: center;
    margin: 2rem 0;
    font-size: 2rem;
    color: #333;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  gap: 1rem;
  padding: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background: #ffffff;
`;

export const Input = styled.input`
  padding: 0.8rem;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

export const Button = styled.button`
  padding: 0.8rem;
  border-radius: 4px;
  border: none;
  background-color: #FF753A;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;
