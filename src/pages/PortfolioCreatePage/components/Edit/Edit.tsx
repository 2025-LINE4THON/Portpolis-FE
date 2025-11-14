import type { ResponseGetPortfolio } from '@/types/PortfolioCreatePage/edit';
import EditAboutMe from '../EditAboutMe/EditAboutMe';
import EditCareer from '../EditCareer/EditCareer';
import EditContact from '../EditContact/EditContact';
import EditImage from '../EditImage/EditImage';
import EditIntroduce from '../EditIntroduce/EditIntroduce';
import EditProject from '../EditProject/EditProject';
import EditStack from '../EditStack/EditStack';
import * as E from './Edit.styles';

interface EditProps {
  data?: ResponseGetPortfolio;
  editable?: boolean;
}

const Edit = ({ data, editable = true }: EditProps) => {
  return (
    <E.Edit>
      <EditImage data={data} editable={editable} />

      {/* 소개말 */}
      <EditIntroduce data={data} editable={editable} />

      {/* About Me */}
      <EditAboutMe data={data} editable={editable} />

      {/* 경력 */}
      <EditCareer data={data} editable={editable} />

      {/* 기술 스택 & 자격증 */}
      <EditStack data={data} editable={editable} />

      {/* 프로젝트 */}
      {<EditProject data={data} editable={editable} />}

      {/* 전화번호 & 이메일 */}
      <EditContact />
    </E.Edit>
  );
};

export default Edit;
