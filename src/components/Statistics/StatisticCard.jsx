import PropTypes from 'prop-types';
import css from './StatisticCard.module.css';

export const StatisticCard = ({ label, percentage }) => {
  return (
    <li className={css.item} style={{ backgroundColor: getRandomHexColor() }}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
  );
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

StatisticCard.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};
