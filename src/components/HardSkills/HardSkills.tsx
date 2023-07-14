'use client'

import { SectionTitle } from '../SectionTitle/SectionTitle';
import { Container } from './HardSkills.styles';
import HardSkillsItem from './HardSkillsItem';
import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { FaReact } from 'react-icons/fa';

export function HardSkills() {
  return (
    <Container>
      <SectionTitle title="Conhecimentos" description="Habilidades que possuo" />
        <section>
          <HardSkillsItem title="HTML" icon={<AiFillHtml5 />} />
          <HardSkillsItem title="CSS" icon={<FaCss3Alt />} />
          <HardSkillsItem title="JavaScript" icon={<IoLogoJavascript />} />
          <HardSkillsItem title="React" icon={<FaReact />} />
        </section>
    </Container>
  );
}
