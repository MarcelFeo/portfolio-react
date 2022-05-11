import React from 'react';
import Header from '../Header';

import { Container, Text } from './styles';

export default function About() {
  const data = new Date();
  const year = data.getFullYear();

  return (
    <>
      <Header />

      <Container>
        <Text>
          Meu nome é Marcel Féo, tenho {year - 2004} anos e atualmente sou autodidata. Recentemente, tenho me apaixonado cada vez mais pela área de Desenvolvimento Web então venho participando de muitos eventos e estudando as tecnologias mais importantes para o cargo de Front-End.
        </Text>
      </Container>
    </>
  )
}
