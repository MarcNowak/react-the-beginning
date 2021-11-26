import React from 'react';
import Container from '../Container/Container';
import { faqSubPage } from '../../data/dataStore';
import Hero from '../Hero/Hero';

const Faq = () => (
  <Container>
    <Hero image={faqSubPage.image} />
    
    <h2>{faqSubPage.navTitle}</h2>
    <p>{faqSubPage.content}</p>
  </Container>
);

export default Faq;