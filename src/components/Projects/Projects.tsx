'use client';

import { Container } from './Projects.styles';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import ProjectItem from './ProjectItem';
import Link from 'next/link';

export function Projects() {
  return (
    <Container>
      <SectionTitle title="Últimos Projetos" />

      <section>
        <ProjectItem
          img="https://www.aplyca.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fc63hsprlvlya%2F4K9lrWe8mBdvn36U2Azrb1%2Ff9b030ceee2f2d3a5919836858045b4b%2FiStock-1163113594.jpg&w=750&q=75"
          title="Projeto 01"
          type="Website"
          slug="teste"
        />
        <ProjectItem
          img="https://www.aplyca.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fc63hsprlvlya%2F4K9lrWe8mBdvn36U2Azrb1%2Ff9b030ceee2f2d3a5919836858045b4b%2FiStock-1163113594.jpg&w=750&q=75"
          title="Projeto 01"
          type="Website"
          slug="teste"
        />{' '}
        <ProjectItem
          img="https://www.aplyca.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fc63hsprlvlya%2F4K9lrWe8mBdvn36U2Azrb1%2Ff9b030ceee2f2d3a5919836858045b4b%2FiStock-1163113594.jpg&w=750&q=75"
          title="Projeto 01"
          type="Website"
          slug="teste"
        />
      </section>
      <button type="button">
        <Link legacyBehavior href="/projetos">
          <a href="">Ver todos os projetos</a>
        </Link>{' '}
      </button>
    </Container>
  );
}
