import styled from '@emotion/styled';
import palette from '@/styles/theme';

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Text = styled.div`
  color: ${palette.neutral.neutral950};
  font-size: 20px;
  font-weight: 700;
  line-height: 175%;
`;
