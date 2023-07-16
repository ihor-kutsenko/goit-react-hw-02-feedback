import PropTypes from 'prop-types'
import css from './Notification.module.css'

const Notification = ({ message }) => {
  return (
    <h3 className={css.message}>{message}</h3>
  )
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
}

export default Notification;