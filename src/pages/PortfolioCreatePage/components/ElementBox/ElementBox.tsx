import * as E from './ElementBox.styles';

interface ElementBoxProps {
  number: number;
  title: string | React.ReactNode;
  subTitle: string;
  ElementCard: React.ReactNode;
}

const ElementBox = ({ number, title, subTitle, ElementCard }: ElementBoxProps) => {
  return (
    <E.ElementBox>
      <E.ElementWrapper>
        <E.Number $number={number}>{number}</E.Number>

        <E.TextBox>
          <E.Title>{title}</E.Title>
          <E.SubTitle>{subTitle}</E.SubTitle>
        </E.TextBox>
      </E.ElementWrapper>

      {ElementCard}
    </E.ElementBox>
  );
};

export default ElementBox;
