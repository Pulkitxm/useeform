import { InputSchema } from "./input";

export type LabelSchema = {
  formElement: "label";
  name: string;
  className?: string;
  htmlFor?: string;
  children: InputSchema;
  value?: string | JSX.Element;
};
