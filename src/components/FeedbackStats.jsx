import { useContext } from 'react';
/* import PropTypes from "prop-types" */

import FeedbackContext from '../context/FeedbackContext';

function FeedbackStats() {
    const { feedback } = useContext(FeedbackContext);
    let average = feedback.reduce((prev, current) => prev + current.rating, 0) / feedback.length;
    return (
        <div className="feedback-stats">
            <h4>{feedback.length} Reviews</h4>
            <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
        </div>
    )
}

/* FeedbackStats.propTypes = {
    feedback: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        rating: PropTypes.number,
        text: PropTypes.string,
    }))
} */
export default FeedbackStats
