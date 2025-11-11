import type React from 'react';
import * as E from './ElementCard.styles';

interface ElementCardProps {
  content: React.ReactNode;
}

const ElementCard = ({ content }: ElementCardProps) => {
  return <E.ElementCard>{content}</E.ElementCard>;
};

export default ElementCard;
