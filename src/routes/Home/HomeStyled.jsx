import styled from "styled-components";
import bannerImg from "../../assets/images/home-img.jpeg";

export const HomeContainer = styled.div`
  background-image: url(${bannerImg});
  background-size: cover;
  background-position: center;
  height: 90vh;
  
  display: flex;
  justify-content: end;
  padding: 2em;
  align-items: center;
  text-align: right;

  h1 {
    font-size: 3.5em;
    color: #fff;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
`;
