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
  formValues,
}: {
  props: InputSchema;
  addError: (error: string, name: string) => void;
  setFormValues: React.Dispatch<React.SetStateAction<FormValues>>;
  formValues: FormValues;
}) {
  useEffect(() => {
    if (type !== "number") {
      addError("NumberInput only supports type: number", name);
    }
    if (maxLength || minLength) {
      addError(
        "TextInput does not support " + maxLength
          ? minLength
            ? "maxLength and minLength"
            : "maxLength"
          : "minLength",
        name
      );
    }
    if (value && min && value.length > min) {
      addError(`NumberInput value is less than ${min}`, name);
    }
    if (value && min && value.length > min) {
      addError(`NumberInput value is less than ${min}`, name);
    }
    // eslint-disable-next-line
  }, []);
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues((prevValues) => {
      console.log("prevValues", prevValues);
      console.log({
        ...prevValues,
        [name]: Number(event.target.value),
      });
      return {
        ...prevValues,
        // [name]: Number(event.target.value),
      };
    });
    onChange && onChange(event);
  };
  return (
    <input
      type={"number"}
      className={className}
      autoFocus={autoFocus}
      disabled={disabled}
      multiple={multiple}
      pattern={pattern}
      placeholder={placeholder}
      readOnly={readOnly}
      required={required}
      value={formValues[name] ? formValues[name] : value}
      min={min}
      max={max}
      step={step}
      checked={checked}
      onChange={handleOnChange}
    />
  );
}
