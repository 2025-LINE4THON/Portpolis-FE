import HomeIntro from './components/HomeIntro/HomeIntro';
import HomeNavigate from './components/HomeNavigate/HomeNavigate';
import HomeTrending from './components/HomeTrending/HomeTrending';
import * as H from './HomePage.styles';

const HomePage = () => {
  return (
    <H.HomePage>
      {/* 나만의 포트폴리오 부분 */}
      <HomeIntro />

      {/* 지금 가장 주목받는 포트폴리오 */}
      <HomeTrending />

      {/* 3초안에 시작해보세요 */}
      <HomeNavigate />
    </H.HomePage>
  );
};

export default HomePage;
