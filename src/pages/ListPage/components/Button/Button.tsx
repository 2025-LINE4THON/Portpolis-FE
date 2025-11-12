import { useState } from 'react';
import * as B from './Button.styles';
import ArrowIcon from '@assets/ListPage/icon-arrow-down.svg?react';

const Button = () => {
  const [order, setOrder] = useState<'desc' | 'asc'>('desc');

  return (
    <B.Button>
      <p>{order === 'desc' ? '최신 순' : '오래된 순'}</p>
      <ArrowIcon onClick={() => setOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'))} />
    </B.Button>
  );
};

export default Button;
