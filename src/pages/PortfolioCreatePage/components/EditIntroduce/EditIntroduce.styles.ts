import palette from '@/styles/theme';
import styled from '@emotion/styled';
import Divider from '@assets/PortfolioCreatePage/icon-divider-neutral300.svg?react';

export const EditIntroduce = styled.div`
  position: relative;
  top: 210px;

  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;

  padding: 113px;

  span {
    color: ${palette.primary.primaryMain};
  }
`;

export const DividerIcon = styled(Divider)`
  margin-top: 104px;
`;

export const Title = styled.div`
  color: ${palette.neutral.neutral900};
  font-size: 48px;
  font-weight: 700;
  line-height: 120%;
`;

export const Intro = styled.div`
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 175%;

  color: ${palette.gray.gray555};

  margin: 41px 0px;
`;

export const Account = styled.div`
  display: flex;
  gap: 34px;
  cursor: pointer;
`;
