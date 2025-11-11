import palette from '@/styles/theme';
import styled from '@emotion/styled';

export const PublishHeader = styled.div`
  display: flex;

  gap: 18px;
  align-items: center;

  position: absolute;
  left: 54px;
  top: 37px;

  svg {
    cursor: pointer;
    width: 25px;
    height: 25px;
  }

  p {
    color: ${palette.gray.gray777};
  }
`;
