import * as M from './MyPage.styles';
import PageBlock from '@components/PageBlock/PageBlock';
import ProjectItem from '@components/ProjectItem/ProjectItem';
import EditModal from '@components/EditModal/EditModal';
import palette from '@/styles/theme';
import { useState } from 'react';

const MyPage = () => {
  const [profileModal, setProfileModal] = useState(false);
  const [linkModal, setLinkeModal] = useState(false);

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
            width="271px"
            text="내 링크"
            content={<M.MyInfo></M.MyInfo>}
            onClick={() => {
              setLinkeModal(true);
            }}
          />
        </M.MyInfoContainer>

        <PageBlock
          width="100%"
          content={
            <M.MyInfo>
              사용자 중심의 디자인을 지향하며, 실용적이고 아름다운 인터페이스를 만드는 것을 좋아합니다.
            </M.MyInfo>
          }
        />
        <hr style={{ width: '100%', height: '1px', background: palette.neutral.neutral200, border: 0 }} />
        <ProjectItem
          type="portfolio"
          image="edit"
          period="25.09-25.12"
          title="감각적인 브랜드를 만드는"
          onClick={() => console.log('클릭')}
          isPrivate={false}
        />
        <ProjectItem
          type="project"
          image="link"
          period="25.09-25.12"
          title="감각적인 브랜드를 만드는"
          onClick={() => console.log('클릭')}
          tags={['프론트', 'AI']}
          role="PM"
        />
      </M.MyPage>
      {profileModal && (
        <EditModal
          text="내 프로필 수정"
          onClickX={() => {
            setProfileModal(false);
          }}
          content={<div>dd</div>}
          onClickSave={() => {
            console.log('저장');
          }}
        />
      )}
    </>
  );
};

export default MyPage;
