import { useCallback, useEffect, useState } from "react";
import { ErrorSchema, FormSchema, FormValues } from "../types/form";
import { Form } from "../components/Form";
import { ZodError } from "zod";

export default function useForm(initialState: FormSchema) {
  const [form, setForm] = useState<FormSchema>(initialState);
  const [errors, setErrors] = useState<ErrorSchema[]>([]);
  const [formValues, setFormValues] = useState<FormValues[]>([]);

  const addError = useCallback((error: string, name: string) => {
    setErrors((prevErrors) => [...prevErrors, { error, name }]);
  }, []);
  const removeError = useCallback((index: number) => {
    setErrors((prevErrors) => [
      ...prevErrors.slice(0, index),
      ...prevErrors.slice(index + 1),
    ]);
  }, []);
  const clearErrors = useCallback(() => {
    setErrors([]);
  }, []);
  const checkDuplicates = useCallback(
    (vals: FormSchema) => {
      if (!vals || !vals.children) return;
      let duplicateName = null;

      const allVals: string[] = [];
      vals.children.map((input) => {
        if (input.formElement === "label" && input.children) {
          allVals.push(input.children.name);
          allVals.push(input.name);
        } else allVals.push(input.name);
      });
      allVals.reduce(
        (
          acc: {
            [key: string]: boolean;
          },
          name
        ) => {
          if (acc[name]) {
            duplicateName = name;
          }
          return { ...acc, [name]: true };
        },
        {}
      );
      if (duplicateName) {
        addError("Form has duplicate names", duplicateName);
      }
    },
    [addError]
  );

  const validateFormZod = useCallback((): ZodError[] => {
    const zodErrors: ZodError[] = [];
    if (form && form.children) {
      for (const input of form.children) {
        if (input.formElement === "input") {
          if (input.zodValidation) {
            try {
              input.zodValidation.parse(
                formValues.find((v) => v.name === input.name)?.value
              );
            } catch (error) {
              if (error instanceof ZodError) zodErrors.push(error);
            }
          }
        }
      }
    }
    return zodErrors;
  }, [form, formValues]);

  const submiForm = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      form && form.preventDefault && event.preventDefault();
      const zodErrors: ZodError[] = validateFormZod();
      form &&
        form.onSubmit &&
        form.onSubmit(event, formValues, errors, zodErrors);
    },
    [errors, form, formValues, validateFormZod]
  );
  const clearForm = useCallback(() => {
    setForm(initialState);
    setErrors([]);
    setFormValues([]);
  }, [initialState]);

  useEffect(() => {
    if (!form || !form.children) return;
    checkDuplicates({ ...form });
    const vals: FormValues[] = form.children
      .filter(
        (child) =>
          child.formElement === "input" ||
          (child.formElement === "label" && child.children)
      )
      .map((input, index) => {
        if (input.formElement === "label") {
          return {
            value: input.children.value,
            name: input.children.name,
            index: index,
          };
        } else {
          return {
            value: input.value,
            name: input.name,
            index: index,
          };
        }
      });
    setFormValues(
      vals.map((val) => (val.value == undefined ? { ...val, value: "" } : val))
    );
  }, [checkDuplicates, form]);

  const formUI = Form({
    form,
    setForm,
    addError,
    setFormValues,
    submiForm,
    clearForm,
  });

  return {
    form,
    formValues,
    errors,
    addError,
    removeError,
    clearErrors,
    formUI,
    validateFormZod,
    clearForm,
  };
}
