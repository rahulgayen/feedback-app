import { motion, AnimatePresence } from "framer-motion"

import { useContext } from "react";

import PropTypes from "prop-types";
import FeedbackItem from "./FeedbackItem";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackList({ }) {
    const { feedback } = useContext(FeedbackContext);
    return (
        <AnimatePresence>
            {feedback.map((feedback) => {
                return (
                    <motion.li key={feedback.id}
                        initial={{ opacity: 0, y: -50, scale: 0.6 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, transition: { duration: 0.2 } }} style={{ listStyle: 'none' }}
                    >
                        <FeedbackItem text={feedback.text} rating={feedback.rating} id={feedback.id} key={feedback.id} />
                    </motion.li>
                )
            })}
        </AnimatePresence>

    )
}

/* FeedbackList.propTypes = {
    feedback_data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        rating: PropTypes.number,
        text: PropTypes.string,
    }))
} */
export default FeedbackList
