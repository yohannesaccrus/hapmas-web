import { Input } from "reactstrap";

const CustomInput = ({
  inputType,
  inputId,
  placeholder,
  required,
  className,
  rows,
  onChange,
  value
}) => (
  <Input
    type={inputType}
    id={inputId}
    placeholder={placeholder}
    required={required}
    className={className}
    rows={rows}
    onChange={onChange}
    value={value}
  />
);

export default CustomInput;
