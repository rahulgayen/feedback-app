import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import FormCard from "./components/FormCard";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import About from "./pages/About";
import AboutButton from "./components/AboutButton";

import { FeedbackProvider } from "./context/FeedbackContext";
/* import FeedbackData from "./data/feedback_data"; */

function App() {
    /* const [feedback, setFeedback] = useState(FeedbackData); */

    return (
        <FeedbackProvider>
            <Router>
                <Header />
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={
                            <div className="container">
                                <FormCard />
                                <FeedbackStats />
                                <FeedbackList />
                            </div>
                        }
                    ></Route>
                    <Route exact path="/about" element={<About />} />
                </Routes>
                <AboutButton />
            </Router>
        </FeedbackProvider>
    );
}

export default App;
