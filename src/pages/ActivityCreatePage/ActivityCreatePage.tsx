import * as A from './ActivityCreatePage.styles';
import goback from '@assets/activity/icon-goback.svg';
import Upload from '@assets/activity/icon-upload.svg?react';
import trash from '@assets/activity/icon-trash.svg';
import save from '@assets/activity/icon-edit-save.svg';
import palette from '@/styles/theme';
import { useState, useRef } from 'react';
import ActivityInputBox from './components/ActivityInputBox/ActivityInputBox';
import PageBlock from '@/components/PageBlock/PageBlock';

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
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, type, value, checked } = e.target as HTMLInputElement;
    setProject((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const [tagInputValue, setTagInputValue] = useState('');

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const value = e.currentTarget.value.trim(); // ← 이걸로 최신 값 보장

      if (value === '') return;
      if (project.tags.length >= 6) return;
      if (project.tags.includes(value)) return;

      setProject((prev) => ({
        ...prev,
        tags: [...prev.tags, value],
      }));
      setTagInputValue('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setProject((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagToRemove),
    }));
  };

  return (
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
              <A.RowContainer style={{ gap: '5px' }}>
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
                  onKeyUp={handleKeyDown}
                />
              </A.RowContainer>
            }
          />
        </A.RowContainer>
      </A.BasicInfo>

      <A.ExtraInfo>
        <A.RowContainer>
          <A.InfomationBlocks>
            <PageBlock text="활동 소개" content={<>ㅇㅇ</>} />
            <PageBlock content={<>ㅇㅇ</>} />
          </A.InfomationBlocks>
          <A.InfomationBlocks style={{ width: '356px' }}>
            <PageBlock text="기술 스택" content={<>ㅇㅇ</>} />
            <PageBlock text="관련 이미지" content={<>ㅇㅇ</>} />
            <PageBlock text="관련 링크" content={<>ㅇㅇ</>} />
          </A.InfomationBlocks>
        </A.RowContainer>
      </A.ExtraInfo>
    </A.ActivityCreatePage>
  );
};

export default ActivityCreatePage;
