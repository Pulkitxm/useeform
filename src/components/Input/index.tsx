import { useEffect } from "react";
import { FormValues } from "../../types/form";
import { InputSchema } from "../../types/input";
import NumberInput from "./NumberInput";
import TextInput from "./TextInput";

export default function Input({
  props,
  addError,
  setFormValues,
}: {
  props: InputSchema;
  addError: (error: string, name: string) => void;
  setFormValues: React.Dispatch<React.SetStateAction<FormValues[]>>;
}): JSX.Element {
  useEffect(() => {
    if (!props.name) addError("Name is required", "name");
  }, [props.name, props.placeholder, addError]);
  if (props.type === "number")
    return (
      <NumberInput
        props={props}
        addError={addError}
        setFormValues={setFormValues}
      />
    );
  else
    return (
      <TextInput
        props={props}
        addError={addError}
        setFormValues={setFormValues}
      />
    );
}
