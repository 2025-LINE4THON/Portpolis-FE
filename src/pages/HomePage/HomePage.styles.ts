import styled from '@emotion/styled';

export const HomePage = styled.div`
  height: 100dvh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;

  & > * {
    scroll-snap-align: start;
    height: 100dvh;
    position: relative;
    z-index: 20;
  }
`;
