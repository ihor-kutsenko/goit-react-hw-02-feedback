import PropTypes from 'prop-types';
import css from './FeedbackButton.module.css';

const FeedbackButton = ({option, children, onClick, icon: Icon = null}) => {
  return (
     <li key={option}>
            <button className={css.feedback_btn}
              type="button"
              key={option}
              value={option}
              onClick={onClick}
      >
        {Icon && <Icon size="24" />}
        {option}
        {children}
            </button>
          </li>
  )
}

FeedbackButton.propTypes = {
  option: PropTypes.string,
  type: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  icon: PropTypes.any,
}

export default FeedbackButton;