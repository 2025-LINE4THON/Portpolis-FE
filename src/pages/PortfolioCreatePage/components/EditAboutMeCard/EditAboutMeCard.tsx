import * as E from './EditAboutMeCard.styles';

interface EditAboutMeCardProps {
  title: string;
  content: string;
}

const EditAboutMeCard = ({ title, content }: EditAboutMeCardProps) => {
  return (
    <E.EditAboutMeCard>
      <E.Title>{title}</E.Title>
      <E.Content>{content}</E.Content>
    </E.EditAboutMeCard>
  );
};

export default EditAboutMeCard;
