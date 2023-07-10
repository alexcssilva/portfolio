'use client'

import { Container } from './Technologies.styles';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import TechnologiesItem from './TechnologiesItem';

export function Technologies() {
  return (
    <Container>
      <SectionTitle title="Tecnologias" description="Habilidades que possuo" />

      <section>
        <TechnologiesItem
          year="2023"
          title="Dev Front-end"
          description="Loren ipsum dolor sit"
        />
        <TechnologiesItem
          year="2023"
          title="Dev Front-end"
          description="Loren ipsum dolor sit"
        />
        <TechnologiesItem
          year="2023"
          title="Dev Front-end"
          description="Loren ipsum dolor sit"
        />
        <TechnologiesItem
          year="2023"
          title="Dev Front-end"
          description="Loren ipsum dolor sit"
        />
      </section>
    </Container>
  );
}
