import EditAboutMe from '../EditAboutMe/EditAboutMe';
import EditCareer from '../EditCareer/EditCareer';
import EditHeader from '../EditHeader/EditHeader';
import EditImage from '../EditImage/EditImage';
import EditIntroduce from '../EditIntroduce/EditIntroduce';
import * as E from './Edit.styles';

const Edit = () => {
  return (
    <E.Publish>
      <EditHeader />
      <EditImage />

      {/* 소개말 */}
      <EditIntroduce />

      {/* Abount Me */}
      <EditAboutMe />

      {/* 경력 */}
      <EditCareer />
    </E.Publish>
  );
};

export default Edit;
