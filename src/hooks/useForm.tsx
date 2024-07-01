import { useCallback, useEffect, useState } from "react";
import { ErrorSchema, FormSchema, FormValues } from "../types/form";
import { Form } from "../components/Form";

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
              duplicateName = name;
            }
            return { ...acc, [name]: true };
          },
          {}
        );
      if (duplicateName) {
        addError("Form has duplicate names",duplicateName);
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
