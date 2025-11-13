import * as C from './CareerPage.styles';
import * as M from '@pages/MyPage/MyPage.styles';
import palette from '@/styles/theme';
import PageBlock from '@components/PageBlock/PageBlock';
import PortfolioSlider from '@components/ProjectSlider/ProjectSlider';
import EditModal from '@components/EditModal/EditModal';
import EditInputBox from '@/components/EditInputBox/EditInputBox';
import trash from '@assets/mypage/icon-trash.svg';
import { useState, useEffect } from 'react';
import type {
  ResponseCareerDTO,
  ResponseLicenseDTO,
  ResponseStackDTO,
  ResponseProjectDTO,
} from '@/types/Career/Career';
import { getCareer, getLicense, getStack, getProject } from '@/apis/Career/Career';

const CareerPage = () => {
  const [experienceModal, setExperienceModal] = useState(false);
  const [stackModal, setStackModal] = useState(false);
  const [qualificationsModal, setQualificationsModal] = useState(false);

  const [career, setCareer] = useState<ResponseCareerDTO['data']>([]);
  const [license, setLicense] = useState<ResponseLicenseDTO['data']>([]);
  const [stack, setStack] = useState<ResponseStackDTO['data']>([]);
  const [project, setProject] = useState<ResponseProjectDTO['data']>([]);
  interface InputItem {
    [key: string]: string;
    field1: string;
    field2: string;
  }
  interface extendedInputItem extends InputItem {
    field3: string;
  }

  const [experiences, setExperiences] = useState<extendedInputItem[]>(
    Array.from({ length: 5 }, () => ({ field1: '', field2: '', field3: '' })),
  );
  const [skills, setSkills] = useState<InputItem[]>(Array.from({ length: 5 }, () => ({ field1: '', field2: '' })));
  const [qualifications, setQualifications] = useState<extendedInputItem[]>(
    Array.from({ length: 5 }, () => ({ field1: '', field2: '', field3: '' })),
  );

  const handleChange = <T extends Record<string, string>>(
    index: number,
    field: keyof T,
    value: string,
    list: T[],
    setter: React.Dispatch<React.SetStateAction<T[]>>,
  ) => {
    const updated = [...list];
    (updated[index][field] as unknown as string) = value;
    setter(updated);
  };

  const handleDelete = <T extends Record<string, string>>(
    index: number,
    list: T[],
    setter: React.Dispatch<React.SetStateAction<T[]>>,
  ) => {
    const updated = list.filter((_, i) => i !== index);
    const emptyItem = Object.keys(list[0]).reduce((acc, key) => ({ ...acc, [key]: '' }), {}) as T;
    updated.push(emptyItem);
    setter(updated);
  };

  useEffect(() => {
    const getCareerData = async () => {
      try {
        const [careerRes, licenseRes, stackRes, projectRes] = await Promise.all([
          getCareer(),
          getLicense(),
          getStack(),
          getProject(),
        ]);

        setCareer(careerRes.data);
        setLicense(licenseRes.data);
        setStack(stackRes.data);
        setProject(projectRes.data);

        console.log(careerRes, licenseRes, stackRes, projectRes);
      } catch (error) {
        console.error('데이터 조회 실패', error);
      }
    };
    getCareerData();
  }, []);

  return (
    <>
      <C.Background />
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
            content={
              <>
                {career.map((item) => (
                  <div>
                    {item.startDate.slice(0, 7)} ~ {item.endDate.slice(0, 7)} | {item.content}
                  </div>
                ))}
              </>
            }
            onClick={() => {
              setExperienceModal(true);
            }}
          />
          <PageBlock
            width="271px"
            text="내 기술스택"
            content={
              <>
                {stack.map((item, idx) => {
                  const levelNum = Number(item.level);
                  const filledCount = Math.min(5, Math.ceil(levelNum / 20));
                  const totalDots = 5;

                  return (
                    <C.StackRow key={idx}>
                      <C.AddButton>{item.name}</C.AddButton>
                      <C.DotWrapper>
                        {Array.from({ length: totalDots }).map((_, i) => (
                          <C.Dot key={i} filled={i < filledCount} />
                        ))}
                      </C.DotWrapper>
                    </C.StackRow>
                  );
                })}
              </>
            }
            onClick={() => {
              setStackModal(true);
            }}
          />
        </M.MyInfoContainer>
        <div style={{ padding: '0 144px' }}>
          <PageBlock
            width="100%"
            text="내 자격증"
            content={
              <>
                {license.map((item) => (
                  <div>
                    {item.gotDate.slice(0, 7)} | {item.name}
                  </div>
                ))}
              </>
            }
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
          <C.BoldText>내 프로젝트</C.BoldText>
          <C.AddButton
            style={{ cursor: 'pointer' }}
            onClick={() => {
              console.log('프로젝트 추가');
            }}>
            프로젝트 추가
          </C.AddButton>
        </C.SecondHeader>
        <PortfolioSlider
          items={project.map((item) => ({
            id: item.projectId,
            thumbnail: item.thumbnail,
            type: 'project',
            startDate: item.startDate,
            endDate: item.endDate,
            title: item.title,
            role: item.role,
          }))}
        />
      </C.CareerPage>
      {experienceModal && (
        <EditModal
          text="내 경력"
          onClickX={() => {
            setExperienceModal(false);
          }}
          content={
            <C.ModalContent>
              <C.ModalHeader style={{ gap: 'calc(30% - 20px)' }}>
                <C.InputContent>
                  내용<span style={{ color: palette.danger.default }}>*</span>
                </C.InputContent>
                <C.InputContent>
                  시작일<span style={{ color: palette.danger.default }}>*</span>
                </C.InputContent>
                <C.InputContent>
                  종료일<span style={{ color: palette.danger.default }}>*</span>
                </C.InputContent>
              </C.ModalHeader>
              {experiences.map((exp, index) => (
                <C.Row key={index}>
                  <EditInputBox
                    width="30%"
                    name="field1"
                    placeholder="활동 내용을 입력해주세요."
                    value={exp.field1}
                    onChange={(e) => handleChange(index, 'field1', e.target.value, experiences, setExperiences)}
                  />
                  <EditInputBox
                    width="30%"
                    name="field2"
                    placeholder="YYYY-MM-DD"
                    value={exp.field2}
                    onChange={(e) => handleChange(index, 'field2', e.target.value, experiences, setExperiences)}
                  />
                  <EditInputBox
                    width="30%"
                    name="field3"
                    placeholder="YYYY-MM-DD"
                    value={exp.field3}
                    onChange={(e) => handleChange(index, 'field3', e.target.value, experiences, setExperiences)}
                  />
                  <C.DeleteBtn onClick={() => handleDelete(index, experiences, setExperiences)}>
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
              <C.ModalHeader style={{ gap: 'calc(50% - 49px)' }}>
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
                    width="45%"
                    name="field1"
                    placeholder="기술명을 입력해주세요."
                    value={skill.field1}
                    onChange={(e) => handleChange(index, 'field1', e.target.value, skills, setSkills)}
                  />
                  <EditInputBox
                    width="40%"
                    name="field2"
                    placeholder="0~100"
                    value={skill.field2}
                    onChange={(e) => handleChange(index, 'field2', e.target.value, skills, setSkills)}
                  />
                  <C.DeleteBtn onClick={() => handleDelete(index, skills, setSkills)}>
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
          content={
            <C.ModalContent>
              <C.ModalHeader style={{ gap: 'calc(30% - 40px)' }}>
                <C.InputContent>
                  자격증명<span style={{ color: palette.danger.default }}>*</span>
                </C.InputContent>
                <C.InputContent>
                  취득일<span style={{ color: palette.danger.default }}>*</span>
                </C.InputContent>
                <C.InputContent style={{ marginLeft: '5px' }}>
                  종료일<span style={{ color: palette.danger.default }}>*</span>
                </C.InputContent>
              </C.ModalHeader>
              {qualifications.map((cert, index) => (
                <C.Row key={index}>
                  <EditInputBox
                    width="30%"
                    name="field1"
                    placeholder="자격증명을 입력해주세요."
                    value={cert.field1}
                    onChange={(e) => handleChange(index, 'field1', e.target.value, qualifications, setQualifications)}
                  />
                  <EditInputBox
                    width="30%"
                    name="field2"
                    placeholder="YYYY-MM-DD"
                    value={cert.field2}
                    onChange={(e) => handleChange(index, 'field2', e.target.value, qualifications, setQualifications)}
                  />
                  <EditInputBox
                    width="30%"
                    name="field3"
                    placeholder="YYYY-MM-DD"
                    value={cert.field3}
                    onChange={(e) => handleChange(index, 'field3', e.target.value, qualifications, setQualifications)}
                  />
                  <C.DeleteBtn onClick={() => handleDelete(index, qualifications, setQualifications)}>
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
    </>
  );
};

export default CareerPage;
