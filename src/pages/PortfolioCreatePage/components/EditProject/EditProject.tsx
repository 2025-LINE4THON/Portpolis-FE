import { usePortfolio } from '@/context/PortfolioContext';
import * as E from './EditProject.styles';
import EditIndexButton from '../EditIndexButton/EditIndexButton';
import EditProjectStandardCard from '../EditProjectStandardCard/EditProjectStandardCard';
import Image from '@assets/PortfolioCreatePage/ex-card-image.png';
import Imgae2 from '@assets/PortfolioCreatePage/ex-card-visual-image.png';
import EditProjectVisualCard from '../EditProjectVisualCard/EditProjectVisualCard';

const EditProject = () => {
  const { selectedTemplate, selectedProjects } = usePortfolio();

  return (
    <E.EditProject>
      <EditIndexButton index="4" text="프로젝트" />

      <E.BackgroundImage />

      {/* 스탠다드형 */}
      {selectedTemplate === 1 && (
        <E.StandardList>
          {selectedProjects.map((project, idx) => (
            <>
              <E.CardWrapper key={project.projectId} $z={idx} $idx={idx}>
                <EditProjectStandardCard
                  img={Image}
                  title={project.title}
                  startDate={project.startDate}
                  endDate={project.endDate ?? ''}
                  role="FE"
                />

                {idx === selectedProjects.length - 1 && <E.BookMarkIcon />}
              </E.CardWrapper>
            </>
          ))}
        </E.StandardList>
      )}

      {/* 비주얼형 */}
      {selectedTemplate === 2 && (
        <>
          {selectedProjects.map((project, idx) => (
            <EditProjectVisualCard
              key={project.projectId}
              idx={idx}
              img={Imgae2}
              startDate={project.startDate}
              endDate={project.endDate ?? ''}
              title={project.title}
              stack={['FE', 'JAVA']}
            />
          ))}
        </>
      )}
    </E.EditProject>
  );
};

export default EditProject;
