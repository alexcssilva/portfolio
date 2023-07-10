import { Header } from '../components/Header/Header';
import { HomeContainer } from '../styles/HomeStyles';
import { HomeSection } from '../components/HomeSection/HomeSection';
import { Technologies } from '../components/Technologies/Technologies';

export default function Home() {
  return (
    <HomeContainer>
      <Header />

      <main className="container">
        <HomeSection />
        <Technologies />
      </main>
    </HomeContainer>
  );
}
