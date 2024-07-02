import { z } from "zod";
import { FormSchema } from "./types/form";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

const formSchemaZodValidation = {
  number: z.string().regex(phoneRegex, "Invalid Number!"),
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
    },
    {
      formElement: "input",
      type: "text",
      name: "name",
      className:
        "w-52 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",
      placeholder: "Number",
      zodValidation: formSchemaZodValidation.number,
    },
    {
      formElement: "input",
      type: "number",
      name: "rollNo",
      className:
        "w-52 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",
      placeholder: "Roll No.",
    },
    {
      formElement: "button",
      type: "submit",
      name: "submit",
      className:
        "text-white bg-gray-800 hover:bg-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-700",
      value: "Submit",
      autoFocus: true,
      disabled: false,
    },
  ],
};
export default Options;
