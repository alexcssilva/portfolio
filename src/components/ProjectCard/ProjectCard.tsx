'use client';

import { Container } from './ProjectCard.styles';
import Link from 'next/link';

interface ProjectItemProps {
  title: string;
  type: string;
  imgUrl: string;
  slug: string;
}

export function ProjectCard({ title, type, imgUrl, slug }: ProjectItemProps) {
  return (
      <Container imgUrl={imgUrl}>
        <Link legacyBehavior href={`/projetos/${slug}`}>
          <a>
            <div className="overlay" />
            <section>
              <h1>{title}</h1>
              <h2>{type}</h2>
            </section>
          </a>
        </Link>
      </Container>
  );
}
