import React from 'react';
import { Container, Text } from './styles';

import Header from '../Header';

export default function Thanks() {
  return (
    <>
        <Header />

        <Container>
            <Text>Muito Obrigado! Eu entrarei em <span>contato o mais breve possível</span></Text>
        </Container>
    </>
  )
}
