import { Header } from '../components/Header/Header';
import { HomeContainer } from '../styles/HomeStyles';
import { HomeSection } from '../components/HomeSection/HomeSection';
import { Technologies } from '../components/Technologies/Technologies';
import { Projects } from '../components/Projects/Projects';
import { HardSkills } from '../components/HardSkills/HardSkills';
import { FormContact } from '../components/FormContact/FormContact';
import { Footer } from '../components/Footer/Footer';

export default function Home() {
  return (
    <HomeContainer>
      <Header />

      <main className="container">
        <HomeSection />
        <Technologies />
        <Projects />
        <HardSkills />
        <FormContact />
      </main>
      <Footer />
    </HomeContainer>
  );
}
