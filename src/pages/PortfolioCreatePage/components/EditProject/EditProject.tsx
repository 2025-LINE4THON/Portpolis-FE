import { usePortfolio } from '@/context/PortfolioContext';
import * as E from './EditProject.styles';
import EditIndexButton from '../EditIndexButton/EditIndexButton';
import EditProjectStandardCard from '../EditProjectStandardCard/EditProjectStandardCard';
import Image from '@assets/PortfolioCreatePage/ex-card-image.png';
import EditProjectVisualCard from '../EditProjectVisualCard/EditProjectVisualCard';
import type { ResponseGetPortfolio } from '@/types/PortfolioCreatePage/edit';
import type { Project } from '@/types/PortfolioCreatePage/element';
import { TEMPLATE } from '@/constants/key';

interface EditProjectProps {
  data?: ResponseGetPortfolio;
  editable?: boolean;
}

const EditProject = ({ data, editable }: EditProjectProps) => {
  const { selectedTemplate, selectedProjects } = usePortfolio();

  const projectTemplate = editable
    ? selectedTemplate === 1
      ? TEMPLATE.STANDARD
      : TEMPLATE.IMAGE
    : (data?.data.template ?? TEMPLATE.STANDARD);

  const isStandard = projectTemplate === TEMPLATE.STANDARD;
  const isVisual = projectTemplate === TEMPLATE.IMAGE;

  const projectList = (editable ? selectedProjects : (data?.data.projects ?? [])) as Project[];

  return (
    <E.EditProject>
      <EditIndexButton index="4" text="프로젝트" />

      <E.BackgroundImage />

      {/* 스탠다드형 */}
      {isStandard && (
        <E.StandardList>
          {projectList?.map((project, idx) => (
            <div key={project.projectId}>
              <E.CardWrapper $z={idx} $idx={idx}>
                <EditProjectStandardCard
                  img={Image}
                  title={project.title}
                  startDate={project.startDate}
                  endDate={project.endDate ?? ''}
                  role={project.role ?? ''}
                />

                {idx === selectedProjects.length - 1 && <E.BookMarkIcon />}
              </E.CardWrapper>
            </div>
          ))}
        </E.StandardList>
      )}

      {/* 비주얼형 */}
      {isVisual && (
        <>
          {projectList?.map((project, idx) => (
            <EditProjectVisualCard
              key={project.projectId}
              idx={idx}
              img={project.thumbnail}
              startDate={project.startDate}
              endDate={project.endDate ?? ''}
              title={project.title}
              stack={project?.stacks?.map((stack) => stack.stackName) ?? []}
            />
          ))}
        </>
      )}
    </E.EditProject>
  );
};

export default EditProject;
