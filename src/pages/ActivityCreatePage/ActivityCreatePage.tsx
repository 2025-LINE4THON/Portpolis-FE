import * as A from './ActivityCreatePage.styles';
import goback from '@assets/activity/icon-goback.svg';
import Upload from '@assets/activity/icon-upload.svg?react';
import trash from '@assets/activity/icon-trash.svg';
import save from '@assets/activity/icon-edit-save.svg';
import palette from '@/styles/theme';
import { useState, useRef } from 'react';
import ActivityInputBox from './components/ActivityInputBox/ActivityInputBox';
import PageBlock from '@/components/PageBlock/PageBlock';
import x from '@assets/activity/icon-x.svg';

const ActivityCreatePage = () => {
  const [file, setFile] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    setFile(URL.createObjectURL(selectedFile));
  };

  const [project, setProject] = useState({
    name: '',
    startDate: '',
    endDate: '',
    onGoing: false,
    role: '',
    tags: [] as string[],
    introduction: '',
    teamwork: '',
    trouble: '',
    solution: '',
    result: '',
    stacks: [] as string[],
    images: [] as string[],
    links: [] as { title: string; url: string }[],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, type, value, checked } = e.target as HTMLInputElement;
    setProject((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const [tagInputValue, setTagInputValue] = useState('');
  const [stackInputValue, setStackInputValue] = useState('');
  const [linkTitle, setLinkTitle] = useState('');
  const [linkUrl, setLinkUrl] = useState('');

  const handleTagKeyUp = (e: React.KeyboardEvent<HTMLInputElement>, type: 'tags' | 'stacks') => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const value = e.currentTarget.value.trim();
      if (value === '') return;
      const currentList = project[type];
      const max = type === 'tags' ? 6 : 8;
      if (currentList.length >= max) return;
      if (currentList.includes(value)) return;
      setProject((prev) => ({ ...prev, [type]: [...prev[type], value] }));
      if (type === 'tags') setTagInputValue('');
      else setStackInputValue('');
    }
  };

  const removeItem = (type: 'tags' | 'stacks' | 'links', item: string | { title: string; url: string }) => {
    setProject((prev) => {
      if (type === 'links') {
        return {
          ...prev,
          links: prev.links.filter((link) => link.title !== (item as { title: string }).title),
        };
      }

      return {
        ...prev,
        [type]: prev[type].filter((el) => el !== item),
      };
    });
  };
  const addLink = (title: string, url: string) => {
    if (!title.trim() || !url.trim()) return;

    setProject((prev) => ({
      ...prev,
      links: [...prev.links, { title, url }],
    }));
  };

  const imageInputRef = useRef<HTMLInputElement | null>(null);

  const handleImageUploadClick = () => {
    imageInputRef.current?.click();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const newImages = Array.from(files).map((file) => URL.createObjectURL(file));

    setProject((prev) => ({
      ...prev,
      images: [...prev.images, ...newImages].slice(0, 4),
    }));

    e.target.value = '';
  };

  const removeImage = (index: number) => {
    setProject((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  };

  return (
    <>
      <A.Background />
      <A.ActivityCreatePage>
        <A.Header bgimg={file}>
          <A.Nav>
            <A.GoBack src={goback} />
            <A.H3>활동 등록</A.H3>
          </A.Nav>

          <A.AddFileBtn onClick={handleFileUploadClick}>
            <Upload style={{ color: !file ? palette.neutral.neutral400 : palette.white }} />

            <A.B2 style={{ color: !file ? palette.neutral.neutral400 : palette.white }}>대표 이미지 추가</A.B2>
          </A.AddFileBtn>

          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />

          <A.FileHandleBtns>
            <A.Btn>
              저장하기 <img src={save} />
            </A.Btn>
            <A.Btn style={{ color: palette.danger.default }}>
              삭제 <img src={trash} />
            </A.Btn>
          </A.FileHandleBtns>
        </A.Header>

        <A.BasicInfo>
          <A.RowContainer>
            <ActivityInputBox
              width="60%"
              text="활동명"
              isRequired={true}
              name="name"
              value={project.name}
              placeholder="프로젝트 이름을 입력하세요"
              onChange={handleChange}
            />
            <ActivityInputBox
              width="30%"
              text="프로젝트 기간"
              isRequired={true}
              content={
                <A.RowContainer style={{ gap: '5px', marginTop: '7px' }}>
                  <A.InvisibleInput
                    width="100%"
                    name="startDate"
                    value={project.startDate}
                    placeholder="YYYY-MM-DD"
                    onChange={handleChange}
                  />
                  ~
                  {project.onGoing ? (
                    <A.B2 style={{ width: '100%', whiteSpace: 'nowrap' }}>현재 진행 중</A.B2>
                  ) : (
                    <A.InvisibleInput
                      name="endDate"
                      value={project.endDate}
                      placeholder="YYYY-MM-DD"
                      onChange={handleChange}
                    />
                  )}
                </A.RowContainer>
              }
            />
            <ActivityInputBox
              width="14%"
              isRequired={false}
              content={
                <A.Checkbox>
                  <A.B2 style={{ minWidth: '30px', whiteSpace: 'nowrap' }}>진행중</A.B2>
                  <A.InvisibleInput type="checkbox" name="onGoing" onChange={handleChange} style={{ width: '15px' }} />
                </A.Checkbox>
              }
            />
          </A.RowContainer>
          <A.RowContainer>
            <ActivityInputBox
              width="50%"
              text="역할"
              isRequired={true}
              name="role"
              value={project.role}
              placeholder="프로젝트에서 맡은 역할을 써주세요."
              onChange={handleChange}
            />
            <ActivityInputBox
              width="50%"
              text="태그"
              isRequired={false}
              content={
                <A.RowContainer style={{ gap: '5px', alignItems: 'center' }}>
                  {project.tags.map((tag) => (
                    <A.Tag key={tag} onClick={() => removeItem('tags', tag)}>
                      #{tag}
                    </A.Tag>
                  ))}
                  <A.InvisibleInput
                    type="text"
                    placeholder="#태그입력 (최대 6개)"
                    value={tagInputValue}
                    onChange={(e) => setTagInputValue(e.target.value)}
                    onKeyUp={(e) => handleTagKeyUp(e, 'tags')}
                    style={{ marginTop: project.tags && '5px' }}
                  />
                </A.RowContainer>
              }
            />
          </A.RowContainer>
        </A.BasicInfo>

        <A.ExtraInfo>
          <A.RowContainer>
            <A.InfomationBlocks>
              <PageBlock
                text="활동 소개"
                content={
                  <A.InvisibleTextarea
                    name="introduction"
                    value={project.introduction}
                    placeholder="내용을 입력하세요."
                    onChange={handleChange}
                  />
                }
              />
              <PageBlock
                text="팀워크"
                content={
                  <A.InvisibleTextarea
                    name="teamwork"
                    value={project.teamwork}
                    placeholder="내용을 입력하세요."
                    onChange={handleChange}
                  />
                }
              />
              <PageBlock
                text="어려웠던 점"
                content={
                  <A.InvisibleTextarea
                    name="trouble"
                    value={project.trouble}
                    placeholder="내용을 입력하세요."
                    onChange={handleChange}
                  />
                }
              />
              <PageBlock
                text="해결 방법"
                content={
                  <A.InvisibleTextarea
                    name="solution"
                    value={project.solution}
                    placeholder="내용을 입력하세요."
                    onChange={handleChange}
                  />
                }
              />
              <PageBlock
                text="결과 및 성장점"
                content={
                  <A.InvisibleTextarea
                    name="result"
                    value={project.result}
                    placeholder="내용을 입력하세요."
                    onChange={handleChange}
                  />
                }
              />
            </A.InfomationBlocks>
            <A.InfomationBlocks style={{ width: '30%', minWidth: '312px' }}>
              <PageBlock
                gap="15px"
                padding="15px 27px"
                text="기술 스택"
                content={
                  <>
                    <A.RoundedContent>
                      <A.InvisibleInput
                        width="100%"
                        placeholder="#스택입력 (최대 8개)"
                        value={stackInputValue}
                        onChange={(e) => setStackInputValue(e.target.value)}
                        onKeyUp={(e) => handleTagKeyUp(e, 'stacks')}
                      />
                    </A.RoundedContent>
                    <A.TagWrapper>
                      {project.stacks.map((stack) => (
                        <>
                          <A.Stack key={stack}>{stack}</A.Stack>
                          <img src={x} onClick={() => removeItem('stacks', stack)} />
                        </>
                      ))}
                    </A.TagWrapper>
                  </>
                }
              />
              <PageBlock
                gap="11px"
                padding="15px 27px"
                text="관련 이미지"
                content={
                  <>
                    <A.RowContainer style={{ gap: '10px' }}>
                      {project.images.map((img, idx) => (
                        <A.ImageBox key={idx} src={img} onClick={() => removeImage(idx)} />
                      ))}
                    </A.RowContainer>

                    <A.RoundedContent onClick={handleImageUploadClick}>이미지 업로드</A.RoundedContent>

                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      ref={imageInputRef}
                      style={{ display: 'none' }}
                      onChange={handleImageChange}
                    />
                  </>
                }
              />
              <PageBlock
                gap="11px"
                padding="15px 27px"
                text="관련 링크"
                content={
                  <>
                    <A.RoundedContent>
                      <A.InvisibleInput
                        width="100%"
                        placeholder="링크 제목"
                        value={linkTitle}
                        onChange={(e) => setLinkTitle(e.target.value)}
                      />
                    </A.RoundedContent>
                    <A.RoundedContent>
                      <A.InvisibleInput
                        width="100%"
                        placeholder="https://example.com"
                        value={linkUrl}
                        onChange={(e) => setLinkUrl(e.target.value)}
                      />
                    </A.RoundedContent>
                    <A.RoundedContent onClick={() => addLink(linkTitle, linkUrl)}>링크 추가</A.RoundedContent>
                    {project.links.map((link) => (
                      <A.RowContainer style={{ gap: '5px' }}>
                        <A.Stack key={link.title}>{link.title}</A.Stack>
                        <img src={x} onClick={() => removeItem('links', link)} style={{ width: '8px' }} />
                      </A.RowContainer>
                    ))}
                  </>
                }
              />
            </A.InfomationBlocks>
          </A.RowContainer>
        </A.ExtraInfo>
      </A.ActivityCreatePage>
    </>
  );
};

export default ActivityCreatePage;
