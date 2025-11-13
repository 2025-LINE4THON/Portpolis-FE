import type { Career, Project, Stack } from '@/types/PortfolioCreatePage/element';
import { createContext, useContext, type SetStateAction } from 'react';

export type PortfolioStep = 'template' | 'element' | 'edit' | 'publish';

export type StackItem = Stack & { percent?: number };
export type CareerItem = Career;
export type ProjectItem = Pick<Project, 'projectId' | 'title' | 'startDate' | 'endDate'>;

export interface ImageData {
  file: File;
  thumbnail: string;
  type: string;
}

interface IPortfolio {
  level: PortfolioStep;
  setLevel: React.Dispatch<SetStateAction<PortfolioStep>>;

  selectedTemplate: number | null;
  setSelectedTemplate: React.Dispatch<SetStateAction<number | null>>;

  selectedStacks: StackItem[];
  setSelectedStacks: React.Dispatch<SetStateAction<StackItem[]>>;

  selectedCareers: CareerItem[];
  setSelectedCareers: React.Dispatch<SetStateAction<CareerItem[]>>;

  selectedProjects: ProjectItem[];
  setSelectedProjects: React.Dispatch<SetStateAction<ProjectItem[]>>;

  toggleStack: (item: StackItem) => void;
  toggleCareer: (item: CareerItem) => void;
  toggleProject: (item: ProjectItem) => void;

  selectedImage: ImageData | null;
  setSelectedImage: React.Dispatch<SetStateAction<ImageData | null>>;
}

export const PortfolioContext = createContext<IPortfolio | undefined>(undefined);

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);

  if (!context) {
    throw new Error('PortfolioContext를 찾을 수 없음');
  }

  return context;
};
