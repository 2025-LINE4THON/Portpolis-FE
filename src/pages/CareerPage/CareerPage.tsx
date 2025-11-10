import * as C from './CareerPage.styles';
import * as M from '@pages/MyPage/MyPage.styles';
import palette from '@/styles/theme';
import PageBlock from '@components/PageBlock/PageBlock';
import PortfolioSlider from '@components/ProjectSlider/ProjectSlider';
import EditModal from '@components/EditModal/EditModal';
import EditInputBox from '@/components/EditInputBox/EditInputBox';
import trash from '@assets/mypage/icon-trash.svg';
import { useState } from 'react';

const CareerPage = () => {
  const [experienceModal, setExperienceModal] = useState(false);
  const [stackModal, setStackModal] = useState(false);
  const [qualificationsModal, setQualificationsModal] = useState(false);

  const dummyData = [
    {
      id: 1,
      image: 'edit',
      type: 'project',
      period: '25.09-25.12',
      title: '감각적인 브랜드를 만드는1',
      tags: ['프론트', 'AI'],
      role: 'PM',
    },
    {
      id: 2,
      image: 'edit',
      type: 'project',
      period: '25.09-25.12',
      title: '감각적인 브랜드를 만드는2',
      tags: ['프론트', 'AI'],
      role: 'PM',
    },
    {
      id: 3,
      image: 'edit',
      type: 'project',
      period: '25.09-25.12',
      title: '감각적인 브랜드를 만드는3',
      tags: ['프론트', 'AI'],
      role: 'PM',
    },
    {
      id: 5,
      image: 'edit',
      type: 'project',
      period: '25.09-25.12',
      title: '감각적인 브랜드를 만드는4',
      tags: ['프론트', 'AI'],
      role: 'PM',
    },
    {
      id: 6,
      image: 'edit',
      type: 'project',
      period: '25.09-25.12',
      title: '감각적인 브랜드를 만드5 1',
      tags: ['프론트', 'AI'],
      role: 'PM',
    },
  ];

  interface Skill {
    name: string;
    level: string;
  }

  const [skills, setSkills] = useState<Skill[]>([
    { name: '', level: '' },
    { name: '', level: '' },
    { name: '', level: '' },
    { name: '', level: '' },
    { name: '', level: '' },
  ]);

  const handleChange = (index: number, field: keyof Skill, value: string) => {
    const updated = [...skills];
    updated[index][field] = value;
    setSkills(updated);
  };

  const handleDelete = (index: number) => {
    const updated = skills.filter((_, i) => i !== index);
    updated.push({ name: '', level: '' });
    setSkills(updated);
  };

  return (
    <>
      <C.CareerPage>
        <C.Header>
          <C.BoldText>당신만의 포트폴리오</C.BoldText>
          <C.BoldText>
            <span style={{ color: palette.primary.primary500 }}>Portpolis</span>로 정리하세요.
          </C.BoldText>
        </C.Header>

        <M.MyInfoContainer>
          <PageBlock
            width="100%"
            text="내 경력"
            content={<></>}
            onClick={() => {
              setExperienceModal(true);
            }}
          />
          <PageBlock
            width="271px"
            text="내 기술스택"
            content={<></>}
            onClick={() => {
              setStackModal(true);
            }}
          />
        </M.MyInfoContainer>
        <div style={{ padding: '0 144px' }}>
          <PageBlock
            width="100%"
            text="내 자격증"
            content={<></>}
            onClick={() => {
              setQualificationsModal(true);
            }}
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

        <C.SecondHeader>
          <C.BoldText>당신만의 포트폴리오</C.BoldText>
          <C.AddButton
            onClick={() => {
              console.log('프로젝트 추가');
            }}>
            프로젝트 추가
          </C.AddButton>
        </C.SecondHeader>
        <PortfolioSlider items={dummyData} />
      </C.CareerPage>
      {experienceModal && (
        <EditModal
          text="내 경력"
          onClickX={() => {
            setExperienceModal(false);
          }}
          content={
            <C.ModalContent>
              <C.ModalHeader>
                <C.InputContent>
                  기술 스택<span style={{ color: palette.danger.default }}>*</span>
                </C.InputContent>
                <C.InputContent>
                  숙련 정도<span style={{ color: palette.danger.default }}>*</span>
                </C.InputContent>
              </C.ModalHeader>

              {skills.map((skill, index) => (
                <C.Row key={index}>
                  <EditInputBox
                    width="50%"
                    name="name"
                    placeholder="이름을 입력해주세요."
                    value={skill.name}
                    onChange={(e) => handleChange(index, 'name', e.target.value)}
                  />
                  <EditInputBox
                    width="40%"
                    name="level"
                    placeholder="0-100"
                    value={skill.level}
                    onChange={(e) => handleChange(index, 'level', e.target.value)}
                  />
                  <C.DeleteBtn onClick={() => handleDelete(index)}>
                    <img src={trash} />
                  </C.DeleteBtn>
                </C.Row>
              ))}
            </C.ModalContent>
          }
          onClickSave={() => {
            console.log('저장');
          }}
        />
      )}
      {stackModal && (
        <EditModal
          text="내 기술스택"
          onClickX={() => {
            setStackModal(false);
          }}
          content={
            <C.ModalContent>
              <C.ModalHeader>
                <C.InputContent>
                  기술 스택<span style={{ color: palette.danger.default }}>*</span>
                </C.InputContent>
                <C.InputContent>
                  숙련 정도<span style={{ color: palette.danger.default }}>*</span>
                </C.InputContent>
              </C.ModalHeader>

              {skills.map((skill, index) => (
                <C.Row key={index}>
                  <EditInputBox
                    width="50%"
                    name="name"
                    placeholder="이름을 입력해주세요."
                    value={skill.name}
                    onChange={(e) => handleChange(index, 'name', e.target.value)}
                  />
                  <EditInputBox
                    width="40%"
                    name="level"
                    placeholder="0-100"
                    value={skill.level}
                    onChange={(e) => handleChange(index, 'level', e.target.value)}
                  />
                  <C.DeleteBtn onClick={() => handleDelete(index)}>
                    <img src={trash} />
                  </C.DeleteBtn>
                </C.Row>
              ))}
            </C.ModalContent>
          }
          onClickSave={() => {
            console.log('저장');
          }}
        />
      )}
      {qualificationsModal && (
        <EditModal
          text="내 자격증"
          onClickX={() => {
            setQualificationsModal(false);
          }}
          content={<></>}
          onClickSave={() => {
            console.log('저장');
          }}
        />
      )}
    </>
  );
};

export default CareerPage;
