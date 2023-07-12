import { Header } from '../components/Header/Header';
import { HomeContainer } from '../styles/HomeStyles';
import { HomeSection } from '../components/HomeSection/HomeSection';
import { Technologies } from '../components/Technologies/Technologies';
import { Projects } from '../components/Projects/Projects';

export default function Home() {
  return (
    <HomeContainer>
      <Header />

      <main className="container">
        <HomeSection />
        <Technologies />
        <Projects />
      </main>
    </HomeContainer>
  );
}
