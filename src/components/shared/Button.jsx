import PropTypes from "prop-types"
function Button({ children, type, version, isDisabled }) {
    return (
        <button type={type} className={`btn btn-${version}`} disabled={isDisabled}>{children}</button>
    )
}

Button.defaultProps = {
    type: "button",
    version: "secondary",
    isDisabled: false,
    children: ""
}

Button.propTypes = {
    type: PropTypes.string,
    version: PropTypes.string,
    children: PropTypes.string,
    isDisabled: PropTypes.bool
}
export default Button
