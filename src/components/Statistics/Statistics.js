import Notification from '../Notification/Notification';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  const totalFn = good + neutral + bad;
  return (
    <div>
      {totalFn !== 0 ? (
        <ul className={s.statUl}>
          <li className={s.statLi}>Good: {good}</li>
          <li className={s.statLi}>Neutral: {neutral}</li>
          <li className={s.statLi}>Bad: {bad}</li>
          <li className={s.statLi}>Total: {total(totalFn)}</li>
          <li className={s.statLi}>
            Positive feetback: {positivePercentage(totalFn)}%
          </li>
        </ul>
      ) : (
        <Notification message="No feedback given" />
      )}
    </div>
  );
};
Statistics.defaultProps = {
  good: 0,
  neutral: 0,
  bad: 0,
  total: 0,
  positivePercentage: 0,
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.func,
  positivePercentage: PropTypes.func,
};

export default Statistics;