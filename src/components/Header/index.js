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
                    <ListItem><LinkItem href="/projects">Projects</LinkItem></ListItem>
                    <ListItem><LinkItem href="/about">About</LinkItem></ListItem>
                    <ListItem><LinkItem href="/contact">Contact</LinkItem></ListItem>
                </List>
            </ListContainer>
        </Container>
    </>
  )
}