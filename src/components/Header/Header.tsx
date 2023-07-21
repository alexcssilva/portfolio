'use client';

import NavLink from './NavLink';
import { Container } from './Header.styles';
import { useEffect, useState } from 'react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 0);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container isTransparent={isScrolled}>
      <ul>
        <NavLink title="Início" path="/#home" />
        <NavLink title="Habilidades" path="/#skills" includes />
        <NavLink title="Projetos" path="/#projects" />
        <NavLink title="Contato" path="/#contact" />
      </ul>
    </Container>
  );
}
