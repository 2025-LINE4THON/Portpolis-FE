import palette from '@/styles/theme';
import styled from '@emotion/styled';

export const ElementCard = styled.div`
  border-radius: 22px;
  background-color: ${palette.white};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);

  width: 333px;
  height: 454px;
  overflow-y: auto;

  padding: 40px 30px;
`;
