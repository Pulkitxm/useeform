import { FormSchema, FormValues } from "../types/form";
import Input from "./Input";

export function Form({
  form: { children, className, id, noValidate, autoComplete, name, ref, style },
  addError,
  setFormValues,
  submiForm,
}: {
  form: FormSchema;
  setForm: React.Dispatch<React.SetStateAction<FormSchema>>;
  addError: (error: string, name: string) => void;
  setFormValues: React.Dispatch<React.SetStateAction<FormValues[]>>;
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
      {children?.map((props, index) => (
        <Input
          key={index}
          props={props}
          addError={addError}
          setFormValues={setFormValues}
        />
      ))}
      <button
        type="submit"
        className="text-white bg-gray-800 hover:bg-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-700"
      >
        Submit
      </button>
    </form>
  );
}
