import { useState } from 'react';
import EditAboutMeCard from '../EditAboutMeCard/EditAboutMeCard';
import EditIndexButton from '../EditIndexButton/EditIndexButton';
import * as E from './EditAboutMe.styles';
import { usePortfolio } from '@/context/PortfolioContext';

export interface IData {
  id: number;
  title: string;
  content: string;
}

const EditAboutMe = () => {
  const { aboutMe, setAboutMe } = usePortfolio();

  const [inputs, setInputs] = useState<IData[]>(aboutMe.map((item, idx) => ({ id: idx + 1, ...item })));

  const handleChange = (id: number, field: 'title' | 'content', value: string) => {
    setInputs((prev) => {
      const updated = prev.map((item) => (item.id === id ? { ...item, [field]: value } : item));

      setAboutMe(updated.map(({ title, content }) => ({ title, content })));

      return updated;
    });
  };

  const handleSubmit = () => {
    setAboutMe(inputs.map(({ title, content }) => ({ title, content })));
  };

  return (
    <E.EditAboutMe>
      <EditIndexButton index="01" text="About Me" />

      <E.CardWrapper>
        {inputs.map((data) => (
          <EditAboutMeCard
            key={data.id}
            title={data.title}
            content={data.content}
            onChange={handleChange}
            id={data.id}
            onSubmit={handleSubmit}
          />
        ))}

        <E.DividerIcon />
      </E.CardWrapper>
    </E.EditAboutMe>
  );
};

export default EditAboutMe;
