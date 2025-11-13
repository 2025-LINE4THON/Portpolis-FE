import type { CommonResponse } from '../common';

export type RequestRegisterDTO = {
  title: string;
  startDate: string;
  endDate: string | null;
  role: string;
  thumbnail: string;
  tags: string[];
  stacks: {
    stackId: number;
    stackName: string;
  }[];
  contents: {
    title: string;
    content: string;
  }[];
  images: string[];
  links: {
    name: string;
    url: string;
  }[];
};

export type ResponseRegisterpDTO = CommonResponse<{
  title: string;
  startDate: string;
  endDate: string | null;
  role: string;
  thumbnail: string;
  tags: string[];
  stacks: {
    stackId: number;
    stackName: string;
  }[];
  contents: {
    title: string;
    content: string;
  }[];
  images: string[];
  links: {
    name: string;
    url: string;
  }[];
}>;
