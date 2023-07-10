import { ItemContainer } from './Technologies.styles';

interface TechnologiesProps {
  year: string;
  title: string;
  description: string;
}

export default function TechnologiesItem({
  year,
  title,
  description,
}: TechnologiesProps) {
  return (
    <ItemContainer>
      <div>
        <h1>{year}</h1>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </ItemContainer>
  );
}
