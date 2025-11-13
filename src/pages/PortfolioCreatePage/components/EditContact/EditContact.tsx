import useGetUsers from '@/hooks/queries/PortfolioCreatePage/useGetUsers';
import * as E from './EditContact.styles';

const EditContact = () => {
  // 내 정보 조회
  const { data } = useGetUsers();

  return (
    <E.EditContact>
      <p>{data?.data.phoneNumber}</p>
      <p>{data?.data.email}</p>
    </E.EditContact>
  );
};

export default EditContact;
