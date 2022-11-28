import PropTypes from 'prop-types';
import css from './StatisticCard.module.css';

export const StatisticCard = ({ label, percentage }) => {
  return (
    <li className={css.item} style={{ backgroundColor: getRandomRgbColor() }}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
  );
};

function getRandomRgbColor() {
  const red = Math.floor(Math.random() * 150);
  const blue = Math.floor(Math.random() * 250);

  return `rgb(${red},0,${blue})`;
}

StatisticCard.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};
