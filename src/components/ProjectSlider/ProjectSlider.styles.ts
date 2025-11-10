import styled from '@emotion/styled';

export const ProjectSlide = styled.div``;

export const PortfolioList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  padding: 0 50px;
`;

export const Portfolios = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 20px;
  width: 100%;
`;

export const ArrowButton = styled.button`
  opacity: ${(props) => (props.disabled ? 0.3 : 1)};
`;
