import { type SetStateAction } from 'react';
import * as I from './Input.styles';
import SearchIcon from '@assets/ListPage/icon-search.svg?react';

interface InputProps {
  search: string;
  setSearch: React.Dispatch<SetStateAction<string>>;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const Input = ({ search, setSearch, onKeyDown }: InputProps) => {
  return (
    <I.InputWrapper>
      <SearchIcon />
      <I.Input
        className="b2"
        placeholder="포트폴리오 제목 검색"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={onKeyDown}
      />
    </I.InputWrapper>
  );
};

export default Input;
