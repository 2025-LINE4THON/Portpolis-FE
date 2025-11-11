import palette from '@/styles/theme';
import styled from '@emotion/styled';

export const EditAboutMeCard = styled.div`
  border-radius: 22px;
  background: linear-gradient(180deg, #fff 0%, #e2f3ed 100%);

  padding: 37px 36px 50px 36px;

  max-width: 316px;
  width: 100%;
  height: 285px;

  display: flex;
  flex-direction: column;
  gap: 30px;

  position: relative;
  z-index: 4;
`;

export const Title = styled.p`
  color: ${palette.neutral.neutral900};
  font-size: 16px;
  font-weight: 700;
  line-height: 175%;
  text-align: center;
`;

export const Content = styled.p`
  color: ${palette.neutral.neutral400};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 175%;
`;
