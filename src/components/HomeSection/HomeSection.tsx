'use client'

import {
  Container,
  TextContainer,
  InfosContainer,
  CodeItem,
} from './HomeSection.styles';
import picture from '../../assets/foto.webp'
import Image from 'next/image';

export function HomeSection() {
  return (
    <Container>
      <Image width={300} height={640} src={picture} alt="Minha foto" />
      <div>
        <TextContainer>
          <h1>Olá</h1>
          <h2>Me chamo Alex</h2>
        </TextContainer>
        <InfosContainer>
          <CodeItem>
            <span className='comment'>//Minha apresentação</span>
            <span className='purple'>Infos</span> {'\u007B'}
            <div>
              Nome: <span className='blue'>Alex,</span>
            </div>
            <div>
              Sobrenome: <span className='blue'>Silva</span>
            </div>
            {'\u007D'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}
