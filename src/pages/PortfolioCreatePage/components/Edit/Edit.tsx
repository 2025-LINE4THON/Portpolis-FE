import EditAboutMe from '../EditAboutMe/EditAboutMe';
import EditCareer from '../EditCareer/EditCareer';
import EditContact from '../EditContact/EditContact';
import EditImage from '../EditImage/EditImage';
import EditIntroduce from '../EditIntroduce/EditIntroduce';
import EditProject from '../EditProject/EditProject';
import EditStack from '../EditStack/EditStack';
import * as E from './Edit.styles';

const Edit = () => {
  return (
    <E.Edit>
      <EditImage />

      {/* 소개말 */}
      <EditIntroduce />

      {/* Abount Me */}
      <EditAboutMe />

      {/* 경력 */}
      <EditCareer />

      {/* 기술 스택 & 자격증 */}
      <EditStack />

      {/* 프로젝트 */}
      {<EditProject />}

      {/* 전화번호 & 이메일 */}
      <EditContact />
    </E.Edit>
  );
};

export default Edit;
