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
import type { ResponseUserInfoDTO, RequestEditUserInfoDTO, RequestLinkDTO, LinkDTO } from '@/types/Mypage/Mypage';
import { getUserInfo, patchUserInfo, Logout, getPortfolio, uploadLink, getLink } from '@apis/Mypage/Mypage';
import { useNavigate } from 'react-router-dom';

const MyPage = () => {
  const navigate = useNavigate();
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
    projectCount: 0,
  });

  const [links, setLinks] = useState<LinkDTO[]>([]);
  const [linkForm, setLinkForm] = useState<{ [key: string]: string }>({
    github: '',
    brunch: '',
    notion: '',
    insta: '',
    youtube: '',
    extra: '',
  });

  const iconMap: Record<string, string> = {
    github,
    brunch,
    notion,
    insta,
    youtube,
    extra: extraLink,
  };

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const [portfolio, setPortfolio] = useState<{ id: number; type: 'portfolio'; title: string; image: string | null }[]>(
    [],
  );

  useEffect(() => {
    const getProfile = async () => {
      try {
        const [UserRes, PortfolioRes, LinkRes] = await Promise.all([getUserInfo(), getPortfolio(), getLink()]);

        console.log(UserRes.data, PortfolioRes.data, LinkRes.data);
        setProfile(UserRes.data);
        setPortfolio(
          PortfolioRes.data.map((item) => ({
            id: item.portfolioId,
            type: 'portfolio',
            title: item.title,
            image: item.thumbnail ?? '',
          })),
        );

        setLinks(LinkRes.data);

        const form: { [key: string]: string } = {
          github: '',
          brunch: '',
          notion: '',
          insta: '',
          youtube: '',
          extra: '',
        };

        LinkRes.data.forEach((item) => {
          form[item.linkType] = item.url;
        });
        setLinkForm(form);
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
      navigate('/login');
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
    const requestData: RequestLinkDTO = {
      links: Object.entries(linkForm)
        .filter(([_, url]) => url.trim() !== '')
        .map(([type, url]) => ({
          linkType: type,
          url,
        })),
    };

    await uploadLink(requestData);

    const updated = await getLink();
    setLinks(updated.data);

    setLinkModal(false);
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
                  <div>총 프로젝트 개수 | {profile.projectCount}개</div>
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
            text="내 링크"
            content={
              <M.MyLink>
                {links.map((link) => (
                  <a key={link.userLinkId} href={link.url} target="_blank">
                    <img src={iconMap[link.linkType]} alt={link.linkType} />
                  </a>
                ))}
              </M.MyLink>
            }
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
              {Object.keys(linkForm).map((type) => (
                <M.LinkContainer key={type}>
                  {type === 'extra' ? (
                    <div
                      style={{
                        width: '60px',
                        height: '50px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <img src={iconMap[type]} style={{ width: '34px' }} />
                    </div>
                  ) : (
                    <img src={iconMap[type]} alt={type} />
                  )}

                  <EditInputBox
                    width="100%"
                    name={type}
                    value={linkForm[type]}
                    placeholder="https:// 주소를 입력해주세요."
                    onChange={(e) => setLinkForm((prev) => ({ ...prev, [type]: e.target.value }))}
                  />
                </M.LinkContainer>
              ))}
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
