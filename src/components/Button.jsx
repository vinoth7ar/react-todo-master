import PropTypes from 'prop-types'

const Button = ({ color, text, onClick }) => {

    return (
        <>
            <button
                style={{ backgroundColor: color }}
                className='btn'
                onClick={onClick}
            >
                {text}
            </button>

        </>
    )
}

Button.defaultProps = {
    color: 'lightgreen'
}

Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func
}

export default Button;