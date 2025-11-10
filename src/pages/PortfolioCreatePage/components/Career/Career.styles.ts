import palette from '@/styles/theme';
import styled from '@emotion/styled';

export const Career = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;

  p {
    color: ${palette.neutral.neutral300};
  }

  h3 {
    color: ${palette.neutral.neutral900};
  }
`;
