import Link from 'next/link';
import { ProjectContainer } from './Projects.styles';
import { IoIosArrowDropright } from 'react-icons/io';

interface ProjectProps {
  title: string;
  type: string;
  slug: string;
  img: string;
}

export default function ProjectItem({ title, type, slug, img }: ProjectProps) {
  return (
    <ProjectContainer imgUrl={img}>
      <section>
        <div className="overlay"></div>
        <div className="text">
          <h1># {title}</h1>
          <h2>- {type}</h2>
        </div>
      </section>
      <button type="button">
        <Link legacyBehavior href={`/projetos/${slug}`}>
          <a>
            Ver mais
            <IoIosArrowDropright />
          </a>
        </Link>
      </button>
    </ProjectContainer>
  );
}
