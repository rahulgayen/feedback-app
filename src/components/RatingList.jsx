import { useState, useEffect, useContext } from "react";

import FeedbackContext from "../context/FeedbackContext";

function RatingList({ handleRatingChange }) {
    let rating_array = [...Array(10).keys()].map((i) => i + 1);
    const [selected, setSelected] = useState(7);

    const { editFeedback } = useContext(FeedbackContext);
    useEffect(() => {
        if (editFeedback.isEdit)
            setSelected(editFeedback.item.rating);
    }, [editFeedback])
    const handleChange = (event) => {
        setSelected(+event.currentTarget.value);
        handleRatingChange(+event.currentTarget.value);
    }
    return (
        <ul className="rating-list">
            {rating_array.map((element) => {
                return (
                    <li key={element}>
                        <input type="radio" className="radio-input" id={element} value={element} onChange={handleChange} checked={selected == element} />
                        <label htmlFor={element} className="radio-label">
                            {element}
                        </label>
                    </li>
                );
            })}
        </ul>
    );
}

export default RatingList;
