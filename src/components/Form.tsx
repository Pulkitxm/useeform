import { FormSchema, FormValues } from "../types/form";
import Button from "./Button";
import Input from "./Input";
import Label from "./Label";

export function Form({
  form: { children, className, id, noValidate, autoComplete, name, ref, style },
  addError,
  setFormValues,
  submiForm,
  clearForm,
}: {
  form: FormSchema;
  setForm: React.Dispatch<React.SetStateAction<FormSchema>>;
  addError: (error: string, name: string) => void;
  setFormValues: React.Dispatch<React.SetStateAction<FormValues[]>>;
  clearForm: () => void;
  submiForm: (event: React.FormEvent<HTMLFormElement>) => void;
}): React.ReactElement<HTMLFormElement> {
  return (
    <form
      onSubmit={submiForm}
      className={className}
      id={id}
      noValidate={noValidate}
      autoComplete={autoComplete}
      style={style}
      ref={ref}
      name={name}
    >
      {children?.map((child, index) =>
        child.formElement === "input" ? (
          <Input
            key={index}
            props={child}
            addError={addError}
            setFormValues={setFormValues}
          />
        ) : child.formElement === "button" ? (
          <Button
            props={child}
            addError={addError}
            clearForm={clearForm}
            key={index}
          />
        ) : child.formElement === "label" ? (
          <Label
            key={index}
            addError={addError}
            setFormValues={setFormValues}
            props={child}
          />
        ) : null
      )}
    </form>
  );
}
