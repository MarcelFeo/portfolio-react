import React from 'react';
import Header from '../Header';

import { Container, Form, Input, TextArea, InputButton, Title } from './styles';

export default function Contact() {
  return (
    <>
        <Header />

        <Container>
          <Title>Entre em <span>contato</span> comigo! 👋</Title>

          <Form id="contactform" action="https://formsubmit.io/send/marcelfeo29@gmail.com" method="POST">
            <Input name="name" type="text" id="name" placeholder="Name" />

            <Input name="email" type="email" id="email" placeholder="Email" />

            <TextArea name="comment" id="comment" rows="3" placeholder="Message" style={{resize: 'none'}}></TextArea>

            <InputButton value="Submit" type="submit" />
          </Form>
        </Container>
    </>
  )
}
