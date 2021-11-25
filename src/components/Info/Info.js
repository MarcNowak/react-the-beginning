import React from 'react';
import Container from '../Container/Container';
import { infoSubPage } from '../../data/dataStore';
import Hero from '../Hero/Hero';

const Info = () => (
  <Container>
    <Hero />
    <h2>{infoSubPage.title}</h2>
    <p>{infoSubPage.content}</p>
  </Container>
);

export default Info;