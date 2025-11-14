import { useState } from 'react';
import * as L from './ListPage.styles';
import palette from '@/styles/theme';

import Button from './components/Button/Button';
import Input from './components/Input/Input';
import CommonPortfolioCard from '@/components/CommonPortfolioCard/CommonPortfolioCard';

import ExBg from '@assets/HomePage/slide-img-1.jpg';
import ResultIcon from '@assets/ListPage/icon-no-result.svg?react';
import useGetSearchPortfolio from '@/hooks/queries/ListPage/useGetSearchPortfolio';
import type { RecommendPortfolio } from '@/types/HomePage/recommend';
import { useNavigate } from 'react-router-dom';

const ListPage = () => {
  const [search, setSearch] = useState('');
  const [searchRes, setSearchRes] = useState('');
  const [sort, setSort] = useState<'recent' | 'likes' | 'views'>('recent');

  const { data } = useGetSearchPortfolio({ keyword: searchRes, sort });

  const searchedData: RecommendPortfolio[] = data?.data || [];

  const navigate = useNavigate();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setSearchRes(search);
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
            <Button sort={sort} setSort={setSort} />
          </L.Result>

          {searchedData.length !== 0 && (
            <L.Flex>
              {searchedData.map((data) => (
                <CommonPortfolioCard
                  key={data.userId}
                  img={ExBg}
                  title={data.title}
                  name={'이름 연결'}
                  $width={346}
                  $height={229}
                  hasHeart={true}
                  views={data.views}
                  date={data.createdAt}
                  onClick={() => navigate(`/portfolio/${data.portfolioId}`)}
                />
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
