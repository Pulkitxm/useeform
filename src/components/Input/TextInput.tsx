import { InputSchema } from "../../types/input";

export default function TextInput({
  props: {
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
  },
  addError,
}: {
  props: InputSchema;
  addError: (error: string) => void;
}) {
  if (type !== "text") {
    addError("TextInput only supports type: text");
  }
  if (max && min) {
    addError(
      "TextInput does not support " + max
        ? minLength
          ? "max and min"
          : "max"
        : "min"
    );
  }
  if (value && maxLength && value.length > maxLength) {
    addError("TextInput value is longer than maxLength");
  }
  if (value && minLength && value.length < minLength) {
    addError("TextInput value is longer than maxLength");
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