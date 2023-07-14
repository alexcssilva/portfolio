import { Header } from '../components/Header/Header';
import { HomeContainer } from '../styles/HomeStyles';
import { HomeSection } from '../components/HomeSection/HomeSection';
import { Technologies } from '../components/Technologies/Technologies';
import { Projects } from '../components/Projects/Projects';
import { HardSkills } from '../components/HardSkills/HardSkills';

export default function Home() {
  return (
    <HomeContainer>
      <Header />

      <main className="container">
        <HomeSection />
        <Technologies />
        <Projects />
        <HardSkills />
      </main>
    </HomeContainer>
  );
}
