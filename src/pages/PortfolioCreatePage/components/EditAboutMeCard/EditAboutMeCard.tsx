import * as E from './EditAboutMeCard.styles';

interface EditAboutMeCardProps {
  title: string;
  content: string;
  id: number;
  onChange: (id: number, field: 'title' | 'content', value: string) => void;
  onSubmit: () => void;
}

const EditAboutMeCard = ({ title, content, id, onChange, onSubmit }: EditAboutMeCardProps) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onSubmit();
    }
  };

  return (
    <E.EditAboutMeCard>
      <E.TitleInput
        placeholder={title}
        onChange={(e) => onChange(id, 'title', e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <E.ContentInput
        placeholder={content}
        onChange={(e) => onChange(id, 'content', e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </E.EditAboutMeCard>
  );
};

export default EditAboutMeCard;
