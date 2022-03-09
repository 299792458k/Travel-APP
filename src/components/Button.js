import './Button.css'

const Size = ["medium", "large"]
const Style = ['primary', 'outline']
function Button({
    buttonSize,
    buttonStyle, 
    children,
    onClick
}) {
    const checkButtonSize = Size.includes(buttonSize) ? buttonSize : Size[0]
    const checkButtonStyle = Style.includes(buttonStyle) ? buttonStyle : Style[0]
    return (
        <button
            className= {`btn ${checkButtonSize} ${checkButtonStyle}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button