import { ChangeEvent, HTMLInputTypeAttribute } from "react";

type InputSchema = {
  type?: HTMLInputTypeAttribute;
  className?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  readOnly?: boolean;
  placeholder?: string;
  required?: boolean;
  pattern?: string;
  min?: number;
  max?: number;
  step?: string;
  autoFocus?: boolean;
  multiple?: boolean;
  checked?: boolean;
  maxLength?: string;
  minLength?: string;
};
export default InputSchema;
