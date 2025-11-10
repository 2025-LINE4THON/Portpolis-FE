import * as E from './EditIntroduce.styles';
import BrunchIcon from '@assets/PortfolioCreatePage/icon-bruch.svg?react';
import NotionIcon from '@assets/PortfolioCreatePage/icon-notion.svg?react';
import GithubIcon from '@assets/PortfolioCreatePage/icon-github.svg?react';
import InstaIcon from '@assets/PortfolioCreatePage/icon-instagram.svg?react';
import YoutubeIcon from '@assets/PortfolioCreatePage/icon-youtube.svg?react';

export const EditIntroduce = () => {
  const ACCOUNTS = [
    { id: 1, icon: <BrunchIcon /> },
    { id: 2, icon: <NotionIcon /> },
    { id: 3, icon: <GithubIcon /> },
    { id: 4, icon: <InstaIcon /> },
    { id: 5, icon: <YoutubeIcon /> },
  ];

  return (
    <E.EditIntroduce>
      <E.Title>
        <p>안녕하세요</p>
        <p>
          <span>프론트엔드</span> 개발자
        </p>
        <p>아기사자입니다.</p>
      </E.Title>

      <E.DividerIcon />

      <E.Intro>
        <p>React를 중심으로 웹 프론트엔드를 개발합니다.</p>
        <p>함께 제품을 만들고 성장시킬 곳을 찾고 있습니다.</p>
      </E.Intro>

      <E.Account>
        {ACCOUNTS.map((account) => (
          <div key={account.id}>{account.icon}</div>
        ))}
      </E.Account>
    </E.EditIntroduce>
  );
};

export default EditIntroduce;
