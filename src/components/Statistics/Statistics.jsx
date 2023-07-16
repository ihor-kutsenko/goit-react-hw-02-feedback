import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import { HiThumbUp, HiThumbDown } from 'react-icons/hi';
import { LuAnnoyed } from "react-icons/lu";
import {MdOutlineSummarize, MdOutlineEmojiEmotions} from "react-icons/md";

const Statistics = ({ good, neutral, bad, total = 0, positivePercentage = 0 }) => {
  return (
    <div className={css.statistics_wrapper}>
      
      <p className={css.description}> <HiThumbUp className={css.svg} size="24" /> Good: {good}</p>
      <p className={css.description}> <LuAnnoyed className={css.neutral} size="24" /> Neutral: {neutral}</p>
      <p className={css.description}> <HiThumbDown className={css.svg} size="24" /> Bad: {bad}</p>
      <p className={css.description}> <MdOutlineSummarize className={css.svg} size="24" /> Total: {total}</p>
      <p className={css.description}> <MdOutlineEmojiEmotions className={css.svg}  size="24" /> Positive feedback: {positivePercentage}%</p>
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
