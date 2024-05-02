import styled from "styled-components";
import bannerImg from "../../assets/images/home-img.jpeg";

export const HomeContainer = styled.div`
background-image: url(${bannerImg});
background-size: cover;
background-position: center;
height: 90vh;

display: flex;
flex-direction: column; 
align-items: flex-end; 
justify-content: center; 
padding: 2em;
text-align: right;

h1, p {
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

h1 {
  font-size: 3.5em;
  margin-bottom: 20px;
}

p {
  font-size: 1.2em;
  margin-bottom: 10px;
}
button {
  width: 10em;
  padding: 0.5em 1em;
  border: 1px solid #000000;
  border-radius: 9px;
  background-color: white;
  color: #333;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background-color: #333;
    color: #000000;
    border: none;
  }
}
`;

