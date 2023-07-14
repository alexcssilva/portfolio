import { ReactNode } from "react";
import { HardSkillsContainer } from "./HardSkills.styles";

interface HardSkillsProps {
  title: string;
  icon: ReactNode;
}

export default function HardSkillsItem({ title, icon }: HardSkillsProps) {
  return (
    <HardSkillsContainer>
      <p>{title}</p>
      {icon}
    </HardSkillsContainer>
  );
}
