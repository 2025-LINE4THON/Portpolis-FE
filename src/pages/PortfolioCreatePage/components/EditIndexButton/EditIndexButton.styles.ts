import palette from '@/styles/theme';
import styled from '@emotion/styled';

export const EditIndexButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7px;
`;

export const Index = styled.div`
  width: 51px;
  height: 51px;
  background: ${palette.primary.primary400};
  border-radius: 50%;
  color: ${palette.white};

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 20px;
  font-weight: 600;
  line-height: 175%;
`;

export const Title = styled.div`
  color: ${palette.neutral.neutral900};
  font-size: 28px;
  font-weight: 600;
  line-height: 175%;
`;
