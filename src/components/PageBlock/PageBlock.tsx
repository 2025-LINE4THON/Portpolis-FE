import * as P from './PageBlock.styles';
import edit from '@assets/mypage/icon-edit.svg';

interface PageBlockProps {
  width?: string;
  text?: string;
  middleContent?: React.ReactNode;
  onClick?: () => void;
  content?: React.ReactNode;
}

const PageBlock = ({ width, text, middleContent, onClick, content }: PageBlockProps) => {
  return (
    <P.PageBlock style={{ width: width }}>
      {(text || middleContent || onClick) && (
        <P.BlockHeader>
          <P.BlockTitle>
            <P.Text>{text}</P.Text>
            {middleContent}
          </P.BlockTitle>
          {onClick && (
            <button onClick={onClick}>
              <img src={edit} />
            </button>
          )}
        </P.BlockHeader>
      )}
      {content}
    </P.PageBlock>
  );
};
export default PageBlock;
