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
import type { RequestRegisterDTO } from '@/types/Activity/Activity';
import { RegisterProject } from '@/apis/Activity/Activity';
import { uploadImage, uploadImages } from '@/apis/upload';
import { useNavigate } from 'react-router-dom';

const ActivityCreatePage = () => {
  const navigate = useNavigate();
  const [onGoing, setOnGoing] = useState(false);
  const [file, setFile] = useState<string | null>(null);
  const [thumbnailFile, setThumbnailFile] = useState<File | null>(null);
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    setFile(URL.createObjectURL(selectedFile));
    setThumbnailFile(selectedFile);
  };

  const [project, setProject] = useState<RequestRegisterDTO>({
    title: '',
    startDate: '',
    endDate: null,
    role: '',
    thumbnail: '',
    tags: [],
    contents: [
      { title: '프로젝트 핵심 요약', content: '' },
      { title: '프로젝트 소개', content: '' },
      { title: '핵심 이슈와 해결 전략', content: '' },
      { title: '협업 경험 및 역할', content: '' },
      { title: '결과 및 성장점', content: '' },
    ],
    images: [],
    links: [],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, type, value, checked } = e.target as HTMLInputElement;
    setProject((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const [tagInputValue, setTagInputValue] = useState('');
  const [linkTitle, setLinkTitle] = useState('');
  const [linkUrl, setLinkUrl] = useState('');
  const handleTagKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const value = e.currentTarget.value.trim();
      if (!value) return;

      if (project.tags.length >= 6) return;

      setProject((prev) => ({
        ...prev,
        tags: [...prev.tags, value],
      }));

      setTagInputValue('');
    }
  };

  const removeTag = (tag: string) => {
    setProject((prev) => ({
      ...prev,
      tags: prev.tags.filter((t) => t !== tag),
    }));
  };

  const removeLink = (title: string) => {
    setProject((prev) => ({
      ...prev,
      links: prev.links.filter((l) => l.name !== title),
    }));
  };

  const addLink = (link: { name: string; url: string }) => {
    setProject((prev) => ({ ...prev, links: [...prev.links, link] }));
  };

  const imageInputRef = useRef<HTMLInputElement | null>(null);

  const handleImageUploadClick = () => {
    imageInputRef.current?.click();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const filesArray = Array.from(files);
    const newImageUrls = filesArray.map((file) => URL.createObjectURL(file));

    setProject((prev) => ({
      ...prev,
      images: [...prev.images, ...newImageUrls].slice(0, 4),
    }));

    setImageFiles((prev) => [...prev, ...filesArray].slice(0, 4));

    e.target.value = '';
  };

  const removeImage = (index: number) => {
    setProject((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
    setImageFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleContentChange = (index: number, value: string) => {
    setProject((prev) => {
      const updated = [...prev.contents];
      updated[index].content = value;
      return { ...prev, contents: updated };
    });
  };

  const handleRegister = async () => {
    try {
      // 1. 대표 이미지 업로드
      let thumbnailUrl = '';
      if (thumbnailFile) {
        thumbnailUrl = await uploadImage(thumbnailFile);
        console.log('대표이미지 업로드 성공:', thumbnailUrl);
      }

      // 2. 관련 이미지들 업로드
      let imageUrls: string[] = [];
      if (imageFiles.length > 0) {
        imageUrls = await uploadImages(imageFiles);
        console.log('이미지 업로드 성공:', imageUrls);
      }

      // 3. 프로젝트 데이터 생성
      const requestData: RequestRegisterDTO = {
        ...project,
        thumbnail: thumbnailUrl,
        images: imageUrls,
      };

      // 4. 프로젝트 등록
      const response = await RegisterProject(requestData);
      console.log('프로젝트 등록 성공:', response);
      alert('프로젝트가 성공적으로 등록되었습니다!');
      navigate(`/activity/${response.data.projectId}`);
    } catch (error) {
      console.error('프로젝트 등록 실패:', error);
      alert('프로젝트 등록에 실패했습니다.');
    }
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
            <A.Btn onClick={handleRegister}>
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
              name="title"
              value={project.title}
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
                  {onGoing ? (
                    <A.B2 style={{ width: '100%', whiteSpace: 'nowrap' }}>현재 진행 중</A.B2>
                  ) : (
                    <A.InvisibleInput
                      name="endDate"
                      value={project.endDate ?? ''}
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
                  <A.InvisibleInput
                    type="checkbox"
                    onChange={() => {
                      setOnGoing((prev) => !prev);
                    }}
                    style={{ width: '15px' }}
                  />
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
                    <A.Tag key={tag} onClick={() => removeTag(tag)}>
                      #{tag}
                    </A.Tag>
                  ))}
                  <A.InvisibleInput
                    type="text"
                    placeholder="#태그입력 (최대 6개)"
                    value={tagInputValue}
                    onChange={(e) => setTagInputValue(e.target.value)}
                    onKeyUp={handleTagKeyUp}
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
                text="프로젝트 핵심 요약"
                content={
                  <A.InvisibleTextarea
                    value={project.contents[0].content}
                    placeholder="프로젝트에 대한 소개, 문제 해결 과정, 활동에서 한 일 등등 이 프로젝트에서 강조하고 싶은 내용을 적어주세요."
                    onChange={(e) => handleContentChange(0, e.target.value)}
                  />
                }
              />
              <PageBlock
                text="프로젝트 소개"
                content={
                  <A.InvisibleTextarea
                    value={project.contents[1].content}
                    placeholder="우리 프로젝트는 이것인데, N명이 참여해서 N개월 동안 작업했어요.
이 프로젝트는 이렇게 시작되었고, 대략 이런 것이라고 할 수 있어요."
                    onChange={(e) => handleContentChange(1, e.target.value)}
                  />
                }
              />
              <PageBlock
                text="핵심 이슈와 해결 전략"
                content={
                  <A.InvisibleTextarea
                    value={project.contents[2].content}
                    placeholder="여기서 나는 이런 일을 했고, 이런 아이디어를 냈어요.
특히 이러한 이슈들이 발생했는데, 이것을 해결하는 데 기여를 했어요."
                    onChange={(e) => handleContentChange(2, e.target.value)}
                  />
                }
              />
              <PageBlock
                text="협업 경헙 및 역할"
                content={
                  <A.InvisibleTextarea
                    value={project.contents[3].content}
                    placeholder="팀 내에서 이런 방식으로 협업했고 이런 역할을 맡았어요.
협업 과정에서 이러한 이슈가 생겼고, 이렇게 해결했어요."
                    onChange={(e) => handleContentChange(3, e.target.value)}
                  />
                }
              />
              <PageBlock
                text="결과 및 성장점"
                content={
                  <A.InvisibleTextarea
                    name="result"
                    value={project.contents[4].content}
                    placeholder="성과가 있는 경우 : 이런 결과를 냈어요.
성과가 없는 경우 : 이런 걸 배웠어요."
                    onChange={(e) => handleContentChange(4, e.target.value)}
                  />
                }
              />
            </A.InfomationBlocks>
            <A.InfomationBlocks style={{ width: '30%', minWidth: '312px' }}>
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
                    <A.RoundedContent onClick={() => addLink({ name: linkTitle, url: linkUrl })}>
                      링크 추가
                    </A.RoundedContent>
                    {project.links.map((link) => (
                      <A.RowContainer style={{ gap: '5px' }}>
                        <A.Stack key={link.name}>{link.name}</A.Stack>
                        <img src={x} onClick={() => removeLink(link.name)} style={{ width: '8px' }} />
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
