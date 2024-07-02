import { ButtonHTMLAttributes } from "react";

export type ButtonSchema = {
  formElement: "button";
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  className?: string;
  name: string;
  value?: string;
  autoFocus?: boolean;
  disabled?: boolean;
};
