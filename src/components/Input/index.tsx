import { InputSchema } from "../../types/input";
import NumberInput from "./NumberInput";
import TextInput from "./TextInput";

export default function Input({
  props,
  addError,
}: {
  props: InputSchema;
  addError: (error: string, name: string) => void;
}): JSX.Element {
  if (props.type === "text")
    return <TextInput props={props} addError={addError} />;
  else if (props.type === "number") return <NumberInput {...props} />;
  else return <input />;
}
