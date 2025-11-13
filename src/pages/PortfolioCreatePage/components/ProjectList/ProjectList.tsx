import Project from '../Project/Project';
import * as P from './ProjectList.styles';
import * as S from '../StackList/StackList.styles';
import type { ProjectItem } from '@/context/PortfolioContext';
import useGetMeProjects from '@/hooks/queries/PortfolioCreatePage/useGetMeProjects';

interface ProjectListProps {
  selectedProjects: ProjectItem[];
  toggleProject: (projectId: number, startDate: string, endDate: string, title: string) => void;
}

const ProjectList = ({ selectedProjects, toggleProject }: ProjectListProps) => {
  // 내 활동 조회
  const { data: projectsData } = useGetMeProjects();

  // 선택된 프로젝트
  const selected =
    projectsData?.data.filter((project) => selectedProjects.some((p) => p.projectId === project.projectId)) || [];

  // 선택 안 된 프로젝트
  const notSelected =
    projectsData?.data.filter((project) => !selectedProjects.some((p) => p.projectId === project.projectId)) || [];

  const orderedProjects = [...selected, ...notSelected];

  return (
    <P.ProjectList>
      {orderedProjects.map((project, idx) => {
        const isSelected = selected.some((p) => p.projectId === project.projectId);

        return (
          <div key={project.projectId}>
            <Project
              key={project.projectId}
              id={project.projectId}
              startDate={project.startDate}
              endDate={project.endDate ?? ''}
              title={project.title}
              selected={isSelected}
              onToggle={() => toggleProject(project.projectId, project.startDate, project.endDate ?? '', project.title)}
            />

            {idx === selected.length - 1 && selected.length > 0 && notSelected.length > 0 && <S.Divider />}
          </div>
        );
      })}
    </P.ProjectList>
  );
};

export default ProjectList;
