import { Header } from '../components/Header/Header';
import { HomeContainer } from '../styles/HomeStyles';
import { HomeSection } from '../components/HomeSection/HomeSection';

export default function Home() {
  return (
    <HomeContainer>
      <Header />

      <main className="container">
        <HomeSection />
      </main>
    </HomeContainer>
  );
}
