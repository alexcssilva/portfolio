'use client'

import NavLink from './NavLink';
import { Container } from './Header.styles';
import { MdDarkMode } from 'react-icons/md';

export function Header() {
  return (
    <Container>
      <ul>
        <NavLink title="Início" path="/" />
        <NavLink title="Sobre" path="/" />
        <NavLink title="Habilidades" path="/" includes/>
        <NavLink title="Projetos" path="/" />
        <NavLink title="Contato" path="/" />
        <MdDarkMode size={24} color='black'/>
      </ul>
    </Container>
  );
}
