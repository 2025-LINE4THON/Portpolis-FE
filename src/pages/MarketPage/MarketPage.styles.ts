import palette from '@/styles/theme';
import styled from '@emotion/styled';

export const Container = styled.div`
  width: 1280px;
  height: 1911px;
  position: relative;
  background: white;
  overflow: hidden;
  margin: 0 auto;
`;

export const HeaderGradient = styled.div`
  width: 1280px;
  height: 80px;
  left: 0;
  top: 0;
  position: absolute;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0));
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
`;

export const BackgroundCircle1 = styled.div`
  width: 1098px;
  height: 527px;
  left: 95px;
  top: -239px;
  position: absolute;
  background: white;
  border-radius: 50%;
`;

export const BackgroundCircle2 = styled.div`
  width: 1304px;
  height: 628px;
  left: 0;
  top: -321px;
  position: absolute;
  border-radius: 50%;
`;

export const Title = styled.div`
  left: 81px;
  top: 115px;
  position: absolute;
  display: flex;
  justify-content: flex-start;

  .label {
    color: ${palette.neutral.neutral400};
    font-size: 20px;
    font-weight: 600;
    line-height: 36px;
  }

  .coming-soon {
    color: ${palette.neutral.neutral950};
    font-size: 20px;
    font-weight: 600;
    line-height: 36px;
  }
`;

export const Description = styled.div`
  left: 81px;
  top: 150px;
  position: absolute;
  display: flex;
  justify-content: flex-start;
  color: ${palette.neutral.neutral300};
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
`;

export const LogoButton = styled.div`
  padding: 4px;
  left: 20px;
  top: 24px;
  position: absolute;
  background: ${palette.primary.primary500};
  border-radius: 4px;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  .icon {
    width: 24px;
    height: 24px;
    padding: 4px 1px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    overflow: hidden;

    .bar {
      width: 10px;
      height: 16px;
      background: ${palette.neutral.neutral050};
    }
  }
`;

export const SectionTitle = styled.div<{ top: number }>`
  left: 81px;
  top: ${(props) => props.top}px;
  position: absolute;
  display: flex;
  justify-content: flex-start;
  color: black;
  font-size: 14px;
  font-weight: 500;
`;

export const CardGrid = styled.div<{ top: number }>`
  width: 1126px;
  left: 81px;
  top: ${(props) => props.top}px;
  position: absolute;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;
`;

export const TemplateCard = styled.div<{ bgImage: string }>`
  flex: 1;
  height: 256px;
  border-radius: 24px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  position: relative;
  cursor: pointer;

  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-position: center;

  /* hover 상태에서 CardInner 스타일 변경 */
  &:hover .card-inner {
    background: transparent;
  }

  /* hover 시 Coming Soon 텍스트 보이기 */
  &:hover .coming-soon-overlay {
    opacity: 1;
  }
`;

export const CardInner = styled.div`
  flex: 1;
  height: 100%;
  padding: 24px 40px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  transition: background 0.3s ease;

  /* hover에서 접근하기 위해 class 부여 */
`;

export const ComingSoonOverlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  color: white;
  font-size: 24px;
  font-weight: 700;

  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
`;

export const CardContent = styled.div`
  width: 100%;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
`;

export const CardInfo = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
`;

export const CardTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  color: ${palette.neutral.neutral400};
  font-size: 16px;
  font-weight: 700;
  line-height: 28px;
`;

export const ColorPalette = styled.div`
  height: 24px;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
`;

export const ColorBox = styled.div<{ color: string }>`
  width: 24px;
  height: 24px;
  background: ${(props) => props.color};
  border-radius: 4px;
`;

export const ContactSection = styled.div`
  width: 1126px;
  left: 81px;
  top: 1581px;
  position: absolute;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

export const ContactBox = styled.div`
  width: 1126px;
  height: 256px;
  border-radius: 24px;
`;
