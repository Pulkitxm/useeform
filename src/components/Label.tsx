import React, { useEffect } from "react";
import { LabelSchema } from "../types/label";
import Input from "./Input";
import { FormValues } from "../types/form";

export default function Label({
  props: { children, formElement, name, className, htmlFor, value },
  addError,
  setFormValues,
  formValues,
}: {
  props: LabelSchema;
  addError: (error: string, name: string) => void;
  setFormValues: React.Dispatch<React.SetStateAction<FormValues>>;
  formValues: FormValues;
}) {
  useEffect(() => {
    if (formElement !== "label") addError("Invalid form element", name);
    if (!(htmlFor || children))
      addError("Label must have a for attribute or children", name);
    // eslint-disable-next-line
  }, []);
  return (
    <label className={className} htmlFor={htmlFor}>
      {value}
      <Input
        props={children}
        addError={addError}
        setFormValues={setFormValues}
        formValues={formValues}
      />
    </label>
  );
}
