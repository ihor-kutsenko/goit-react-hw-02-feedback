import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';
import FeedbackButton from 'components/FeedbackButton/FeedbackButton';
import Icons from 'components/Icons/Icons';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={css.feedback_list}>
      {options.map(option => {
        return (
          // <li key={option}>
          //   <button
          //     type="button"
          //     key={option}
          //     value={option}
          //     onClick={() => onLeaveFeedback(option)}
          //   >
          //     {option}
          //   </button>
          // </li>
          <FeedbackButton
            key={option}
            type="button"
            icon={Icons[option]}
            value={option}
            children={option}
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </FeedbackButton>  
        );
      })}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
