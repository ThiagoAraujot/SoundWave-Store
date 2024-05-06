import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  margin: 25vh auto 33vh auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled.form`
  width: 100%;
`;

export const InputGroup = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #FF753A;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Title = styled.h2`
  color: #333;
`;
