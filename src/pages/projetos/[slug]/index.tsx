import { ContainerSlug } from '../../../styles/ProjectsStyles';
import { Header } from '../../../components/Header/Header';
import { BannerProject } from '../../../components/BannerProject/BannerProject';
import { ThemeProvider } from 'styled-components';
import theme from '../../../styles/theme';
import GlobalStyles from '../../../styles/global';

export default function Project() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ContainerSlug>
        <Header />
        <BannerProject
          title="Projeto 1"
          type="Website"
          imgUrl='"https://www.aplyca.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fc63hsprlvlya%2F4K9lrWe8mBdvn36U2Azrb1%2Ff9b030ceee2f2d3a5919836858045b4b%2FiStock-1163113594.jpg&w=750&q=75"'
        />

        <main>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
            tenetur quidem sunt tempore blanditiis voluptatem, cupiditate
            provident iure omnis aut obcaecati possimus voluptates totam iste.
            Dolorem impedit odit tempora porro. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Magnam tenetur quidem sunt tempore
            blanditiis voluptatem, cupiditate provident iure omnis aut obcaecati
            possimus voluptates totam iste. Dolorem impedit odit tempora porro.
          </p>
          <button type="button">
            <a href="#">Ver projeto online</a>
          </button>
        </main>
      </ContainerSlug>
    </ThemeProvider>
  );
}
