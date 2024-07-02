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
  setFormValues: React.Dispatch<React.SetStateAction<FormValues[]>>
}): JSX.Element {
  if (props.type === "text")
    return <TextInput props={props} addError={addError} setFormValues={setFormValues} />;
  else if (props.type === "number") return <NumberInput props={props} addError={addError} setFormValues={setFormValues} />;
  else return <input />;
}
