import { darken } from 'polished';
import { styled } from 'styled-components';

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  > main {
    margin-top: 5rem;
    margin-bottom: 5rem;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;

    @media (max-width: 1000px) {
      grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 500px) {
      grid-template-columns: 1fr;
    }
  }
`;

export const ContainerSlug = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  > main {
    margin-top: 2rem;
    margin-bottom: 2rem;
    width: 100%;
    padding: 0 5rem;

    p {
      color: ${({ theme }) => theme.colors.textLight};
      font-size: 1.5rem;
      font-weight: 300;
      text-align: justify;
    }

    button {
      background: ${({ theme }) => theme.colors.primary};
      padding: 0.8rem 3rem;
      border-radius: 0.5rem;
      border: none;
      transition: 0.5s;
      margin-top: 2rem;

      &:hover {
        background: ${({ theme }) => darken(0.05, theme.colors.primary)};
      }

      a {
        color: #fff;
        text-transform: uppercase;
        font-size: 1.5rem;
        font-weight: 300;
      }
    }

    @media (max-width: 700px) {
      padding: 0 2.5rem;

      p {
        font-size: 1rem;
      }

      button {
        padding: 0.7rem 2rem;

        a {
          font-size: 0.9rem;
        }
      }
    }
  }
`;
