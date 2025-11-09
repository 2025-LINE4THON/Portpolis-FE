import palette from '@/styles/theme';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Navbar = styled.nav`
  position: fixed;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 80px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.8) 16.83%, rgba(255, 255, 255, 0) 100%);
`;

export const Logo = styled.h1`
  max-width: 350px;
  width: 100%;
  padding: 0 48px;

  color: #333;

  font-size: 25.821px;
  font-weight: 600;
  line-height: 175%;

  cursor: pointer;
`;

export const List = styled.ul`
  display: flex;
  gap: 48px;
  align-items: center;
  justify-content: center;

  flex: 1;

  white-space: nowrap;
`;

export const Menu = styled(NavLink)`
  padding: 0 10px;

  &.active {
    background-color: ${palette.primary.primary500};
    border-radius: 11px;
    color: #fff;
  }
`;

export const Empty = styled.div`
  max-width: 350px;
  width: 100%;
  height: 100%;
`;
