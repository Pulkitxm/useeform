import { HTMLInputTypeAttribute } from "react";
import { z } from "zod";

export type InputSchema = {
  formElement: "input";
  type?: HTMLInputTypeAttribute;
  className?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
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
  maxLength?: number;
  minLength?: number;
  name: string;
  zodValidation?: z.ZodType;
};
