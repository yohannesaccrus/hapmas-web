import { Button } from "reactstrap";

const CustomButton = ({ btnText, btnType, btnColor, className, click }) => (
  <Button
    type={btnType}
    className={`newBtn newBtn--${btnColor} ${className}`}
    onClick={click}
  >
    {btnText}
  </Button>
);

export default CustomButton;
