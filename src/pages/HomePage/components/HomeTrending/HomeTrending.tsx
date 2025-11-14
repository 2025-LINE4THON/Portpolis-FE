import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import type { Settings } from 'react-slick';

import { useNavigate } from 'react-router-dom';

import * as H from './HomeTrending.styles';
import * as E from '@pages/PortfolioCreatePage/components/EditCareer/EditCareer.styles';

import PrevIcon from '@assets/PortfolioCreatePage/icon-prev.svg';
import NextIcon from '@assets/PortfolioCreatePage/icon-next.svg';

import CommonPortfolioCard from '@/components/CommonPortfolioCard/CommonPortfolioCard';
import { useEffect, useState } from 'react';
import useGetRecommend from '@/hooks/queries/HomePage/useGetRecommend';

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
  const { data: recommendData } = useGetRecommend();
  const navigate = useNavigate();

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
            {recommendData?.data.map((slide) => (
              <CommonPortfolioCard
                key={slide.portfolioId}
                img={slide.thumbnail ?? ''}
                title={slide.title}
                date={slide.createdAt}
                views={slide.views}
                name={'작성자 이름 연결 예정'}
                onClick={() => navigate(`/portfolio/${slide.portfolioId}`)}
              />
            ))}
          </E.StyledSlider>
        </H.SliderDiv>

        <H.EllipseIcon />
      </H.HomeTrending>
    </>
  );
};

export default HomeTrending;
