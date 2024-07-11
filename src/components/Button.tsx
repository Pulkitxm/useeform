import React, { useEffect } from "react";
import { ButtonSchema } from "../types/button";

export default function Button({
  props: {
    type,
    className,
    name,
    value,
    autoFocus,
    disabled,
    formElement,
    loading,
    loadingComponent,
  },
  addError,
  clearForm,
}: {
  props: ButtonSchema;
  addError: (error: string, name: string) => void;
  clearForm: () => void;
}) {
  useEffect(() => {
    if (!name) addError("Name is required", "name");
    if (formElement !== "button")
      addError("Invalid form element", "formElement");
  }, [name, value, addError, formElement]);
  return (
    <button
      type={type ? type : "button"}
      className={className}
      name={name}
      autoFocus={autoFocus}
      disabled={disabled}
      onClick={type === "reset" ? clearForm : undefined}
    >
      {loading ? (loadingComponent ? loadingComponent : "Loading...") : value}
    </button>
  );
}
