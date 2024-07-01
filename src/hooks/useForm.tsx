import { useState } from "react";
import FormSchema from "../types/form";

export default function useForm(initialState: FormSchema) {
  const [form, setForm] = useState<FormSchema>(initialState);
  const [errors, setErrors] = useState([]);
  const formUI = <form></form>;

  return {
    form,
    errors,
    formUI,
  };
}
