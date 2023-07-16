import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total = 0, positivePercentage = 0 }) => {
  return (
    <div className={css.statistics}>
      <p className={css.item}>Good: {good}</p>
      <p className={css.item}>Neutral: {neutral}</p>
      <p className={css.item}>Bad: {bad}</p>
      <p className={css.item}>Total: {total}</p>
      <p className={css.item}>Positive feedback: {positivePercentage}%</p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
export default Statistics;
