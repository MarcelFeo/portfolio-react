import React from 'react';
import { Container, Title, Subtitle, IconsContainer, Image, ImgContainer, MainContainer } from './styles'

export default function Main() {
  return (
    <>
      <Container>
        <MainContainer>
          <Title>Marcel</Title>
          <Subtitle>Front-End Developer</Subtitle>
          <IconsContainer>
            <Image src="html-5(1).png" alt="html" />
            <Image src="css-3.png" alt="css" />
            <Image src="js.png" alt="javascript" />
            <Image src="typescript.png" alt="typescript" />
            <Image src="physics.png" alt="react" />
            <Image src="sass(1).png" alt="sass" />
            <Image src="python.png" alt="python" />
            <Image src="git.png" alt="git" />
            <Image src="figma.png" alt="figma" />
          </IconsContainer>
        </MainContainer>
        <ImgContainer>
          <img src="developer-remove.png" alt="imagem" />
        </ImgContainer>
      </Container>
    </>
  )
}