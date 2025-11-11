import * as H from './HomeIntro.styles';

const HomeIntro = () => {
  return (
    <>
      <H.HomeIntro>
        <H.Title>
          <h1>
            나만의 포트폴리오,
            <br />
            <span>Portpolis</span>로 손쉽게 완성하세요.
          </h1>

          <h3>
            이제는 디자인보다 당신의 이야기에 집중하세요.
            <br />
            커리어를 기록하고 쉽게 포트폴리오로 전환할 수 있는 포트폴리오 생성 & 기록 플랫폼에 오신 것을 환영합니다.
          </h3>
        </H.Title>

        <H.CardsIcon />
        <H.EllipseIcon />

        <H.ArrowIcon />
      </H.HomeIntro>

      <H.BGIcon />
    </>
  );
};

export default HomeIntro;
