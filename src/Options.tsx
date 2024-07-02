import { z } from "zod";
import { FormSchema } from "./types/form";

const formSchemaZodValidation = {
  name: z.string().max(3),
};

const Options: FormSchema = {
  name: "test",
  className: "flex flex-col justify-center items-center h-screen space-y-4",
  preventDefault: true,
  onSubmit: (_, values, errors, zodErrors) => {
    if (errors.length) return console.log("Form has errors", errors);
    if (zodErrors.length)
      return console.log(
        "Form has Zod errors",
        zodErrors.map((error) => error.issues)
      );
    console.log("Form submitted", values);
  },
  children: [
    {
      formElement: "input",
      type: "text",
      name: "username",
      className:
        "w-52 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",
      placeholder: "Name",
      zodValidation: formSchemaZodValidation.name,
    },
    {
      formElement: "input",
      type: "number",
      name: "name",
      className:
        "w-52 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",
      placeholder: "Number",
    },
  ],
};
export default Options;
