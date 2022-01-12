import { Link } from "react-router-dom"
import Card from "../components/shared/Card"
function About() {
    return (
        <div className="container">
            <Card >
                <h2>About</h2>
                <p>This a React App for Feedback</p>
                <Link to="/">Back to Home</Link>
            </Card>
        </div>
    )
}

export default About
