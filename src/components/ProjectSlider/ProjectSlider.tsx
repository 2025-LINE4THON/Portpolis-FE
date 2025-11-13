import { useState, useEffect } from 'react';
import * as P from './ProjectSlider.styles';
import prev from '@assets/mypage/icon-prev.svg';
import next from '@assets/mypage/icon-next.svg';
import ProjectItem from '@components/ProjectItem/ProjectItem';

interface PortfolioItem {
  id: number;
  type: string;
  thumbnail: string;
  startDate: string;
  endDate: string;
  title: string;
  onClick?: () => void;
  isPrivate?: boolean;
  tags?: string[];
  role?: string;
}

interface PortfolioSliderProps {
  items: PortfolioItem[];
}

const PortfolioSlider = ({ items }: PortfolioSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1280) setVisibleCount(2);
      else setVisibleCount(3);
      setCurrentIndex(0);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNext = () => {
    if (currentIndex + visibleCount < items.length) {
      setCurrentIndex((prev) => prev + visibleCount);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - visibleCount);
    }
  };

  const visibleItems = items.slice(currentIndex, currentIndex + visibleCount);
  if (!items || items.length === 0) {
    return <div style={{ textAlign: 'center', color: '#999', margin: '40px 0' }}>등록된 프로젝트가 없습니다.</div>;
  } else {
    return (
      <P.PortfolioList>
        <P.ArrowButton onClick={handlePrev} disabled={currentIndex === 0}>
          <img src={prev} alt="prev" />
        </P.ArrowButton>
        <P.Portfolios>
          {visibleItems.map((item) => (
            <ProjectItem
              id={item.id}
              type={item.type}
              thumbnail={item.thumbnail}
              startDate={item.startDate}
              endDate={item.endDate}
              title={item.title}
              onClick={item.onClick ?? (() => console.log(item.title))}
              isPrivate={item.isPrivate}
              tags={item.tags}
              role={item.role}
            />
          ))}
        </P.Portfolios>
        <P.ArrowButton onClick={handleNext} disabled={currentIndex + visibleCount >= items.length}>
          <img src={next} alt="next" />
        </P.ArrowButton>
      </P.PortfolioList>
    );
  }
};

export default PortfolioSlider;
