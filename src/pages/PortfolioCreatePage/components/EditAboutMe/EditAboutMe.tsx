import EditAboutMeCard from '../EditAboutMeCard/EditAboutMeCard';
import EditIndexButton from '../EditIndexButton/EditIndexButton';
import * as E from './EditAboutMe.styles';

const EditAboutMe = () => {
  const DATAS = [
    {
      id: 1,
      title: '[ 첫 인상을 주는 프론트엔드 ]',
      content:
        'React를 중심으로 웹 프론트엔드를 개발합니다.함께 제품을 만들고 성장시킬 곳을 찾고 있습니다.React를 중심으로 웹 프론트엔드를 개발합니다.함께 제품을 만들고 성장시킬 곳을 찾고 있습니다.',
    },
    {
      id: 2,
      title: '[ 성장에 대한 즐거움 ]',
      content:
        'React를 중심으로 웹 프론트엔드를 개발합니다.함께 제품을 만들고 성장시킬 곳을 찾고 있습니다.React를 중심으로 웹 프론트엔드를 개발합니다.함께 제품을 만들고 성장시킬 곳을 찾고 있습니다.',
    },
    {
      id: 3,
      title: '[ 꺾이지 않는 마음 ]',
      content:
        'React를 중심으로 웹 프론트엔드를 개발합니다.함께 제품을 만들고 성장시킬 곳을 찾고 있습니다.React를 중심으로 웹 프론트엔드를 개발합니다.함께 제품을 만들고 성장시킬 곳을 찾고 있습니다.',
    },
  ];

  return (
    <E.EditAboutMe>
      <EditIndexButton index="01" text="About Me" />

      <E.CardWrapper>
        {DATAS.map((data) => (
          <EditAboutMeCard key={data.id} title={data.title} content={data.content} />
        ))}

        <E.DividerIcon />
      </E.CardWrapper>
    </E.EditAboutMe>
  );
};

export default EditAboutMe;
