import { useContext, useState, useEffect } from "react";

import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingList from "./RatingList";

import FeedbackContext from "../context/FeedbackContext";

function FormCard() {
    const [review, setReview] = useState("");
    const [message, setMessage] = useState("");
    const [rating, setRating] = useState(7);
    const { handleAdd, editFeedback, handleUpdate, handleEditFeedback } = useContext(FeedbackContext);

    useEffect(() => {
        if (editFeedback.isEdit) {
            console.log(editFeedback)
            setReview(editFeedback.item.text);
        }
    }, [editFeedback])
    const handleChange = (event) => {
        setMessage(null)
        if (review != "" && review.trim().length < 10)
            setMessage("Review should be at least 10 letters")
        setReview(event.target.value);
    };
    const handleRatingChange = (rate) => {
        setRating(rate);
        /* console.log(rate) */
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if (editFeedback.isEdit) {
            handleUpdate({ id: editFeedback.item.id, text: review, rating });
            handleEditFeedback({ item: {}, isEdit: false })
        } else { handleAdd({ rating: rating, text: review }); }
        setReview("")
    }
    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2 className="card-header">How would you rate your service with us?</h2>
                <RatingList handleRatingChange={handleRatingChange} />
                <div className="form-text-group">
                    <input type="text" placeholder="Write a review" onChange={handleChange} value={review} />
                    <Button type="submit" version={review.trim().length >= 10 ? 'primary' : 'secondary'} isDisabled={review.trim().length >= 10 ? false : true} >Submit</Button>
                </div>
                <h4>{message != null ? message : null}</h4>
            </form>
        </Card>
    );
}

export default FormCard;
