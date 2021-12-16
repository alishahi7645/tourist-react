import React from 'react'
import { Link } from 'react-router-dom';
import './button.css';
const STYLES = ['btn--primary','btn--outline','btn--special','btn--search','btn--search--place','btn--tour','to'];
const SIZES = ['btn--medium', 'btn--large']
function Button(props) {
    const {children,type,clickHandler,buttonStyle,buttonSize} = props
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]
    return (
        <Link to="/signup" className="btn-mobile">
        <button
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={clickHandler}
            type={type}
        >
            {children}
        </button>
    </Link>
    )
}

export default Button