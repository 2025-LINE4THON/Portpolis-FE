import palette from '@/styles/theme';
import styled from '@emotion/styled';

export const Stack = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;

  max-width: 274px;
  width: 100%;

  position: relative;
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 203px;
  width: 100%;

  flex: 1;
`;

export const LevelWrapper = styled.div`
  display: flex;
  gap: 6px;
`;

export const Circle = styled.div<{ $fill: boolean }>`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: ${({ $fill }) => ($fill ? palette.primary.primaryMain : palette.neutral.neutral100)};
`;

export const StackChip = styled.div`
  padding: 3px 10px;
  border-radius: 11px;
  background: ${palette.primary.primary400};
  color: ${palette.white};

  font-size: 13px;
  font-weight: 500;
  line-height: 175%;
`;

export const Overlay = styled.div<{ $selected: boolean }>`
  background: ${({ $selected }) => ($selected ? 'transparent' : ' rgba(255, 255, 255, 0.50)')};

  position: absolute;
  inset: 0;

  pointer-events: none;
`;

export const Input = styled.input`
  display: none;
`;
