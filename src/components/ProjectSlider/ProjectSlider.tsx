import { useState, useEffect } from 'react';
import * as P from './ProjectSlider.styles';
import prev from '@assets/mypage/icon-prev.svg';
import next from '@assets/mypage/icon-next.svg';
import ProjectItem from '@components/ProjectItem/ProjectItem';
import { useNavigate } from 'react-router-dom';

interface PortfolioItem {
  id: number;
  type: string;
  image: string | null;
  period?: string;
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
  const navigate = useNavigate();
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

  return (
    <P.PortfolioList>
      <P.ArrowButton onClick={handlePrev} disabled={currentIndex === 0}>
        <img src={prev} alt="prev" />
      </P.ArrowButton>
      <P.Portfolios>
        {visibleItems.map((item) => (
          <ProjectItem
            key={item.id}
            type={item.type}
            image={item.image}
            period={item.period}
            title={item.title}
            onClick={() => {
              const path = item.type === 'project' ? `/activity/${item.id}` : `/${item.type}/${item.id}`;
              navigate(path);
            }}
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
};

export default PortfolioSlider;
