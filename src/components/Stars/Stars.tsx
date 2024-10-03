import { Star } from '../Star';

interface StarsProps {
  count?: number;
}

export const Stars = ({ count = 0 }: StarsProps): JSX.Element | null => {
  if (!Number.isInteger(count) || count < 1 || count > 5) {
    return null;
  }

  const stars = Array(count).fill(null).map((_, index) => (
    <Star key={index} />
  ));

  return (
    <ul className="card-body-stars u-clearfix">
      {stars}
    </ul>
  );
};
