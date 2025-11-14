import palette from '@/styles/theme';
import * as P from './PageBlock.styles';
import edit from '@assets/mypage/icon-edit.svg';

interface PageBlockProps {
  width?: string;
  padding?: string;
  gap?: string;
  text?: string;
  isRequired?: boolean;
  middleContent?: React.ReactNode;
  onClick?: () => void;
  content?: React.ReactNode;
}

const PageBlock = ({ width, padding, gap, text, isRequired, middleContent, onClick, content }: PageBlockProps) => {
  return (
    <P.PageBlock style={{ width: width, padding: padding, gap: gap }}>
      {(text || middleContent || onClick) && (
        <P.BlockHeader>
          <P.BlockTitle>
            <P.Text>
              {text}
              {isRequired && <span style={{ color: palette.danger.default }}> *</span>}
            </P.Text>
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
