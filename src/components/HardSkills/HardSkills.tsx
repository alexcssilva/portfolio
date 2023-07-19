'use client';

import { SectionTitle } from '../SectionTitle/SectionTitle';
import { Container } from './HardSkills.styles';
import HardSkillsItem from './HardSkillsItem';
import { AiFillHtml5 } from 'react-icons/ai';
import { IoLogoJavascript } from 'react-icons/io';
import { TbBrandNextjs } from 'react-icons/tb';
import { BiLogoTypescript } from 'react-icons/bi';
import {
  FaCss3Alt,
  FaReact,
  FaPython,
  FaNodeJs,
  FaJava,
  FaAngular,
  FaVuejs,
  FaPhp,
  FaLaravel,
  FaBootstrap,
} from 'react-icons/fa';

export function HardSkills() {
  return (
    <Container>
      <SectionTitle title="HardSkills" description="Habilidades que possuo" />
      <section>
        <HardSkillsItem title="HTML" icon={<AiFillHtml5 />} />
        <HardSkillsItem title="CSS" icon={<FaCss3Alt />} />
        <HardSkillsItem title="JavaScript" icon={<IoLogoJavascript />} />
        <HardSkillsItem title="React" icon={<FaReact />} />
        <HardSkillsItem title="React" icon={<FaReact />} />
        <HardSkillsItem title="Node" icon={<FaNodeJs />} />
        <HardSkillsItem title="Next" icon={<TbBrandNextjs />} />
        <HardSkillsItem title="Python" icon={<FaPython />} />
        <HardSkillsItem title="Java" icon={<FaJava />} />
        <HardSkillsItem title="Typescript" icon={<BiLogoTypescript />} />
        <HardSkillsItem title="Angular" icon={<FaAngular />} />
        <HardSkillsItem title="Vue" icon={<FaVuejs />} />
        <HardSkillsItem title="PHP" icon={<FaPhp />} />
        <HardSkillsItem title="Laravel" icon={<FaLaravel />} />
        <HardSkillsItem title="Bootstrap" icon={<FaBootstrap />} />
      </section>
    </Container>
  );
}
