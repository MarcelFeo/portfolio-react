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
        <AwesomeSlider>
          <ImgContainer>
            <Image src="imsorry.png" alt="imsorry" />
          </ImgContainer>
          <ImgContainer>
            <Image src="pokenext.png" alt="pokenext" />
          </ImgContainer>
          <ImgContainer>
            <Image src="audiobook.png" alt="audiobook" />
          </ImgContainer>
          <ImgContainer>
            <ImageApp src="playmusic.jpeg" alt="playmusic" />
          </ImgContainer>
          <ImgContainer>
            <Image src="didyouknow.png" alt="didyouknow" />
          </ImgContainer>
        </AwesomeSlider>
      </Container>

      <div><Text>Para saber mais sobre os <span>meus projetos</span> acesse meu GitHub:</Text></div>

      <GitHubContainer><SocialLink href="https://github.com/MarcelFeo" target="_blank" rel="noopener"><GithubLogo /></SocialLink></GitHubContainer>
    </>
  )
}
