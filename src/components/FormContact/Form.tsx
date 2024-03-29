import { FormContainer, Input, TextArea } from './FormContact.styles';

export default function Form() {
  return (
    <FormContainer>
      <Input placeholder="Nome" required />
      <Input placeholder="E-mail" type="email" required />
      <TextArea placeholder='Mensagem' required/>
      <button disabled type="submit">ENVIAR</button>
    </FormContainer>
  );
}
