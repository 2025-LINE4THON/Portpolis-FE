import * as M from './MyPage.styles';
import PageBlock from '@components/PageBlock/PageBlock';
import ProjectItem from '@components/ProjectItem/ProjectItem';

const MyPage = () => {
  return (
    <M.MyPage>
      <PageBlock text="아기사자" editable={true} content={<div>0-10234</div>} />
      <ProjectItem
        type="portfolio"
        image="edit"
        period="25.09-25.12"
        title="감각적인 브랜드를 만드는"
        onClick={() => console.log('클릭')}
        isPrivate={false}
      />
      <ProjectItem
        type="project"
        image="link"
        period="25.09-25.12"
        title="감각적인 브랜드를 만드는"
        onClick={() => console.log('클릭')}
        tags={['프론트', 'AI']}
        role="PM"
      />
    </M.MyPage>
  );
};

export default MyPage;
