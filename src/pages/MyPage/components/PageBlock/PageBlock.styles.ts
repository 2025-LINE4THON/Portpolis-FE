import styled from '@emotion/styled';
import palette from '@/styles/theme';

export const PageBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 34px;
  border-radius: 22px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
`;

export const BlockHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Text = styled.div`
  color: ${palette.neutral.neutral900};
  font-size: 20px;
  font-weight: 600;
  line-height: 175%;
`;
