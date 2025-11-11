import palette from '@/styles/theme';
import styled from '@emotion/styled';
import Background from '@assets/common/background-gradient-circle.svg?react';

export const HomeNavigate = styled.div`
  position: relative;
  z-index: 11;
  background-color: ${palette.white};
  height: 100dvh;

  overflow: hidden;

  padding: 0 20px;

  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 98px;
  font-style: normal;

  h1 {
    color: ${palette.neutral.neutral950};
  }

  span {
    color: ${palette.primary.primaryMain};
  }

  h1,
  span {
    font-size: 25px;
    font-weight: 600;
    line-height: 155%;
  }

  h3 {
    color: rgba(136, 136, 136, 0.5);
    font-size: 17px;
    font-weight: 500;
    line-height: 175%;
  }
`;

export const CardWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 122px;
  flex-wrap: wrap;
`;

export const BackgroundIcon = styled(Background)`
  position: absolute;
  inset: 0;
  z-index: -1;
`;
