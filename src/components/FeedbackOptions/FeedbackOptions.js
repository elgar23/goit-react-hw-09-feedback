import s from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
	const key = Object.keys(options);
  
	return (
	  <div className={s.buttons}>
		{key.map(e => (
		  <button
			key={e}
			type="button"
			className={s.button}
			onClick={() => onLeaveFeedback(e)}
		  >
			{e.charAt(0).toUpperCase() + e.slice(1)}
		  </button>
		))}
	  </div>
	);
  };
  export default FeedbackOptions;
  
  FeedbackOptions.propTypes = {
	onLeaveFeedback: PropTypes.func,
  };