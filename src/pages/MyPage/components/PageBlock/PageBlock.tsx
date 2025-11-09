import * as P from './PageBlock.styles';
import edit from '@assets/mypage/icon-edit.svg';

interface PageBlockProps {
  text: string;
  middleContent?: React.ReactNode;
  editable: boolean;
  onClick?: () => void;
  content?: React.ReactNode;
}

const PageBlock = ({ text, middleContent, editable, onClick, content }: PageBlockProps) => {
  return (
    <P.PageBlock>
      <P.BlockHeader>
        <div>
          <P.Text>{text}</P.Text>
          {middleContent}
        </div>
        {editable ? (
          <button onClick={onClick}>
            <img src={edit} />
          </button>
        ) : (
          <></>
        )}
      </P.BlockHeader>
      {content}
    </P.PageBlock>
  );
};

export default PageBlock;
