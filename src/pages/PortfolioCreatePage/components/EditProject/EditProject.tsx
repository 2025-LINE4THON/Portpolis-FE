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
              <E.CardWrapper key={project.id} $z={idx} $idx={idx}>
                <EditProjectStandardCard img={Image} title={project.project} date={project.date} role="FE" />

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
              key={project.id}
              idx={idx}
              img={Imgae2}
              date={project.date}
              title={project.project}
              stack={['FE', 'JAVA']}
            />
          ))}
        </>
      )}
    </E.EditProject>
  );
};

export default EditProject;
