import React from 'react';
import Container from '../Container/Container';
import { faqSubPage } from '../../data/dataStore';
import Hero from '../Hero/Hero';

const Faq = () => (
  <Container>
    <Hero />
    <h2>{faqSubPage.title}</h2>
    <p>{faqSubPage.content}</p>
  </Container>
);

export default Faq;