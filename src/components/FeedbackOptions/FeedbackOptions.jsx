import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onleaveFeedback }) => {
  return (
      <ul className={css.feedback_list}>
        {options.map(option => {
          return (
            <li key={option}>
              <button type="button" key={option} value={option}>{ option}</button>
            </li>
          )
        })}
      </ul>
        
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default FeedbackOptions;
