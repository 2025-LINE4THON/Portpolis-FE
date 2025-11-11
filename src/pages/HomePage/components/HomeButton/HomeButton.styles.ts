import palette from '@/styles/theme';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const HomeButton = styled.button`
  &:hover div {
    background-color: ${palette.primary.primaryMain};
  }

  svg {
    color: #d0d0d1;
  }

  &:hover svg {
    color: white;
  }

  &:hover p {
    color: ${palette.neutral.neutral950};
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 27px;
`;

export const IconWrapper = styled.div`
  width: 176px;
  height: 176px;
  padding: 69px 66px;
  border-radius: 22px;
  background: ${palette.neutral.neutral050};
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);

  transition: all 500ms ease-in-out;
`;

export const Menu = styled.p`
  text-align: center;
  font-size: 21px;
  font-weight: 600;
  line-height: 175%;

  color: ${palette.neutral.neutral300};

  transition: all 500ms ease-in-out;
`;
