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
          <ActivityInputBox width="60%" text="활동명" isRequired={true} placeholder="프로젝트 이름을 입력하세요" />
          <ActivityInputBox width="30%" text="프로젝트 기간" isRequired={true} content={<></>} />
          <ActivityInputBox width="10%" isRequired={false} content={<></>} />
        </A.RowContainer>
        <A.RowContainer>
          <ActivityInputBox
            width="50%"
            text="역할"
            isRequired={true}
            placeholder="프로젝트에서 맡은 역할을 써주세요."
          />
          <ActivityInputBox width="50%" text="태그" isRequired={false} content={<></>} />
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
