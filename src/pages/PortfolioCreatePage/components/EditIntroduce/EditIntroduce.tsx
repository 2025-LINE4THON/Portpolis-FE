import * as E from './EditIntroduce.styles';
import BrunchIcon from '@assets/PortfolioCreatePage/icon-bruch.svg?react';
import NotionIcon from '@assets/PortfolioCreatePage/icon-notion.svg?react';
import GithubIcon from '@assets/PortfolioCreatePage/icon-github.svg?react';
import InstaIcon from '@assets/PortfolioCreatePage/icon-instagram.svg?react';
import YoutubeIcon from '@assets/PortfolioCreatePage/icon-youtube.svg?react';
import useGetUsers from '@/hooks/queries/PortfolioCreatePage/useGetUsers';

export const EditIntroduce = () => {
  const ACCOUNTS = [
    { id: 1, icon: <BrunchIcon /> },
    { id: 2, icon: <NotionIcon /> },
    { id: 3, icon: <GithubIcon /> },
    { id: 4, icon: <InstaIcon /> },
    { id: 5, icon: <YoutubeIcon /> },
  ];

  // 내 정보 조회
  const { data: userData } = useGetUsers();

  return (
    <E.EditIntroduce>
      <E.Title>
        <p>안녕하세요</p>
        <p>
          <span>{userData?.data.job}</span>
        </p>
        <p>{userData?.data.username}입니다.</p>
      </E.Title>

      <E.DividerIcon />

      <E.Intro>
        <p>{userData?.data.introduction}</p>
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
