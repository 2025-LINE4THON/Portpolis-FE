import { useState, type SetStateAction } from 'react';
import * as B from './Button.styles';

interface ButtonProps {
  sort: string;
  setSort: React.Dispatch<SetStateAction<'likes' | 'views' | 'recent'>>;
}

const Button = ({ sort, setSort }: ButtonProps) => {
  const SORT = [
    { id: 1, label: '최신 순', sort: 'recent' },
    { id: 2, label: '좋아요 순', sort: 'likes' },
    { id: 3, label: '조회수 순', sort: 'views' },
  ] as const;

  const [showDrop, setShowDrop] = useState<boolean>(false);

  return (
    <B.Button onClick={() => setShowDrop((prev) => !prev)}>
      <p>{sort === 'likes' ? '좋아요 순' : sort === 'views' ? '조회수 순' : '최신 순'}</p>
      <B.ArrowIcon $showDrop={showDrop} />

      {showDrop && (
        <B.Select>
          {SORT.map((sort) => (
            <B.Menu
              onClick={(e) => {
                e.stopPropagation();
                setSort(sort?.sort);
                setShowDrop(false);
              }}>
              {sort.label}
            </B.Menu>
          ))}
        </B.Select>
      )}
    </B.Button>
  );
};

export default Button;
