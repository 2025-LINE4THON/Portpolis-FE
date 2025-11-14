import * as M from './MarketPage.styles';
import palette from '@/styles/theme';
import backbutton from '@assets/backbutton.svg';
import comingSoon from '@assets/comingsoon.svg';
import { useNavigate } from 'react-router-dom';

import randomImage1 from '@assets/marketTemplate1.jpg';
import randomImage2 from '@assets/marketTemplate2.jpg';
import randomImage3 from '@assets/marketTemplate3.jpg';
import randomImage4 from '@assets/marketTemplate4.jpg';
import randomImage5 from '@assets/marketTemplate5.jpg';
import randomImage6 from '@assets/marketTemplate6.jpg';
import randomImage7 from '@assets/marketTemplate7.jpg';

const MarketPage = () => {
  const randomImages = [
    randomImage1,
    randomImage2,
    randomImage3,
    randomImage4,
    randomImage5,
    randomImage6,
    randomImage7,
  ];

  const navigate = useNavigate();
  const templateColors = [
    [palette.primary.primary500, '#f43f5e', '#f59e0b', '#c026d3'],
    [palette.primary.primary500, '#f43f5e', '#f59e0b', palette.neutral.neutral400],
    [palette.primary.primary500, '#f43f5e', '#f59e0b', '#c026d3'],
  ];

  return (
    <M.Container>
      <M.HeaderGradient />
      <M.BackgroundCircle1 />
      <M.BackgroundCircle2 />

      <M.Title>
        <span className="label">마켓플레이스 : </span>
        <span className="coming-soon">Coming Soon</span>
      </M.Title>

      <M.Description>나만의 포트폴리오를 위한 템플릿을 준비 중이에요. Portpolis에서 곧 만나보세요.</M.Description>

      <M.LogoButton onClick={() => navigate('/portfolio/create')}>
        <div className="icon">
          <img src={backbutton} alt="Back Button" />
        </div>
      </M.LogoButton>

      {/* Portpolis 공식 템플릿 */}
      <M.SectionTitle top={288}>Portpolis 공식 템플릿</M.SectionTitle>
      <M.CardGrid top={320}>
        {templateColors.map((colors, idx) => (
          <M.TemplateCard
            key={`official-${idx}`}
            bgImage={randomImages[Math.floor(Math.random() * randomImages.length)]}>
            <M.ComingSoonOverlay className="coming-soon-overlay">Coming Soon</M.ComingSoonOverlay>

            <M.CardInner className="card-inner">
              <M.CardContent>
                <M.CardInfo>
                  <M.CardTitle>비주얼형</M.CardTitle>
                  <M.ColorPalette>
                    {colors.map((color, idx) => (
                      <M.ColorBox key={idx} color={color} />
                    ))}
                  </M.ColorPalette>
                </M.CardInfo>
              </M.CardContent>
            </M.CardInner>
          </M.TemplateCard>
        ))}
      </M.CardGrid>

      {/* 실무 합격 포트폴리오 템플릿 */}
      <M.SectionTitle top={697}>실무 합격 포트폴리오 템플릿</M.SectionTitle>
      <M.CardGrid top={729}>
        {templateColors.map((colors, idx) => (
          <M.TemplateCard
            key={`official-${idx}`}
            bgImage={randomImages[Math.floor(Math.random() * randomImages.length)]}>
            <M.ComingSoonOverlay className="coming-soon-overlay">Coming Soon</M.ComingSoonOverlay>

            <M.CardInner className="card-inner">
              <M.CardContent>
                <M.CardInfo>
                  <M.CardTitle>비주얼형</M.CardTitle>
                  <M.ColorPalette>
                    {colors.map((color, idx) => (
                      <M.ColorBox key={idx} color={color} />
                    ))}
                  </M.ColorPalette>
                </M.CardInfo>
              </M.CardContent>
            </M.CardInner>
          </M.TemplateCard>
        ))}
      </M.CardGrid>

      {/* 디자이너들이 직접 만든 템플릿 */}
      <M.SectionTitle top={1123}>디자이너들이 직접 만든 템플릿</M.SectionTitle>
      <M.CardGrid top={1155}>
        {templateColors.map((colors, idx) => (
          <M.TemplateCard
            key={`official-${idx}`}
            bgImage={randomImages[Math.floor(Math.random() * randomImages.length)]}>
            <M.ComingSoonOverlay className="coming-soon-overlay">Coming Soon</M.ComingSoonOverlay>

            <M.CardInner className="card-inner">
              <M.CardContent>
                <M.CardInfo>
                  <M.CardTitle>비주얼형</M.CardTitle>
                  <M.ColorPalette>
                    {colors.map((color, idx) => (
                      <M.ColorBox key={idx} color={color} />
                    ))}
                  </M.ColorPalette>
                </M.CardInfo>
              </M.CardContent>
            </M.CardInner>
          </M.TemplateCard>
        ))}
      </M.CardGrid>

      {/* Contact Us */}
      <M.SectionTitle top={1549}>Contact Us!</M.SectionTitle>
      <M.ContactSection>
        <div>
          <img src={comingSoon} alt="Coming Soon" />
        </div>
      </M.ContactSection>
    </M.Container>
  );
};

export default MarketPage;
