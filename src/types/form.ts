import React from "react";
import { className } from "./commons";
import { InputSchema } from "./input";

export type FormSchema = {
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  preventDefault?: boolean;
  className?: className;
  id?: string;
  name?: string;
  noValidate?: boolean;
  autoComplete?: "on" | "off";
  style?: React.CSSProperties;
  ref?: React.Ref<HTMLFormElement>;
  children?: Array<InputSchema>;
};
export type FormValues = {
  value: string | undefined;
  name: string;
  index: number;
};
export type ErrorSchema = {
  error: string;
  name: string;
};
