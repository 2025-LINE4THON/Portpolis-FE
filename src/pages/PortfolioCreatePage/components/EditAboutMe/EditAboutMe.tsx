import { useState } from 'react';
import { usePortfolio } from '@/context/PortfolioContext';
import type { ResponseGetPortfolio } from '@/types/PortfolioCreatePage/edit';
import EditAboutMeCard from '../EditAboutMeCard/EditAboutMeCard';
import EditIndexButton from '../EditIndexButton/EditIndexButton';
import * as E from './EditAboutMe.styles';

export interface IData {
  id: number;
  title: string;
  content: string;
}

interface EditAboutMeProps {
  data?: ResponseGetPortfolio;
  editable?: boolean;
}

const EditAboutMe = ({ data, editable }: EditAboutMeProps) => {
  const { aboutMe, setAboutMe } = usePortfolio();

  // about me 작성 input
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
        {editable &&
          inputs.map((data) => (
            <EditAboutMeCard
              key={data.id}
              title={data.title}
              content={data.content}
              onChange={handleChange}
              id={data.id}
              onSubmit={handleSubmit}
            />
          ))}

        {!editable &&
          data?.data.aboutMe.map((data, idx) => (
            <EditAboutMeCard
              key={idx}
              title={data.title}
              content={data.content}
              onChange={handleChange}
              onSubmit={handleSubmit}
            />
          ))}

        <E.DividerIcon />
      </E.CardWrapper>
    </E.EditAboutMe>
  );
};

export default EditAboutMe;
