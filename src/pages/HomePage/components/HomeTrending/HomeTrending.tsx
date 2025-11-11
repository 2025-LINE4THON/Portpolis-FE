import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import type { Settings } from 'react-slick';

import * as H from './HomeTrending.styles';
import * as E from '@pages/PortfolioCreatePage/components/EditCareer/EditCareer.styles';

import SlideImg1 from '@assets/HomePage/slide-img-1.jpg';
import SlideImg2 from '@assets/HomePage/slide-img-2.jpg';
import SlideImg3 from '@assets/HomePage/slide-img-3.jpg';
import PrevIcon from '@assets/PortfolioCreatePage/icon-prev.svg';
import NextIcon from '@assets/PortfolioCreatePage/icon-next.svg';

import CommonPortfolioCard from '@/components/CommonPortfolioCard/CommonPortfolioCard';
import { useEffect, useState } from 'react';

const SLIDES = [
  { id: 1, img: SlideImg1, text: '감각적인 브랜드를 만드는 나만의 포트폴리오', name: '홍길동' },
  { id: 2, img: SlideImg2, text: '감각적인 브랜드를 만드는 나만의 포트폴리오', name: '홍길동' },
  { id: 3, img: SlideImg3, text: '감각적인 브랜드를 만드는 나만의 포트폴리오', name: '홍길동' },
];

interface CustomArrowProps {
  onClick?: () => void;
}

const PrevArrow = ({ onClick }: CustomArrowProps) => {
  return (
    <E.PrevButton onClick={onClick}>
      <img src={PrevIcon} alt="prev" />
    </E.PrevButton>
  );
};

const NextArrow = ({ onClick }: CustomArrowProps) => {
  return (
    <E.NextButton onClick={onClick}>
      <img src={NextIcon} alt="next" />
    </E.NextButton>
  );
};

const HomeTrending = () => {
  const [centerPadding, setCenterPadding] = useState<number>(0);

  const settings: Settings = {
    centerMode: true,
    centerPadding: `${centerPadding}px`,
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3500,
  };

  useEffect(() => {
    const updateSettings = () => {
      const width = 471; // 카드 너비 + 양옆 padding

      setCenterPadding((window.innerWidth - width) / 2);
    };

    updateSettings();
    window.addEventListener('resize', updateSettings);

    return () => window.removeEventListener('resize', updateSettings);
  }, []);

  return (
    <>
      <H.HomeTrending>
        <H.Text>
          <h1>
            지금 가장 <span>주목받는</span> 포트폴리오
          </h1>

          <h3>Portpolis로 완성된 작품들을 만나보세요.</h3>
        </H.Text>

        <H.SliderDiv>
          <E.StyledSlider {...settings} prevArrow={<PrevArrow />} nextArrow={<NextArrow />}>
            {SLIDES.map((slide) => (
              <CommonPortfolioCard key={slide.id} img={slide.img} title={slide.text} name={slide.name} />
            ))}
          </E.StyledSlider>
        </H.SliderDiv>

        <H.EllipseIcon />
      </H.HomeTrending>
    </>
  );
};

export default HomeTrending;
