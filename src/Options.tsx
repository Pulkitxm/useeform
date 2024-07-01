import { FormSchema } from "./types/form";

const Options:FormSchema = {
  name: "test",
  className: "flex flex-col justify-center items-center h-screen",
  children: [
    {
      formElement: "input",
      name: "username",
      className:"border-2 my-2 p-3 rounded-xl border-black",
      type: "text",
      placeholder: "Name",
    },
    {
      formElement: "input",
      name: "username",
      className:"border-2 my-2 p-3 rounded-xl border-black",
      type: "text",
      placeholder: "Name",
    }
  ],
};
export default Options;
