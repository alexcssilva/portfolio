import Link from "next/link";
import { NavLinkContainer } from './Header.styles';
import { usePathname } from 'next/navigation';

interface Props {
  title: string;
  path: string;
  includes?: boolean;
}

export default function NavLink({ title, path, includes = false }: Props) {
  const router = usePathname();
  function verifyIsActive() {
    if (includes) {
      return router?.includes(path) || false;
    }
    return router === path;
  }
  const isActive = verifyIsActive()

  return (
    <NavLinkContainer isActive={isActive}>
      <Link legacyBehavior href={path}>
        <a>{title}</a>
      </Link>
    </NavLinkContainer>
  )
}
