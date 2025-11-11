import * as H from './HomeNavigate.styles';

import AccountIcon from '@assets/HomePage/icon-nav-account.svg?react';
import CareerIcon from '@assets/HomePage/icon-nav-career.svg?react';
import PortfolioIcon from '@assets/HomePage/icon-nav-portfolio.svg?react';
import HomeButton from '../HomeButton/HomeButton';

const HomeNavigate = () => {
  const LINKS = [
    { id: 1, icon: <AccountIcon />, text: '계정 생성', to: '/signup' },
    { id: 2, icon: <CareerIcon />, text: '내 커리어 기록', to: '/career' },
    { id: 3, icon: <PortfolioIcon />, text: '포트폴리오 생성', to: '/portfolio/create' },
  ];

  return (
    <H.HomeNavigate>
      <H.Title>
        <h1>
          <span>3초안</span>에 시작해보세요!
        </h1>
        <h3>커리어를 정리하고, 포트폴리오로 나만의 스토리를 만들어보세요.</h3>
      </H.Title>

      <H.CardWrapper>
        {LINKS.map((link) => (
          <HomeButton key={link.id} Icon={link.icon} text={link.text} to={link.to} />
        ))}
      </H.CardWrapper>

      <H.BackgroundIcon />
    </H.HomeNavigate>
  );
};

export default HomeNavigate;
