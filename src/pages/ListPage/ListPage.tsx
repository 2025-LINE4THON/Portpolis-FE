import { useState } from 'react';
import * as L from './ListPage.styles';
import palette from '@/styles/theme';

import Button from './components/Button/Button';
import Input from './components/Input/Input';
import CommonPortfolioCard from '@/components/CommonPortfolioCard/CommonPortfolioCard';
import DATALIST from '@data/portfolio/portfolio.json';

import ExBg from '@assets/HomePage/slide-img-1.jpg';
import ResultIcon from '@assets/ListPage/icon-no-result.svg?react';

const ListPage = () => {
  const [search, setSearch] = useState('');
  const [searchRes, setSearchRes] = useState('');
  const [searchedData, setSearchedData] = useState<{ id: number; title: string }[]>(() => DATALIST);

  const handleSearch = () => {
    const trimmedSearch = search.trim().toLowerCase();

    if (trimmedSearch === '') {
      setSearchedData(DATALIST);
    } else {
      setSearchedData(DATALIST.filter((data) => data.title.toLowerCase().includes(trimmedSearch)));
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setSearchRes(search);
      handleSearch();
    }
  };

  return (
    <>
      <L.ListPage>
        <Input search={search} setSearch={setSearch} onKeyDown={handleKeyDown} />

        <L.ResultWrapper>
          <L.Result>
            {searchRes === '' && <p className="b1-bold">다른 사람들의 포트폴리오를 살펴보세요.</p>}
            {searchRes !== '' && (
              <div>
                <p className="b1-bold">검색 결과: '{searchRes}'</p>
                <p className="b1">총 {searchedData.length}건의 작업물을 발견했어요!</p>
              </div>
            )}
            <Button />
          </L.Result>

          {searchedData.length !== 0 && (
            <L.Flex>
              {searchedData.map((data) => (
                <CommonPortfolioCard key={data.id} img={ExBg} title={data.title} name="" $width={346} $height={229} />
              ))}
            </L.Flex>
          )}

          {searchedData.length === 0 && (
            <L.NoResult>
              <ResultIcon />

              <div>
                <L.Text $color={`${palette.neutral.neutral900}`} $size={16}>
                  '{searchRes}'의 결과가 없습니다.
                </L.Text>
                <L.Text $color={`${palette.neutral.neutral300}`} $size={12}>
                  다른 키워드로 다시 시도해주세요.
                </L.Text>
              </div>
            </L.NoResult>
          )}
        </L.ResultWrapper>
      </L.ListPage>
      <L.EllipseIcon />
    </>
  );
};

export default ListPage;
