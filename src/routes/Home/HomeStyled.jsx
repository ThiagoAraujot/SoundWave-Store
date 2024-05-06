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
padding: 10rem;
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
export const NewProductContainer = styled.div`
display: flex;
    font-family: 'Work Sans', 'Roboto', sans-serif;
    padding: 5rem 0;
    flex-direction: column;
    align-items: center;
    

  h1{
    color: #505050;
  

  }

  span {
    width: 10rem;
    height: 0.15rem;
    background-color: #AB0433;
    margin-bottom: 1rem;
  
  }

  div {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
  }
  div.card-container{
    box-shadow: 0px 12px 32px 0px #0000000D;
  box-shadow: 0px 2px 4px 0px #1C054D1F;
    display: flex;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 1rem;
  padding: 1rem;
  width: 300px;
  height: 25rem;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 5px;
  }

  h2 {
    font-size: 1.5rem;
    color: #333;
  }

  p {
    font-size: 1rem;
    color: #666;
  }

  button {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 5px;
    background-color: #FF753A;
    color: #fff;
    cursor: pointer;
  }

display: flex;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 1rem;
  padding: 1rem;
  width: 300px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 5px;
  }

  h2 {
    font-size: 1.5rem;
    color: #333;
  }

  p {
    font-size: 1rem;
    color: #666;
  }

  button {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 5px;
    background-color: #FF753A;
    color: #fff;
    cursor: pointer;
  }
`;
export const PopularFinds = styled.div`
display: flex;
    background-color: #ECECEC;
    font-family: 'Work Sans', 'Roboto', sans-serif;
    padding: 5rem 0;
    flex-direction: column;
    align-items: center;
    

  h2{
    color: #505050;
    font-size: 2rem;

  }

span {
  width: 10rem;
  height: 0.15rem;
  background-color: #AB0433;
  margin-bottom: 1rem;

}

  div {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
  }
  div.card-container{
    box-shadow: 0px 12px 32px 0px #0000000D;

  box-shadow: 0px 2px 4px 0px #1C054D1F;
  

    display: flex;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 1rem;
  padding: 1rem;
  width: 300px;
  height: 25rem;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 5px;
  }

  h2 {
    font-size: 1.5rem;
    color: #333;
  }

  p {
    font-size: 1rem;
    color: #666;
  }

  button {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 5px;
    background-color: #FF753A;
    color: #fff;
    cursor: pointer;
  }

display: flex;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 1rem;
  padding: 1rem;
  width: 300px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 5px;
  }

  h2 {
    font-size: 1.5rem;
    color: #333;
  }

  p {
    font-size: 1rem;
    color: #666;
  }

  button {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 5px;
    background-color: #FF753A;
    color: #fff;
    cursor: pointer;
  }
`;





