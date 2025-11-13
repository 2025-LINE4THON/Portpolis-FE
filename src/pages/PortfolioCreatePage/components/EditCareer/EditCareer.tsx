import EditIndexButton from '../EditIndexButton/EditIndexButton';
import * as E from './EditCareer.styles';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import EditCareerCard from '../EditCareerCard/EditCareerCard';

import PrevIcon from '@assets/PortfolioCreatePage/icon-prev.svg';
import NextIcon from '@assets/PortfolioCreatePage/icon-next.svg';
import { useEffect, useState } from 'react';
import type { Settings } from 'react-slick';
import { usePortfolio } from '@/context/PortfolioContext';
import type { ResponseGetPortfolio } from '@/types/PortfolioCreatePage/edit';

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

interface EditCareerProps {
  data?: ResponseGetPortfolio;
  editable?: boolean;
}

const EditCareer = ({ data, editable }: EditCareerProps) => {
  const { selectedCareers } = usePortfolio();
  const [centerPadding, setCenterPadding] = useState<number>(0);

  const settings: Settings = {
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    centerPadding: `${centerPadding}px`,
  };

  useEffect(() => {
    const updateSettings = () => {
      const width = 410;

      setCenterPadding((window.innerWidth - width) / 2);
    };

    updateSettings();
    window.addEventListener('resize', updateSettings);

    return () => window.removeEventListener('resize', updateSettings);
  }, []);

  return (
    <E.EditCareer>
      <EditIndexButton index="02" text="경력" />

      <E.CircleBg />

      <E.StyledSlider {...settings} prevArrow={<PrevArrow />} nextArrow={<NextArrow />}>
        {editable &&
          selectedCareers.map((slide) => (
            <EditCareerCard
              key={slide.careerId}
              id={slide.careerId}
              title={slide.content}
              startDate={slide.startDate}
              endDate={slide.endDate ?? ''}
              description={slide.description ?? ''}
              editable={editable}
            />
          ))}

        {!editable &&
          data?.data.careers.map((slide) => (
            <EditCareerCard
              key={slide.careerId}
              id={slide.careerId}
              title={slide.content ?? ''}
              startDate={slide.startDate ?? ''}
              endDate={slide.endDate ?? ''}
              description={slide.description ?? ''}
              editable={editable}
            />
          ))}
      </E.StyledSlider>
    </E.EditCareer>
  );
};

export default EditCareer;
