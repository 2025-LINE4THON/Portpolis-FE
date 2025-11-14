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

export type ResponseRegisterDTO = CommonResponse<{
  projectId: number;
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

export type ResponseProjectDetailDTO = CommonResponse<{
  projectId: number;
  userId: number;
  title: string;
  startDate: string;
  endDate: string;
  role: string;
  thumbnail: string;
  projectTags: ProjectTag[];
  // projectStacks: any[];
  projectContents: ProjectContent[];
  projectImages: ProjectImage[];
  links: ProjectLink[];
}>;

export type ProjectTag = {
  tagId: number;
  projectId: number;
  userId: number;
  content: string;
};

export type ProjectContent = {
  projectContentId: number;
  projectId: number;
  userId: number;
  title: string;
  content: string;
};

export type ProjectImage = {
  projectImageId: number;
  projectId: number;
  userId: number;
  url: string;
};

export type ProjectLink = {
  userLinkId: number;
  projectId: number;
  userId: number;
  url: string;
};
