import * as B from './ActivityDetailPage.styles';
import * as A from '@pages/ActivityCreatePage/ActivityCreatePage.styles';
import PageBlock from '@/components/PageBlock/PageBlock';
import trash from '@assets/activity/icon-trash.svg';
import save from '@assets/activity/icon-edit-save.svg';
import palette from '@/styles/theme';
import file from '@assets/activity/icon-trash.svg';
import goback from '@assets/activity/icon-green-goback.svg';

const ActivityDetailPage = () => {
  const tags = ['해커톤', '4호선톤'];
  return (
    <>
      <A.Background />
      <B.ActivityDetailPage>
        <A.Header bgimg={file}>
          <A.Nav>
            <A.GoBack src={goback} />
          </A.Nav>

          <B.BasicInfo>
            <B.Date>2025.09~2025.12</B.Date>
            <B.Title>감각적인 나만의 반려동물 도우미</B.Title>
            <A.RowContainer style={{ gap: '5px', marginTop: '18px' }}>
              {tags.map((tag) => (
                <A.Tag style={{ padding: '10px', borderRadius: '22px' }} key={tag}>
                  {tag}
                </A.Tag>
              ))}
            </A.RowContainer>
          </B.BasicInfo>

          <A.FileHandleBtns>
            <A.Btn>
              수정 <img src={save} />
            </A.Btn>
            <A.Btn style={{ color: palette.danger.default }}>
              삭제 <img src={trash} />
            </A.Btn>
          </A.FileHandleBtns>
        </A.Header>

        <A.ExtraInfo>
          <A.RowContainer>
            <A.InfomationBlocks>
              <PageBlock text="활동 소개" content={<></>} />
              <PageBlock text="팀워크" content={<></>} />
              <PageBlock text="어려웠던 점" content={<></>} />
              <PageBlock text="해결 방법" content={<></>} />
              <PageBlock text="결과 및 성장점" content={<></>} />
            </A.InfomationBlocks>

            <A.InfomationBlocks style={{ width: '30%', minWidth: '312px' }}>
              <PageBlock gap="15px" padding="15px 27px" text="관련 링크" content={<></>} />
              <PageBlock gap="11px" padding="15px 27px" text="관련 이미지" content={<></>} />
              <PageBlock
                gap="11px"
                padding="15px 27px"
                text="태그"
                content={
                  <A.TagWrapper>
                    {tags.map((tag) => (
                      <B.Tag key={tag}>{tag}</B.Tag>
                    ))}
                  </A.TagWrapper>
                }
              />
            </A.InfomationBlocks>
          </A.RowContainer>
        </A.ExtraInfo>
      </B.ActivityDetailPage>
    </>
  );
};

export default ActivityDetailPage;
