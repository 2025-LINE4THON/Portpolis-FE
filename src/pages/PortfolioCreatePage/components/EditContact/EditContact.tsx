import useGetUsers from '@/hooks/queries/PortfolioCreatePage/useGetUsers';
import * as E from './EditContact.styles';

const EditContact = () => {
  // 내 정보 조회
  const { data: userData } = useGetUsers();

  // const showData = editable ? userData : data;

  return (
    <E.EditContact>
      <p>{userData?.data.phoneNumber}</p>
      <p>{userData?.data.email}</p>
    </E.EditContact>
  );
};

export default EditContact;
