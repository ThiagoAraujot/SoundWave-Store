import styled from "styled-components";

export const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: #333;
  color: #fff;
  padding: 10px;

  a {
    color: #fff;
    font-size: 20px;
  }

  a:hover {
    color: #f5f5f5;
  }
`;
