import styled from 'styled-components';
import bannerImg from "../../assets/images/home-img.jpeg";


export const ContactPage = styled.div`
  background-image: url(${bannerImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100vh;
  padding-right: 150px;
`;

export const ContactFormWrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.7);
  padding: 50px;
  border-radius: 10px;
  width: 400px;
`;

export const ContactHeaderText = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #272262;
`;

export const ContactInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: none;
  border-radius: 5px;
`;

export const ContactTextarea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: none;
  border-radius: 5px;
`;

export const ContactButton = styled.button`
  background-color: #272262;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #4038a0;
  }
`;

export const ContactErrorMessage = styled.div`
  text-align: center;
  color: #ff0000;
  padding: 10px;
  border-radius: 5px;
`;

