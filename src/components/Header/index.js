import React from 'react'

import { 
    Container, 
    LinkItem, 
    List, 
    ListContainer, 
    ListItem, 
    Logo, 
    LogoContainer, 
} from './styles';

export default function Home() {
  return (
    <>
        <Container>
            <LogoContainer>
                <Logo><img src="/coding.png" alt="logo" /></Logo>
            </LogoContainer>
            <ListContainer>
                <List>
                    <ListItem><LinkItem href="/">Home</LinkItem></ListItem>
                    <ListItem><LinkItem href="/projects">Projetos</LinkItem></ListItem>
                    <ListItem><LinkItem href="/about">Sobre</LinkItem></ListItem>
                    <ListItem><LinkItem href="/contact">Contato</LinkItem></ListItem>
                </List>
            </ListContainer>
        </Container>
    </>
  )
}