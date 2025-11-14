import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useLikePortfolio, useUnlikePortfolio } from '@/hooks/mutations/useLikePortfolio';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useNavigate } from 'react-router-dom';

interface LikesProps {
  portfolioId: number;
  initialIsLiked: boolean;
  initialLikesCount: number;
  externalHovered?: boolean;
}

const Likes: React.FC<LikesProps> = ({ portfolioId, initialIsLiked, initialLikesCount, externalHovered }) => {
  const { getItem: accessToken } = useLocalStorage('accessToken');
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(initialIsLiked);
  const [likesCount, setLikesCount] = useState(initialLikesCount);
  const [isHovered, setIsHovered] = useState(false);

  const isEffectivelyHovered = externalHovered || isHovered;

  const likeMutation = useLikePortfolio();
  const unlikeMutation = useUnlikePortfolio();

  const handleLikeToggle = async () => {
    if (!accessToken()) {
      alert('로그인이 필요합니다.');
      navigate('/login');
      return;
    } else {
      if (isLiked) {
        unlikeMutation.mutate(portfolioId, {
          onSuccess: () => {
            setIsLiked(false);
            setLikesCount((prev) => prev - 1);
          },
          onError: (error) => {
            console.error('좋아요 취소 실패:', error);
          },
        });
      } else {
        likeMutation.mutate(portfolioId, {
          onSuccess: () => {
            setIsLiked(true);
            setLikesCount((prev) => prev + 1);
          },
          onError: (error) => {
            console.error('좋아요 실패:', error);
          },
        });
      }
    }
  };

  return (
    <LikeButton
      onClick={handleLikeToggle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <HeartIcon isLiked={isLiked} isHovered={isEffectivelyHovered}>
        {isLiked ? (
          isEffectivelyHovered ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                fill="#000"
              />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                fill="#27B999"
              />
            </svg>
          )
        ) : isEffectivelyHovered ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              stroke="#000"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              stroke="#27B999"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        )}
      </HeartIcon>
      <LikesCount>{likesCount}</LikesCount>
    </LikeButton>
  );
};

const LikeButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const HeartIcon = styled.div<{ isLiked: boolean; isHovered: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  transition: all 0.2s;
`;

const LikesCount = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: #27b999;
  line-height: 1;
`;

export default Likes;
