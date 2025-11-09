import PageBlock from './components/PageBlock/PageBlock';
import * as M from './MyPage.styles';

const MyPage = () => {
  return (
    <M.MyPage>
      <PageBlock text="아기사자" editable={true} content={<div>0-10234</div>} />
    </M.MyPage>
  );
};

export default MyPage;
