import { InputSchema } from "../../types/input";

export default function NumberInput({
  type,
  className,
  autoFocus,
  disabled,
  maxLength,
  minLength,
  multiple,
  pattern,
  placeholder,
  readOnly,
  required,
  value,
  min,
  max,
  step,
  checked,
  onChange,
}: InputSchema) {
  if (type !== "text") {
    console.error("TextInput only supports type: text");
  }
  if (typeof value !== "number") {
    console.error("Value should be a number");
  }
  const numVal = Number(value);

  if (maxLength && minLength) {
    console.error(
      "TextInput does not support " + maxLength
        ? minLength
          ? "maxLength and minLength"
          : "maxLength"
        : "minLength"
    );
  }
  if (min && numVal && numVal < min) {
    console.error("Value should be greater than or equal to min value");
  }
  if (max && numVal && numVal > max) {
    console.error("Value should be less than or equal to max value");
  }
  return (
    <input
      type={type ? type : "text"}
      className={className}
      autoFocus={autoFocus}
      disabled={disabled}
      multiple={multiple}
      pattern={pattern}
      placeholder={placeholder}
      readOnly={readOnly}
      required={required}
      value={value}
      min={min}
      max={max}
      step={step}
      checked={checked}
      onChange={onChange}
    />
  );
}
