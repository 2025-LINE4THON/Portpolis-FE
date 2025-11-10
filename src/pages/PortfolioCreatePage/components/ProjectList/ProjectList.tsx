import Project from '../Project/Project';
import * as P from './ProjectList.styles';
import * as S from '../StackList/StackList.styles';
import PROJECTS from '@data/portfolio/projects.json';

interface ProjectListProps {
  selectedProjects: { id: number; date: string; project: string }[];
  toggleProject: (id: number, date: string, project: string) => void;
}

const ProjectList = ({ selectedProjects, toggleProject }: ProjectListProps) => {
  // 선택된 프로젝트
  const selected = PROJECTS.filter((project) => selectedProjects.some((p) => p.id === project.id));

  // 선택 안 된 프로젝트
  const notSelected = PROJECTS.filter((project) => !selectedProjects.some((p) => p.id === project.id));

  const orderedProjects = [...selected, ...notSelected];

  return (
    <P.ProjectList>
      {orderedProjects.map((project, idx) => {
        const isSelected = selected.some((p) => p.id === project.id);

        return (
          <div key={project.id}>
            <Project
              key={project.id}
              id={project.id}
              date={project.date}
              project={project.project}
              selected={isSelected}
              onToggle={() => toggleProject(project.id, project.date, project.project)}
            />

            {idx === selected.length - 1 && selected.length > 0 && notSelected.length > 0 && <S.Divider />}
          </div>
        );
      })}
    </P.ProjectList>
  );
};

export default ProjectList;
