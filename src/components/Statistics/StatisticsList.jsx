import PropTypes from 'prop-types';
import { StatisticCard } from './StatisticCard';
import css from './StatisticsList.module.css';

export const StatisticsList = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title ? <h2 className={css.title}>Upload stats</h2> : ''}

      <ul className={css.statList}>
        {stats.map(stat => (
          <StatisticCard
            key={stat.id}
            label={stat.label}
            percentage={stat.percentage}
          />
        ))}
      </ul>
    </section>
  );
};

StatisticsList.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
