import { useCallback, useEffect, useState } from "react";
import { ErrorSchema, FormSchema, FormValues } from "../types/form";
import { Form } from "../components/Form";
import { ZodError } from "zod";

export default function useForm(initialState: FormSchema) {
  const [form, setForm] = useState<FormSchema>(initialState);
  const [errors, setErrors] = useState<ErrorSchema[]>([]);

  const initialVals: FormValues = {};

  form.children &&
    form.children
      .filter(
        (child) =>
          child.formElement === "input" ||
          (child.formElement === "label" && child.children)
      )
      .map((input) => {
        if (input.formElement === "label") {
          initialVals[input.children.name] = input.children.value
            ? input.children.value
            : "";
        } else {
          initialVals[input.name] = input.value ? input.value : "";
        }
      });

  const formState = useState<FormValues>(initialVals);
  const [formValues, setFormValues] = formState;

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
              input.zodValidation.parse(formValues[input.name]);
            } catch (error) {
              if (error instanceof ZodError) zodErrors.push(error);
            }
          }
        } else if (input.formElement === "label" && input.children) {
          if (input.children.zodValidation) {
            try {
              input.children.zodValidation.parse(
                formValues[input.children.name]
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
    setFormValues({});
  }, [initialState, setFormValues]);

  useEffect(() => {
    if (!form || !form.children) return;
    checkDuplicates({ ...form });
    const vals: FormValues = {};
    form.children
      .filter(
        (child) =>
          child.formElement === "input" ||
          (child.formElement === "label" && child.children)
      )
      .map((input) => {
        if (input.formElement === "label") {
          vals[input.children.name] = input.children.value;
        } else {
          vals[input.name] = input.value;
        }
      });
    Object.keys(vals).forEach((key) => {
      vals[key] = vals[key] || "";
    });
    setFormValues(vals);
  }, [checkDuplicates, form, setFormValues]);

  const formUI = Form({
    form,
    setForm,
    addError,
    setFormValues,
    submiForm,
    clearForm,
    formValues,
  });

  return {
    formState,
    errors,
    addError,
    removeError,
    clearErrors,
    formUI,
    validateFormZod,
    clearForm,
  };
}
