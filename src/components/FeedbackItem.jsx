import { useContext } from "react";

import { FaTimes, FaEdit } from "react-icons/fa"
import Card from "./shared/Card";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackItem({ rating, text, id }) {
    const { handleDelete, handleEditFeedback } = useContext(FeedbackContext)
    return (
        <Card>
            <div className="card-num-display">{rating}</div>
            <div className="edit" onClick={() => handleEditFeedback({ item: { id, rating, text }, isEdit: true })}>
                <FaEdit color="purple" />
            </div>
            <div className="close" onClick={() => handleDelete(id)}>
                <FaTimes color="purple" />
            </div>
            <div className="card-text-display">{text}</div>
        </Card>
    );
}

export default FeedbackItem;
