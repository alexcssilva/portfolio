import Link from "next/link";
import { NavLinkContainer } from './Header.styles';
import { usePathname } from 'next/navigation';

interface Props {
  title: string;
  path: string;
}

export default function NavLink({ title, path }: Props) {
  const router = usePathname();
  const isActive = router === path;

  return (
    <NavLinkContainer isActive={isActive}>
      <Link legacyBehavior href={path}>
        <a>{title}</a>
      </Link>
    </NavLinkContainer>
  )
}
