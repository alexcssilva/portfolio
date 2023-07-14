'use client'

import { Container } from './FormContact.styles';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import Form from './Form';

export function FormContact() {
  return (
    <Container>
      <SectionTitle
        title={
          <>
            Precisa dos
            <br />
            meus serviços?
          </>
        }
        description='Preencha o formulário abaixo'
      />

      <Form />
    </Container>
  );
}
