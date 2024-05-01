import styled from "styled-components";

export const ListProductsStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;

  h1 {
    font-size: 30px;
    margin: 20px 0;
    width: 100%;
    text-align: center;
  }

  div {
    width: 300px;
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 5px;
    margin-top: 20px;

    h2 {
      font-size: 20px;
      margin-bottom: 10px;
    }

    p {
      font-size: 16px;
      margin-bottom: 10px;
    }
  }
`;
