import * as M from './MyPage.styles';
import PageBlock from '@components/PageBlock/PageBlock';
import EditModal from '@components/EditModal/EditModal';
import palette from '@/styles/theme';
import { useState } from 'react';
import EditInputBox from '@/components/EditInputBox/EditInputBox';
import github from '@assets/mypage/icon-github.svg';
import brunch from '@assets/mypage/icon-brunch.svg';
import notion from '@assets/mypage/icon-notion.svg';
import insta from '@assets/mypage/icon-instagram.svg';
import youtube from '@assets/mypage/icon-youtube.svg';
import extraLink from '@assets/mypage/icon-extra-link.svg';
import PortfolioSlider from '@components/ProjectSlider/ProjectSlider';

const MyPage = () => {
  const [profileModal, setProfileModal] = useState(false);
  const [linkModal, setLinkModal] = useState(false);

  const [profile, setProfile] = useState({
    name: '',
    job: '',
    phoneNum: '',
    email: '',
    introduction: '',
  });

  const [links, setLinks] = useState({
    github: '',
    brunch: '',
    notion: '',
    insta: '',
    youtube: '',
    extra: '',
  });

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleLinkChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setLinks((prev) => ({ ...prev, [name]: value }));
  };

  const dummyData = [
    {
      id: 1,
      image: 'edit',
      type: 'portfolio',
      period: '25.09-25.12',
      title: '감각적인 브랜드를 만드는1',
      isPrivate: false,
    },
    {
      id: 2,
      image: 'edit',
      type: 'portfolio',
      period: '25.09-25.12',
      title: '감각적인 브랜드를 만드는2',
      isPrivate: false,
    },
    {
      id: 3,
      image: 'edit',
      type: 'portfolio',
      period: '25.09-25.12',
      title: '감각적인 브랜드를 만드는3',
      isPrivate: false,
    },
    {
      id: 5,
      image: 'edit',
      type: 'portfolio',
      period: '25.09-25.12',
      title: '감각적인 브랜드를 만드는4',
      isPrivate: false,
    },
    {
      id: 6,
      image: 'edit',
      type: 'portfolio',
      period: '25.09-25.12',
      title: '감각적인 브랜드를 만드5 1',
      isPrivate: false,
    },
  ];

  return (
    <>
      <M.MyPage>
        <M.Header>
          <M.H3>마이페이지</M.H3>
          <M.B1>내 프로필 정보와 작성한 프트폴리오를 관리하세요.</M.B1>
        </M.Header>
        <M.MyInfoContainer>
          <PageBlock
            width="100%"
            text="아기사자"
            middleContent={<M.Job>UI/UX 디자이너</M.Job>}
            content={
              <M.MyInfo>
                <div>
                  <div>010-1234-1234 / soye853@gmail.com</div>
                  <div>총 프로젝트 개수 / 8개</div>
                </div>
                <button
                  onClick={() => {
                    console.log('로그아웃');
                  }}
                  style={{ color: palette.neutral.neutral200 }}>
                  로그아웃
                </button>
              </M.MyInfo>
            }
            onClick={() => {
              setProfileModal(true);
            }}
          />
          <PageBlock
            width="320px"
            text="내 링크"
            content={<M.MyInfo></M.MyInfo>}
            onClick={() => {
              setLinkModal(true);
            }}
          />
        </M.MyInfoContainer>

        <div style={{ padding: '0 144px' }}>
          <PageBlock
            width="100%"
            content={
              <M.MyInfo>
                사용자 중심의 디자인을 지향하며, 실용적이고 아름다운 인터페이스를 만드는 것을 좋아합니다.
              </M.MyInfo>
            }
          />
        </div>
        <hr
          style={{
            width: 'calc(100% - 288px)',
            height: '1px',
            background: palette.neutral.neutral200,
            border: 0,
          }}
        />
        <M.Header>
          <M.H3>내 포트폴리오</M.H3>
          <M.B1>발행된 포트폴리오와 임시 저장본을 확인하세요.</M.B1>
        </M.Header>

        <PortfolioSlider items={dummyData} />
      </M.MyPage>

      {profileModal && (
        <EditModal
          text="내 프로필 수정"
          onClickX={() => {
            setProfileModal(false);
          }}
          content={
            <M.ProfileModal>
              <M.ProfileRowContainer>
                <EditInputBox
                  width="200px"
                  title="이름"
                  name="name"
                  value={profile.name}
                  placeholder="이름을 입력해주세요"
                  onChange={handleProfileChange}
                />
                <EditInputBox
                  width="100%"
                  title="직무 / 직군"
                  name="job"
                  value={profile.job}
                  placeholder="직무 또는 직군을 입력해주세요"
                  onChange={handleProfileChange}
                />
              </M.ProfileRowContainer>
              <M.ProfileRowContainer>
                <EditInputBox
                  width="100%"
                  title="연락처"
                  name="phoneNum"
                  value={profile.phoneNum}
                  placeholder="010-1234-1234"
                  onChange={handleProfileChange}
                />
                <EditInputBox
                  width="100%"
                  title="이메일"
                  name="email"
                  value={profile.email}
                  placeholder="example@email.com"
                  onChange={handleProfileChange}
                />
              </M.ProfileRowContainer>
              <M.Textarea
                name="introduction"
                value={profile.introduction}
                placeholder="간단한 자기소개를 입력해주세요."
                onChange={handleProfileChange}
              />
            </M.ProfileModal>
          }
          onClickSave={() => {
            console.log('저장');
          }}
        />
      )}
      {linkModal && (
        <EditModal
          text="내 링크 관리"
          onClickX={() => {
            setLinkModal(false);
          }}
          content={
            <M.ProfileModal>
              <M.LinkContainer>
                <img src={github} />
                <EditInputBox
                  width="100%"
                  name="github"
                  value={links.github}
                  placeholder="https:// 주소를 입려해주세요."
                  onChange={handleLinkChange}
                />
              </M.LinkContainer>
              <M.LinkContainer>
                <img src={brunch} />
                <EditInputBox
                  width="100%"
                  name="brunch"
                  value={links.brunch}
                  placeholder="https:// 주소를 입려해주세요."
                  onChange={handleLinkChange}
                />
              </M.LinkContainer>
              <M.LinkContainer>
                <img src={notion} />
                <EditInputBox
                  width="100%"
                  name="notion"
                  value={links.notion}
                  placeholder="https:// 주소를 입려해주세요."
                  onChange={handleLinkChange}
                />
              </M.LinkContainer>
              <M.LinkContainer>
                <img src={insta} />
                <EditInputBox
                  width="100%"
                  value={links.insta}
                  name="insta"
                  placeholder="https:// 주소를 입려해주세요."
                  onChange={handleLinkChange}
                />
              </M.LinkContainer>
              <M.LinkContainer>
                <img src={youtube} />
                <EditInputBox
                  width="100%"
                  name="youtube"
                  value={links.youtube}
                  placeholder="https:// 주소를 입려해주세요."
                  onChange={handleLinkChange}
                />
              </M.LinkContainer>
              <M.LinkContainer>
                <div style={{ width: '60px', height: '50px', display: 'flex', justifyContent: 'center' }}>
                  <img src={extraLink} style={{ width: '34px' }} />
                </div>
                <EditInputBox
                  width="100%"
                  name="extra"
                  value={links.extra}
                  placeholder="https:// 주소를 입려해주세요."
                  onChange={handleLinkChange}
                />
              </M.LinkContainer>
            </M.ProfileModal>
          }
          onClickSave={() => {
            console.log('저장');
          }}
        />
      )}
    </>
  );
};

export default MyPage;
