import React from 'react';
import { Form, Input, FileInput, Textarea } from '@rocketseat/unform';
import { Container } from './styles';

export default function New() {
  return (
    <Container>
      <Form>
        <FileInput></FileInput>
        <Input></Input>
        <Textarea></Textarea>
        <Input></Input>
        <Input></Input>
      </Form>
    </Container>
  );
}
