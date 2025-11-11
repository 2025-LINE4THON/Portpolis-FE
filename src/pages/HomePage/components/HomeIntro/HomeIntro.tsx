import * as H from './HomeIntro.styles';

const HomeIntro = () => {
  return (
    <>
      <H.HomeIntro>
        <H.Title>
          <h1>
            당신만의 포트폴리오
            <br />
            <span>Portpolis</span>로 정리하세요.
          </h1>

          <h3>
            Portpolis는 진로를 탐색하거나 커리어를 쌓아가는 누구나,
            <br />
            나만의 활동을 기록하고 감각적인 포트폴리오로 전환할 수 있는 ‘포트폴리오 생성기 + 기록 플랫폼’입니다.
          </h3>
        </H.Title>

        <H.CardsIcon />
      </H.HomeIntro>

      <H.BGIcon />
      <H.EllipseIcon />
    </>
  );
};

export default HomeIntro;
