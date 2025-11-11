import HomeIntro from './components/HomeIntro/HomeIntro';
import * as H from './HomePage.styles';

const HomePage = () => {
  return (
    <H.HomePage>
      {/* 당신만의 포트폴리오~ 부분 */}
      <HomeIntro />
    </H.HomePage>
  );
};

export default HomePage;
