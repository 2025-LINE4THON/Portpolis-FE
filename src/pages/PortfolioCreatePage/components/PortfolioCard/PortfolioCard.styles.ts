import palette from '@/styles/theme';
import styled from '@emotion/styled';

export const PortfolioCard = styled.div<{ $selected: boolean | null; $url: string }>`
  max-width: calc(50% - 50px);
  width: 100%;
  height: 316px;
  border-radius: 22px;
  cursor: pointer;

  position: relative;

  transition: all 300ms ease-in-out;

  border: 1px solid ${({ $selected }) => ($selected ? palette.primary.primary400 : 'transparent')};
  background: ${({ $selected }) =>
    $selected
      ? `linear-gradient(180deg, ${palette.neutral.neutral100} 0%, ${palette.white} 100%)`
      : `linear-gradient(180deg, ${palette.neutral.neutral100} 0%, ${palette.white} 100%)`};
  box-shadow: ${({ $selected }) => ($selected ? '0 0 9px rgba(61, 196, 164, 0.5)' : 'none')};

  :hover {
    border: 1px solid ${palette.primary.primary400};
    box-shadow: 0 0 9px 0 rgba(61, 196, 164, 0.5);
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, ${palette.neutral.neutral100} 0%, ${palette.white} 100%);
    opacity: 0.5;
    border-radius: 22px;
  }

  background: url(${({ $url }) => $url}) no-repeat center center / contain;
`;

export const TextBox = styled.div`
  position: absolute;
  left: 35px;
  bottom: 36px;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Content = styled.p`
  color: ${palette.gray.gray777};
  font-size: 12px;
  font-weight: 500;
  line-height: 175%;
`;

export const Button = styled.button`
  width: 105px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 11px;
  border: 1px solid ${palette.neutral.neutral500};

  color: ${palette.neutral.neutral800};
  font-size: 13px;
  font-weight: 500;
  line-height: 175%;

  cursor: pointer;

  position: absolute;
  right: 35px;
  bottom: 42px;
`;
