import EditIndexButton from '../EditIndexButton/EditIndexButton';
import EditLicenseCard from '../EditLicenseCard/EditLicenseCard';
import EditStackCard from '../EditStackCard/EditStackCard';
import * as E from './EditStack.styles';

const EditStack = () => {
  return (
    <E.EditStack>
      <EditIndexButton index="3" text="기술 스택 & 자격증" />

      <E.StackWrapper>
        <EditStackCard />
        <EditLicenseCard />
      </E.StackWrapper>
    </E.EditStack>
  );
};

export default EditStack;
