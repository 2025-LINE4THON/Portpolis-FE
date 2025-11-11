import { usePortfolio } from '@/context/PortfolioContext';
import * as E from './EditProject.styles';
import EditIndexButton from '../EditIndexButton/EditIndexButton';
import EditProjectStandardCard from '../../EditProjectStandardCard/EditProjectStandardCard';
import Image from '@assets/PortfolioCreatePage/ex-card-image.png';

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
      {selectedTemplate === 2 && <></>}
    </E.EditProject>
  );
};

export default EditProject;
