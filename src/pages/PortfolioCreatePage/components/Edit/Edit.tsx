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
    </E.Publish>
  );
};

export default Edit;
