import { Link } from 'react-router-dom'
import { FaQuestion } from 'react-icons/fa'
function AboutButton() {
    return (
        <Link to="/about" className="about-button">
            <FaQuestion size={30} />
        </Link>
    )
}

export default AboutButton
