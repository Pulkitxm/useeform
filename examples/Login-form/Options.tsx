import { FormSchema } from "./types/form";

const Options: FormSchema = {
  name: "test",
  className:
    "inline-flex flex-col justify-center items-center space-y-4 w-full bg-transparent w-full",
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
      formElement: "label",
      name: "label-salary",
      className: "block text-sm font-medium text-gray-700 w-full",
      value: "Username",
      children: {
        formElement: "input",
        type: "number",
        name: "salary",
        className:
          "mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300 w-full",
      },
    },
    {
      formElement: "label",
      name: "label-salary",
      className: "block text-sm font-medium text-gray-700 w-full",
      value: "Email",
      children: {
        formElement: "input",
        type: "email",
        name: "salary",
        className:
          "mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300 w-full",
      },
    },
    {
      formElement: "label",
      name: "label-salary",
      className: "block text-sm font-medium text-gray-700 w-full",
      value: "Password",
      children: {
        formElement: "input",
        type: "password",
        name: "salary",
        className:
          "mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300 w-full",
      },
    },
    {
      formElement: "button",
      type: "submit",
      name: "submit",
      className:
        "w-full bg-black text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300",
      value: "Sign Up",
      autoFocus: false,
      disabled: false,
    },
  ],
};
export default Options;
