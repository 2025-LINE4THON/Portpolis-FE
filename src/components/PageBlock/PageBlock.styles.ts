import styled from '@emotion/styled';
import palette from '@/styles/theme';

export const PageBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 27px;
  padding: 34px;
  border-radius: 22px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  background-color: white;
`;

export const BlockHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const BlockTitle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const Text = styled.div`
  color: ${palette.neutral.neutral900};
  font-size: 20px;
  font-weight: 600;
  line-height: 175%;
`;
