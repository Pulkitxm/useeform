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
    name,
  },
  addError,
}: {
  props: InputSchema;
  addError: (error: string, name: string) => void;
}) {
  if (type !== "text") {
    addError("TextInput only supports type: text", name);
  }
  if (max && min) {
    addError(
      "TextInput does not support " + max
        ? minLength
          ? "max and min"
          : "max"
        : "min",
      name
    );
  }
  if (value && maxLength && value.length > maxLength) {
    addError("TextInput value is longer than maxLength", name);
  }
  if (value && minLength && value.length < minLength) {
    addError("TextInput value is longer than maxLength", name);
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
