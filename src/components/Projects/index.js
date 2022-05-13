import React from 'react';
import Header from '../Header';

import { Container, ImgContainer, Image, ImageApp, Text, GithubLogo, SocialLink, GitHubContainer } from './styles';

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

export default function Projects() {
  return (
    <>
      <Header />

      <Container>

      </Container>

      <div><Text>Para saber mais sobre os <span>meus projetos</span> acesse meu GitHub:</Text></div>

      <GitHubContainer><SocialLink href="https://github.com/MarcelFeo" target="_blank" rel="noopener"><GithubLogo /></SocialLink></GitHubContainer>
    </>
  )
}
