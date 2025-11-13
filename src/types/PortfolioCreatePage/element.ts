// 포트폴리오 생성 - 요소 선택

import type { CommonResponse } from '../common';

// 내 스택 조회
export type Stack = {
  stackId: number;
  name: string;
  level: number;
};

export type ResponseGetMeStacksDto = CommonResponse<Stack>;
