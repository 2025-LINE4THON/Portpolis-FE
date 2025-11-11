import palette from '@/styles/theme';
import styled from '@emotion/styled';

export const EditModal = styled.div`
  background: ${palette.white};

  max-width: 710px;
  width: 100%;
  height: 454px;
  padding: 47px 34px;
  border-radius: 22px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 20;

  div:nth-of-type(1) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  z-index: 15;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
`;

export const Title = styled.h3`
  color: ${palette.neutral.neutral900};
  font-size: 32px;
  font-weight: 700;
  line-height: 175%;
`;

export const SubTitle = styled(Title)`
  color: ${palette.neutral.neutral500};
  font-size: 14px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12px;

  width: 100%;
`;

export const Button = styled.button<{ $width: number; $color: string }>`
  width: ${({ $width }) => `${$width}px`};
  background-color: ${({ $color }) => $color};
  padding: 12px 0;
  border-radius: 11px;

  color: ${palette.white};

  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 175%;

  transition: all 500ms ease-in-out;

  :hover {
    background-color: ${({ $width }) => $width === 277 && palette.primary.primary600};
  }

  :active {
    background-color: ${({ $width }) => $width === 277 && palette.primary.primary700};
  }
`;
