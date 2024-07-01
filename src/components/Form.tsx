import { FormSchema } from "../types/form";
import Input from "./Input";

export function Form({
  form: {
    onSubmit,
    children,
    className,
    id,
    noValidate,
    autoComplete,
    name,
    preventDefault,
    ref,
    style,
  },
  addError,
}: {
  form: FormSchema;
  setForm: React.Dispatch<React.SetStateAction<FormSchema>>;
  addError: (error: string, name: string) => void;
}): React.ReactElement<HTMLFormElement> {
  const handleFormSubmit = () =>
    preventDefault
      ? (event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          onSubmit && onSubmit(event);
        }
      : onSubmit;
  return (
    <form
      onSubmit={handleFormSubmit}
      className={className}
      id={id}
      noValidate={noValidate}
      autoComplete={autoComplete}
      style={style}
      ref={ref}
      name={name}
    >
      {children?.map((props, index) => (
        <Input
          key={index}
          props={props}
          addError={addError}
        />
      ))}
    </form>
  );
}
