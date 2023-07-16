'use client'

import { ProjectContainer } from '../../styles/ProjectsStyles';
import { Header } from '../../components/Header/Header';
import { ProjectCard } from '../../components/ProjectCard/ProjectCard';
import { ThemeProvider } from 'styled-components';
import theme from '../../styles/theme';
import GlobalStyles from '../../styles/global';

export default function Projects() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ProjectContainer>
        <Header />
        <main className="container">
          <ProjectCard
            title="Projeto 01"
            type="Website"
            slug="teste"
            imgUrl="https://www.aplyca.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fc63hsprlvlya%2F4K9lrWe8mBdvn36U2Azrb1%2Ff9b030ceee2f2d3a5919836858045b4b%2FiStock-1163113594.jpg&w=750&q=75"
          />
          <ProjectCard
            title="Projeto 01"
            type="Website"
            slug="teste"
            imgUrl="https://www.aplyca.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fc63hsprlvlya%2F4K9lrWe8mBdvn36U2Azrb1%2Ff9b030ceee2f2d3a5919836858045b4b%2FiStock-1163113594.jpg&w=750&q=75"
          />{' '}
          <ProjectCard
            title="Projeto 01"
            type="Website"
            slug="teste"
            imgUrl="https://www.aplyca.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fc63hsprlvlya%2F4K9lrWe8mBdvn36U2Azrb1%2Ff9b030ceee2f2d3a5919836858045b4b%2FiStock-1163113594.jpg&w=750&q=75"
          />{' '}
          <ProjectCard
            title="Projeto 01"
            type="Website"
            slug="teste"
            imgUrl="https://www.aplyca.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fc63hsprlvlya%2F4K9lrWe8mBdvn36U2Azrb1%2Ff9b030ceee2f2d3a5919836858045b4b%2FiStock-1163113594.jpg&w=750&q=75"
          />
        </main>
      </ProjectContainer>
    </ThemeProvider>
  );
}
