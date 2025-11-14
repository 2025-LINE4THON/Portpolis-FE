import * as B from './ActivityDetailPage.styles';
import * as A from '@pages/ActivityCreatePage/ActivityCreatePage.styles';
import PageBlock from '@/components/PageBlock/PageBlock';
import trash from '@assets/activity/icon-trash.svg';
import save from '@assets/activity/icon-edit-save.svg';
import palette from '@/styles/theme';
import file from '@assets/activity/icon-trash.svg';
import goback from '@assets/activity/icon-green-goback.svg';
import { useParams, useNavigate } from 'react-router-dom';
import { getActivity } from '@/apis/Activity/Activity';
import type { ResponseProjectDetailDTO } from '@/types/Activity/Activity';
import { useEffect, useState } from 'react';

const ActivityDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState<ResponseProjectDetailDTO['data'] | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      try {
        const response = await getActivity(Number(id));
        setData(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [id]);

  if (!data) return null;

  return (
    <>
      <A.Background />
      <B.ActivityDetailPage>
        <A.Header bgimg={file}>
          <A.Nav>
            <A.GoBack src={goback} onClick={() => navigate(-1)} />
          </A.Nav>

          <B.BasicInfo>
            <B.Date>
              {data.startDate.slice(0, 10)} ~ {data.endDate?.slice(0, 10)}
            </B.Date>
            <B.Title>{data.title}</B.Title>
            <A.RowContainer style={{ gap: '5px', marginTop: '18px' }}>
              {data.projectTags.map((tag) => (
                <A.Tag style={{ padding: '10px', borderRadius: '22px' }} key={tag.tagId}>
                  {tag.content}
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
              {data.projectContents.map((section) => (
                <PageBlock
                  key={section.projectContentId}
                  text={section.title}
                  content={<A.InvisibleTextarea value={section.content} readOnly />}
                />
              ))}
            </A.InfomationBlocks>

            <A.InfomationBlocks style={{ width: '30%', minWidth: '312px' }}>
              <PageBlock
                gap="15px"
                padding="15px 27px"
                text="관련 링크"
                content={
                  <>
                    {data.links.length === 0 && <A.B2>등록된 링크가 없습니다.</A.B2>}{' '}
                    {data.links.map((l) => (
                      <a
                        key={l.userLinkId}
                        href={l.url}
                        target="_blank"
                        style={{
                          wordBreak: 'break-all',
                          color: palette.primary.primary500,
                          textDecoration: 'underline',
                          fontSize: '14px',
                        }}>
                        {l.url}
                      </a>
                    ))}
                  </>
                }
              />
              <PageBlock
                gap="11px"
                padding="15px 27px"
                text="관련 이미지"
                content={
                  <A.RowContainer style={{ flexWrap: 'wrap', gap: '10px' }}>
                    {data.projectImages.length === 0 && <A.B2>이미지가 없습니다.</A.B2>}
                    {data.projectImages.map((img) => (
                      <img
                        key={img.projectImageId}
                        src={img.url}
                        style={{
                          width: '100%',
                          borderRadius: '10px',
                          objectFit: 'cover',
                        }}
                      />
                    ))}
                  </A.RowContainer>
                }
              />
              <PageBlock
                gap="11px"
                padding="15px 27px"
                text="태그"
                content={
                  <A.TagWrapper>
                    {data.projectTags.map((tag) => (
                      <B.Tag key={tag.tagId}>{tag.content}</B.Tag>
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
