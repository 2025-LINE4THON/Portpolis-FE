import * as M from './MyPage.styles';
import PageBlock from '@components/PageBlock/PageBlock';
import EditModal from '@components/EditModal/EditModal';
import palette from '@/styles/theme';
import { useEffect, useState } from 'react';
import EditInputBox from '@/components/EditInputBox/EditInputBox';
import github from '@assets/mypage/icon-github.svg';
import brunch from '@assets/mypage/icon-brunch.svg';
import notion from '@assets/mypage/icon-notion.svg';
import insta from '@assets/mypage/icon-instagram.svg';
import youtube from '@assets/mypage/icon-youtube.svg';
import extraLink from '@assets/mypage/icon-extra-link.svg';
import PortfolioSlider from '@components/ProjectSlider/ProjectSlider';
import type { ResponseUserInfoDTO, RequestEditUserInfoDTO, RequestLinkDTO } from '@/types/Mypage/Mypage';
import { getUserInfo, patchUserInfo, Logout, getPortfolio, uploadLink } from '@apis/Mypage/Mypage';

const MyPage = () => {
  const [profileModal, setProfileModal] = useState(false);
  const [linkModal, setLinkModal] = useState(false);

  const [profile, setProfile] = useState<ResponseUserInfoDTO['data']>({
    userId: 0,
    username: '',
    name: '',
    email: '',
    phoneNumber: '',
    introduction: '',
    job: '',
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

  const [portfolio, setPortfolio] = useState<{ id: number; type: 'portfolio'; title: string; image: string | null }[]>(
    [],
  );

  useEffect(() => {
    const getProfile = async () => {
      try {
        const [UserRes, PortfolioRes] = await Promise.all([getUserInfo(), getPortfolio()]);

        console.log(UserRes.data, PortfolioRes.data);
        setProfile(UserRes.data);
        setPortfolio(
          PortfolioRes.data.map((item) => ({
            id: item.portfolioId,
            type: 'portfolio',
            title: item.title,
            image: item.thumbnail ?? '',
          })),
        );
      } catch (error) {
        console.error('마이페이지 조회 실패', error);
      }
    };
    getProfile();
  }, []);

  const handleLogout = async () => {
    try {
      const response = await Logout();
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const patchProfile = async () => {
    try {
      const requestData: RequestEditUserInfoDTO = {
        name: profile.name ?? '',
        email: profile.email ?? '',
        phoneNumber: profile.phoneNumber ?? '',
        introduction: profile.introduction ?? '',
        job: profile.job ?? '',
      };

      const response = await patchUserInfo(requestData);
      setProfileModal(false);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLink = async () => {
    try {
      const requestData: RequestLinkDTO = {
        links: Object.entries(links)
          .filter(([_, url]) => url.trim() !== '') // 비어 있는 값은 제외
          .map(([key, url]) => ({
            linkType: key,
            url: url,
          })),
      };

      const response = await uploadLink(requestData);
      setLinkModal(false);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <M.Background />
      <M.MyPage>
        <M.Header>
          <M.H3>마이페이지</M.H3>
          <M.B1>내 프로필 정보와 작성한 프트폴리오를 관리하세요.</M.B1>
        </M.Header>
        <M.MyInfoContainer>
          <PageBlock
            width="100%"
            text={profile.name || ''}
            middleContent={profile.job && <M.Job>{profile.job}</M.Job>}
            content={
              <M.MyInfo>
                <div>
                  <div style={{ display: 'flex' }}>
                    {profile.phoneNumber} {profile.email && <div> / {profile.email}</div>}
                  </div>
                  <div>총 프로젝트 개수 / 8개</div>
                </div>
                <button
                  onClick={() => {
                    handleLogout();
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
          <PageBlock width="100%" content={<M.MyInfo>{profile.introduction}</M.MyInfo>} />
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

        <PortfolioSlider items={portfolio} />
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
                  value={profile.name ?? ''}
                  placeholder="이름을 입력해주세요"
                  onChange={handleProfileChange}
                />
                <EditInputBox
                  width="100%"
                  title="직무 / 직군"
                  name="job"
                  value={profile.job ?? ''}
                  placeholder="직무 또는 직군을 입력해주세요"
                  onChange={handleProfileChange}
                />
              </M.ProfileRowContainer>
              <M.ProfileRowContainer>
                <EditInputBox
                  width="100%"
                  title="연락처"
                  name="phoneNumber"
                  value={String(profile.phoneNumber ?? '')}
                  placeholder="010-1234-1234"
                  onChange={handleProfileChange}
                />
                <EditInputBox
                  width="100%"
                  title="이메일"
                  name="email"
                  value={profile.email ?? ''}
                  placeholder="example@email.com"
                  onChange={handleProfileChange}
                />
              </M.ProfileRowContainer>
              <M.Textarea
                name="introduction"
                value={profile.introduction ?? ''}
                placeholder="간단한 자기소개를 입력해주세요."
                onChange={handleProfileChange}
              />
            </M.ProfileModal>
          }
          onClickSave={() => {
            patchProfile();
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
            handleLink();
          }}
        />
      )}
    </>
  );
};

export default MyPage;
