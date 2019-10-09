import { Button } from 'reactstrap'

const CustomButton = ({ btnText, btnType, btnColor, className }) => (
<Button type={btnType} className={`newBtn newBtn--${btnColor} ${className}`}>{btnText}</Button>
)

export default CustomButton;