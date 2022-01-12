import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([{
        id: 1,
        text: "This is the first review from context",
        rating: 9
    }])
    const [editFeedback, setEditFeedback] = useState({
        item: {},
        isEdit: false
    })

    const handleDelete = (id) => {
        console.log("delete")
        if (window.confirm("Are you sure you want to delete?"))
            setFeedback(feedback.filter(post => post.id !== id))
    }
    const handleAdd = (item) => {
        let review = { id: uuidv4(), ...item };
        setFeedback(prev => {
            return [...prev, review]
        })
    };
    const handleEditFeedback = (item) => {
        setEditFeedback({ ...item })
    };
    const handleUpdate = (item) => {
        setFeedback(feedback.map((element) => {
            if (element.id == item.id)
                return { ...item }
            return { ...element };
        }));
    }
    return <FeedbackContext.Provider value={{
        feedback, handleDelete, handleAdd,
        handleEditFeedback, editFeedback, handleUpdate
    }}>{children}</FeedbackContext.Provider>;
};

export default FeedbackContext;
