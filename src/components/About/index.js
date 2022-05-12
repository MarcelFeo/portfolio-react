import React from 'react';
import Header from '../Header';

import TypeAnimation from 'react-type-animation';

import { Container, Text, IconsContainer, GithubLogo, WhatsappLogo, LinkedInLogo, SocialLink } from './styles';

export default function About() {
  const data = new Date();
  const year = data.getFullYear();

  const textAbout = `Meu nome é Marcel Fernando, tenho ${year - 2004} anos e atualmente sou autodidata. Recentemente, tenho me apaixonado cada vez mais pela área de Desenvolvimento Web então venho participando de muitos eventos e também frequentemente faço cursos novos em assuntos de programação Front-End e design UI/UX, a fim de manter-me atualizado sobre os mais recentes métodos e tecnologias disponíveis para realizar as minhas aplicações e otimizar os sistemas e trabalhos que faço parte.`

   return (
    <>
      <Header />

      <Container>
      {/* <Text style={{ width: '40em' }}>
        <TypeAnimation
          cursor={true}
          sequence={[textAbout, 1000]}
        />
      </Text> */}

        <Text>{textAbout}</Text>

        <IconsContainer>
          <SocialLink href="https://github.com/MarcelFeo" target="_blank" rel="noopener"><GithubLogo /></SocialLink>
          <SocialLink href="https://api.whatsapp.com/send?phone=5534984154011&text=Oi, Marcel" target="_blank" rel="noopener"><WhatsappLogo /></SocialLink>
          <SocialLink href="https://www.linkedin.com/in/marcelfeo/" target="_blank" rel="noopener"><LinkedInLogo /></SocialLink>
        </IconsContainer>
      </Container>
    </>
  )
}
