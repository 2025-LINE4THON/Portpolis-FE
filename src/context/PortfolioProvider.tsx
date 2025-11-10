import { useState, type ReactNode } from 'react';
import { PortfolioContext, type CareerItem, type ProjectItem, type StackItem } from './PortfolioContext';

export const PortfolioProvider = ({ children }: { children: ReactNode }) => {
  const [selectedStacks, setSelectedStacks] = useState<StackItem[]>([]); // 내 기술 스택
  const [selectedCareers, setSelectedCareers] = useState<CareerItem[]>([]); // 내 경력
  const [selectedProjects, setSelectedProjects] = useState<ProjectItem[]>([]); // 내 프로젝트

  // 내 기술 스택 선택
  const toggleStack = (item: StackItem) => {
    setSelectedStacks((prev) => {
      const exists = prev.find((s) => s.id === item.id);

      if (exists) {
        return prev.filter((s) => s.id !== item.id);
      }

      if (prev.length >= 4) return prev;

      return [...prev, item];
    });
  };

  // 내 경력 선택
  const toggleCareer = (item: CareerItem) => {
    setSelectedCareers((prev) => {
      const exists = prev.find((c) => c.id === item.id);

      if (exists) {
        return prev.filter((c) => c.id !== item.id);
      }

      return [...prev, item];
    });
  };

  // 내 프로젝트 선택
  const toggleProject = (item: ProjectItem) => {
    setSelectedProjects((prev) => {
      const exists = prev.find((p) => p.id === item.id);

      if (exists) {
        return prev.filter((p) => p.id !== item.id);
      }

      if (prev.length >= 6) return prev;

      return [...prev, item];
    });
  };

  return (
    <PortfolioContext.Provider
      value={{
        selectedStacks,
        setSelectedStacks,
        setSelectedCareers,
        selectedCareers,
        selectedProjects,
        setSelectedProjects,
        toggleStack,
        toggleCareer,
        toggleProject,
      }}>
      {children}
    </PortfolioContext.Provider>
  );
};
