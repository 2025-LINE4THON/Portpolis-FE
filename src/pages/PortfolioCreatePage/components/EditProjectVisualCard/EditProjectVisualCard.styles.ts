import palette from '@/styles/theme';
import styled from '@emotion/styled';

export const EditProjectVisualCard = styled.div<{ $isImgLeft: boolean }>`
  display: flex;
  flex-direction: ${({ $isImgLeft }) => ($isImgLeft ? 'row' : 'row-reverse')};
  align-items: ${({ $isImgLeft }) => ($isImgLeft ? 'start' : 'center')};
  justify-content: center;

  padding: 0 121px;
`;

export const ImgWrapper = styled.div<{ $isImgLeft: boolean; $img: boolean }>`
  width: 661px;
  height: ${({ $isImgLeft }) => ($isImgLeft ? '480px' : '751px')};

  border-radius: 22px;

  position: relative;
  z-index: 1;
  isolation: isolate;

  background: ${({ $img }) => ($img ? 'none' : 'linear-gradient(180deg, var(--Neutral-100, #E6E6E7) 0%, #FFF 100%)')};

  img:nth-of-type(2) {
    position: absolute;
    left: 40px;
    top: -42px;
    z-index: -1;

    width: 100%;
    height: 100%;
    object-fit: cover;

    display: ${({ $isImgLeft }) => ($isImgLeft ? 'block' : 'none')};
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const InfoWrapper = styled.div<{ $isImgLeft: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: ${({ $isImgLeft }) => ($isImgLeft ? 'flex-end' : 'start')};
  gap: 16px;

  position: relative;
  z-index: 2;

  margin-left: ${({ $isImgLeft }) => ($isImgLeft ? '-80px' : '80px')};
`;

export const ProjectName = styled.div`
  color: ${palette.neutral.neutral900};
  font-size: 25px;
  font-weight: 500;
  line-height: 175%;
`;

export const Link = styled.div`
  display: flex;
  gap: 19px;
  align-items: flex-end;
`;

export const Date = styled.div`
  color: ${palette.neutral.neutral900};
  font-size: 30px;
  font-weight: 700;
  line-height: 175%;

  position: relative;

  &::after {
    content: '';
    position: absolute;
    z-index: -1;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 25px;
    background-color: ${palette.primary.primary100};
  }
`;

export const ChipWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 9px;

  position: absolute;
  top: -17px;
`;

export const Chip = styled.div`
  padding: 3px 18px;
  display: flex;
  align-content: center;
  justify-content: center;
  border-radius: 22px;
  background-color: #eaeaea;

  color: ${palette.neutral.neutral700};
`;

export const ContentBox = styled.div`
  padding: 30px 42px;
  color: ${palette.neutral.neutral700};
  text-align: right;
  font-size: 14px;
  font-weight: 500;
  line-height: 175%;

  border-radius: 22px;
  background: ${palette.white};
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.25);

  position: relative;

  min-width: 463px;
  height: 159px;

  margin-top: 18px;
  left: 70px;
`;
