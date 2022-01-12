import PropTypes from "prop-types";

function Header(props) {
    return (
        <header>
            <h2>{props.text}</h2>
        </header>
    );
}

Header.defaultProps = { text: "Feedback UI" };
Header.propTypes = { text: PropTypes.string };
export default Header;
