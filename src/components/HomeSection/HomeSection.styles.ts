import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  flex-direction: row-reverse;
  margin-top: 5rem;

  > .img {
    width: 40rem;
    flex: 1;
  }
  > div {
    flex: 4;
  }

  @media (max-width: 1450px) {
    > img {
      width: 30rem;
    }

    > div {
      flex: 1;
    }
  }

  @media (max-width: 1000px) {
    > img {
      width: 22rem;
    }

    > div {
      flex: 1;
    }
  }

  @media (max-width: 700px) {
    flex-direction: column-reverse;
    > div {
      width: 100%;
    }
  }
`;

export const TextContainer = styled.section`
  margin-bottom: 2rem;
  width: 100%;

  h1 {
    font-size: 8rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.secondary};
  }

  @media (max-width: 1450px) {
    h1 {
      font-size: 5rem;
    }
    h2 {
      font-size: 2rem;
    }
  }

  @media (max-width: 1000px) {
    h1 {
      font-size: 3rem;
    }
    h2 {
      font-size: 1%.5;
    }
  }
`;

export const InfosContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const CodeItem = styled.pre`
  background: ${({ theme }) => theme.colors.gradient};
  padding: 2rem;
  font-family: 'JetBrains Mono', monospace;
  font-weight: 300;
  color: #fff;
  width: 24rem;
  align-self: flex-start;
  transition: 1s;

  @media (max-width: 1450px) {
    width: 18rem;
    padding: 1.5rem;
    font-size: 0.8rem;
  }

  @media (max-width: 1000px) {
    width: 100%;
  }

  &:hover {
    filter: brightness(1.2);
  }

  > div {
    margin: 0.2rem 0;
    margin-left: 1rem;
  }

  span.purple {
    color: #c38cdd;
  }

  span.blue {
    color: #7ac7e3;
  }

  span.comment {
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 1rem;
    display: block;
  }
`;
