import { useCallback, useEffect, useState } from "react";
import { FormSchema, FormValues } from "../types/form";
import { Form } from "../components/Form";

export default function useForm(initialState: FormSchema) {
  const [form, setForm] = useState<FormSchema>(initialState);
  const [errors, setErrors] = useState<string[]>([]);
  const [formValues, setFormValues] = useState<FormValues[]>([]);

  const addError = useCallback((error: string) => {
    setErrors((prevErrors) => [...prevErrors, error]);
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
      let haveDuplicateNames = false;
      vals.children
        .filter((child) => child.formElement === "input")
        .map((input) => input.name)
        .reduce(
          (
            acc: {
              [key: string]: boolean;
            },
            name
          ) => {
            if (acc[name]) {
              haveDuplicateNames = true;
            }
            return { ...acc, [name]: true };
          },
          {}
        );
      if (haveDuplicateNames) {
        addError("Form has duplicate names");
      }
    },
    [addError]
  );

  useEffect(() => {
    if (!form || !form.children) return;
    checkDuplicates({ ...form });
    const vals: FormValues[] = form.children
      .filter((child) => child.formElement === "input")
      .map((input, index) => ({
        value: input.value,
        name: input.name,
        index: index,
      }));
    setFormValues(vals);
  }, [checkDuplicates, form]);

  const formUI = Form({
    form,
    setForm,
    addError,
  });

  return {
    form,
    formValues,
    errors,
    addError,
    removeError,
    clearErrors,
    formUI,
  };
}
