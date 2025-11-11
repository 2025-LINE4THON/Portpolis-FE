import styled from '@emotion/styled';
import Background from '@assets/common/background-gradient-circle.svg?react';
import BookMark from '@assets/PortfolioCreatePage/icon-bookmark.svg?react';

export const EditProject = styled.div`
  display: flex;
  flex-direction: column;
  gap: 72px;

  padding: 157px 20px 0;

  position: relative;
`;

export const StandardList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;

  position: relative;
`;

export const CardWrapper = styled.div<{ $z: number; $idx: number }>`
  z-index: ${({ $z }) => $z};
  margin-left: ${({ $idx }) => ($idx === 0 ? 0 : '-120px')};

  position: relative;
`;

export const BackgroundImage = styled(Background)`
  position: absolute;
  z-index: -1;

  inset: 0;
  width: 100%;
  object-fit: cover;
`;

export const BookMarkIcon = styled(BookMark)`
  position: absolute;
  top: -9px;
  right: 10px;
`;
