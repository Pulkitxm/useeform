import { useEffect } from "react";
import { FormValues } from "../../types/form";
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
  setFormValues,
}: {
  props: InputSchema;
  addError: (error: string, name: string) => void;
  setFormValues: React.Dispatch<React.SetStateAction<FormValues[]>>;
}) {
  useEffect(() => {
    if (type !== "text") {
      addError("TextInput only supports type: text", name);
    }
    if (max || min) {
      addError(
        "TextInput does not support " + max
          ? min
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
    // eslint-disable-next-line
  }, []);
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues((prevValues) =>
      prevValues.map((value) =>
        value.name === name ? { ...value, value: event.target.value } : value
      )
    );
    onChange && onChange(event);
  };
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
      onChange={handleOnChange}
    />
  );
}
