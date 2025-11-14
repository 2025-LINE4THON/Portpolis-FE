import palette from '@/styles/theme';
import styled from '@emotion/styled';
import Arrow from '@assets/ListPage/icon-arrow-down.svg?react';

export const Button = styled.button`
  max-width: 161px;
  width: 100%;
  height: 31px;

  padding: 4px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 11px;
  border: 1px solid ${palette.neutral.neutral950};
  background: rgba(246, 246, 250, 0.5);

  color: ${palette.neutral.neutral950};

  font-size: 13px;
  font-weight: 500;
  line-height: 175%;
  white-space: nowrap;

  position: relative;
  z-index: 20;

  svg {
    align-self: center;
    flex-shrink: 0;
    color: ${palette.neutral.neutral950};
  }
`;

export const Select = styled.div`
  border-radius: 11px;
  border: 1px solid ${palette.neutral.neutral950};
  background: rgba(246, 246, 250, 0.5);

  width: 161px;

  position: absolute;
  left: 0;
  right: 0;
  top: 41px;
`;

export const Menu = styled.div`
  display: flex;
  padding: 4px 20px;

  border-bottom: 1px solid ${palette.neutral.neutral950};

  :nth-of-type(3) {
    border-bottom: none;
  }
`;

export const ArrowIcon = styled(Arrow)<{ $showDrop: boolean }>`
  transform: rotate(${({ $showDrop }) => ($showDrop ? '180deg' : '0deg')});
  transition: transform 0.2s ease-in-out;
`;
