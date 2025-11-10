import EditAboutMe from '../EditAboutMe/EditAboutMe';
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
    </E.Publish>
  );
};

export default Edit;
