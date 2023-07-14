'use client'

import { Container } from './Footer.styles';
import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';

export function Footer() {
  function handleRedirect(url: string) {
    window.open(url)
  }

  function handleScrollTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <Container>
      <div className="container">
        <button type="button" onClick={handleScrollTop}>
          Voltar ao topo
        </button>
        <section>
          <AiOutlineGithub
            onClick={() => handleRedirect('https://github.com/alexcssilva')}
          />
          <AiFillLinkedin
            onClick={() =>
              handleRedirect('https://www.linkedin.com/in/alexcssilva/')
            }
          />
        </section>
      </div>
    </Container>
  );
}
