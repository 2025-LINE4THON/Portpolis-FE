import type { ResponseGetPortfolio } from '@/types/PortfolioCreatePage/edit';
import EditIndexButton from '../EditIndexButton/EditIndexButton';
import EditLicenseCard from '../EditLicenseCard/EditLicenseCard';
import EditStackCard from '../EditStackCard/EditStackCard';
import * as E from './EditStack.styles';

interface EditStackProps {
  data?: ResponseGetPortfolio;
  editable?: boolean;
}

const EditStack = ({ data, editable }: EditStackProps) => {
  return (
    <E.EditStack>
      <EditIndexButton index="3" text="기술 스택 & 자격증" />

      <E.StackWrapper>
        <EditStackCard data={data} editable={editable} />
        <EditLicenseCard data={data} editable={editable} />
      </E.StackWrapper>
    </E.EditStack>
  );
};

export default EditStack;
