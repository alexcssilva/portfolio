import { lighten } from 'polished';
import styled from 'styled-components';

interface HeaderProps {
  isTransparent: boolean;
}

interface NavLinkProps {
  isActive: boolean;
}

export const Container = styled.header<HeaderProps>`
  position: sticky;
  top: 0;
  z-index: 100;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.backgroundLight};
  background-color: ${({ isTransparent, theme }) =>
    !isTransparent ? theme.colors.primary : theme.colors.secondary};
  transition: background-color 0.3s;

  ul {
    display: flex;
    gap: 2rem;
    align-items: center;
  }
`;

export const NavLinkContainer = styled.li<NavLinkProps>`
  a {
    text-transform: uppercase;
    color: ${({ isActive, theme }) =>
      isActive ? theme.colors.primary : theme.colors.textHighlight};

    &:hover {
      color: ${({ isActive, theme }) =>
        isActive
          ? lighten(0.2, theme.colors.primary)
          : lighten(0.2, theme.colors.textHighlight)};
    }
  }
`;
