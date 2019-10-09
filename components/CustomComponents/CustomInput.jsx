import { Input } from "reactstrap";

const CustomInput = ({
  inputType,
  inputId,
  placeholder,
  required,
  className,
  rows
}) => (
  <Input
    type={inputType}
    id={inputId}
    placeholder={placeholder}
    required={required}
    className={className}
    rows={rows}
  />
);

export default CustomInput;
