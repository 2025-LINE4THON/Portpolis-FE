import { usePortfolio } from '@/context/PortfolioContext';
import * as E from './EditStackCard.styles';
import { useEffect } from 'react';

const EditStackCard = () => {
  const { selectedStacks, setSelectedStacks } = usePortfolio();

  useEffect(() => {
    setSelectedStacks((prev) =>
      prev.map((stack) => ({
        ...stack,
        percent: (stack.level / 5) * 100,
      })),
    );
  }, [setSelectedStacks]);

  return (
    <E.EditStackCard>
      <p className="h3-bold">기술 스택</p>

      <E.ItemWrapper>
        {selectedStacks.map((stack) => (
          <E.Item>
            <E.Stack>{stack.stack}</E.Stack>

            <E.BarWrapper>
              <E.Bar>
                <E.PercentBar $percent={stack.percent || 0}>
                  <E.Circle $percent={stack.percent || 0}></E.Circle>
                </E.PercentBar>
              </E.Bar>

              <E.Percent>{stack.percent}%</E.Percent>
            </E.BarWrapper>
          </E.Item>
        ))}
      </E.ItemWrapper>
    </E.EditStackCard>
  );
};

export default EditStackCard;
