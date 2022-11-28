import PropTypes from 'prop-types';
import css from './TablesRow.module.css';

export const TablesRow = ({ type, amount, currency }) => {
  return (
    <tr className={css.tableRow}>
      <td className={css.tableCell}>{type}</td>
      <td className={css.tableCell}>{amount}</td>
      <td className={css.tableCell}>{currency}</td>
    </tr>
  );
};

TablesRow.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
