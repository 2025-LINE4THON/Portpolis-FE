import { useState, type ReactNode } from 'react';
import {
  PortfolioContext,
  type AboutMeItem,
  type CareerItem,
  type ImageData,
  type PortfolioStep,
  type ProjectItem,
  type StackItem,
} from './PortfolioContext';

const DATAS: AboutMeItem[] = [
  {
    title: '[ 첫 인상을 주는 프론트엔드 ]',
    content:
      'React를 중심으로 웹 프론트엔드를 개발합니다.함께 제품을 만들고 성장시킬 곳을 찾고 있습니다.React를 중심으로 웹 프론트엔드를 개발합니다.함께 제품을 만들고 성장시킬 곳을 찾고 있습니다.',
  },
  {
    title: '[ 성장에 대한 즐거움 ]',
    content:
      'React를 중심으로 웹 프론트엔드를 개발합니다.함께 제품을 만들고 성장시킬 곳을 찾고 있습니다.React를 중심으로 웹 프론트엔드를 개발합니다.함께 제품을 만들고 성장시킬 곳을 찾고 있습니다.',
  },
  {
    title: '[ 꺾이지 않는 마음 ]',
    content:
      'React를 중심으로 웹 프론트엔드를 개발합니다.함께 제품을 만들고 성장시킬 곳을 찾고 있습니다.React를 중심으로 웹 프론트엔드를 개발합니다.함께 제품을 만들고 성장시킬 곳을 찾고 있습니다.',
  },
];

export const PortfolioProvider = ({ children }: { children: ReactNode }) => {
  const [level, setLevel] = useState<PortfolioStep>('template'); // 포트폴리오 생성 단계 설정

  const [selectedTemplate, setSelectedTemplate] = useState<number | null>(null); // 템플릿 선택

  const [selectedStacks, setSelectedStacks] = useState<StackItem[]>([]); // 내 기술 스택
  const [selectedCareers, setSelectedCareers] = useState<CareerItem[]>([]); // 내 경력
  const [selectedProjects, setSelectedProjects] = useState<ProjectItem[]>([]); // 내 프로젝트

  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null); // 포트폴리오 대표 이미지

  const [aboutMe, setAboutMe] = useState<AboutMeItem[]>(DATAS);

  // 내 기술 스택 선택
  const toggleStack = (item: StackItem) => {
    setSelectedStacks((prev) => {
      const exists = prev.find((s) => s.stackId === item.stackId);

      if (exists) {
        return prev.filter((s) => s.stackId !== item.stackId);
      }

      if (prev.length >= 4) return prev;

      return [...prev, item];
    });
  };

  // 내 경력 선택
  const toggleCareer = (item: CareerItem) => {
    setSelectedCareers((prev) => {
      const exists = prev.find((c) => c.careerId === item.careerId);

      if (exists) {
        return prev.filter((c) => c.careerId !== item.careerId);
      }

      return [...prev, item];
    });
  };

  // 내 프로젝트 선택
  const toggleProject = (item: ProjectItem) => {
    setSelectedProjects((prev) => {
      const exists = prev.find((p) => p.projectId === item.projectId);

      if (exists) {
        return prev.filter((p) => p.projectId !== item.projectId);
      }

      if (prev.length >= 6) return prev;

      return [...prev, item];
    });
  };

  return (
    <PortfolioContext.Provider
      value={{
        level,
        setLevel,
        selectedTemplate,
        setSelectedTemplate,
        selectedStacks,
        setSelectedStacks,
        setSelectedCareers,
        selectedCareers,
        selectedProjects,
        setSelectedProjects,
        toggleStack,
        toggleCareer,
        toggleProject,
        selectedImage,
        setSelectedImage,
        aboutMe,
        setAboutMe,
      }}>
      {children}
    </PortfolioContext.Provider>
  );
};
