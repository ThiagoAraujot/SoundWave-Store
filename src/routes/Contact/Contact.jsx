import React, { useState } from 'react';
import { ContactPage, ContactFormWrapper, ContactHeaderText, ContactInput, ContactTextarea, ContactButton, ContactErrorMessage } from './ContactStyled';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false); 
  const [error, setError] = useState(false); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      console.log(formData);
      setSubmitted(true); 
      setError(false); 
    } else {
      setError(true); 
    }
  };

  return (
    <ContactPage>
      <ContactFormWrapper>
        {!submitted && <ContactHeaderText>Entre em Contato</ContactHeaderText>} {}
        {submitted ? (
          <p>Agradecemos pela mensagem, logo entraremos em contato!</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <ContactInput
              type="text"
              placeholder="Nome"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <ContactInput
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <ContactTextarea
              placeholder="Mensagem"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
            <ContactButton type="submit">Enviar</ContactButton>
          </form>
        )}
        {error && <ContactErrorMessage>Todos os campos são obrigatórios!</ContactErrorMessage>}
      </ContactFormWrapper>
    </ContactPage>
  );
};

export default Contact;
