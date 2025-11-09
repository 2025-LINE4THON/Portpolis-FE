import * as P from './ProjectItem.styles';
import edit from '@assets/mypage/icon-edit.svg';
import link from '@assets/mypage/icon-link.svg';
import palette from '@/styles/theme';

interface ProjectItemProps {
  type: string;
  image: string;
  period: string;
  title: string;
  onClick: () => void;
  isPrivate?: boolean;
  tags?: string[];
  role?: string;
}

const ProjectItem = ({ type, image, period, title, onClick, isPrivate, tags, role }: ProjectItemProps) => {
  return (
    <P.ProjectItem>
      <img src={image} style={{ width: '246px', height: '160px' }} />
      <P.InfoContainer>
        <P.Info>
          <P.Period>{period}</P.Period>
          <P.Title>{title}</P.Title>
        </P.Info>
        <img src={type == 'project' ? edit : link} onClick={onClick} />
      </P.InfoContainer>
      {type == 'portfolio' ? (
        <>
          <P.Private isPrivate={isPrivate ?? false}>{isPrivate ? '비공개' : '공개'}</P.Private>
          <P.PortfolBtns>
            <P.PortfolBtn
              style={{ color: palette.neutral.neutral400, borderColor: palette.neutral.neutral300 }}
              onClick={() => {
                console.log('편집');
              }}>
              편집
            </P.PortfolBtn>
            <P.PortfolBtn
              onClick={() => {
                console.log('삭제');
              }}>
              삭제
            </P.PortfolBtn>
          </P.PortfolBtns>
        </>
      ) : (
        <P.ProjectContainer>
          <P.TagList>
            {tags?.map((tag, index) => (
              <P.Tag key={index}>{tag}</P.Tag>
            ))}
          </P.TagList>
          <P.Role>{role}</P.Role>
        </P.ProjectContainer>
      )}
    </P.ProjectItem>
  );
};

export default ProjectItem;
