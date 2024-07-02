import React from "react";
import { className } from "./commons";
import { InputSchema } from "./input";
import { ZodError } from "zod";
import { ButtonSchema } from "./button";
import { LabelSchema } from "./label";

export type FormSchema = {
  onSubmit?: (
    event: React.FormEvent<HTMLFormElement>,
    formValues: FormValues[],
    errors: ErrorSchema[],
    zodErrors: ZodError[]
  ) => void;
  preventDefault?: boolean;
  className?: className;
  id?: string;
  name?: string;
  noValidate?: boolean;
  autoComplete?: "on" | "off";
  style?: React.CSSProperties;
  ref?: React.Ref<HTMLFormElement>;
  children?: Array<InputSchema | ButtonSchema | LabelSchema>;
};
export type FormValues = {
  value: string | number | undefined;
  name: string;
  index: number;
};
export type ErrorSchema = {
  error: string;
  name: string;
};
