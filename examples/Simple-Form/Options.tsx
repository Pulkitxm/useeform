import { FormSchema } from "useeform";

const Options: FormSchema = {
  className: "flex flex-col justify-center space-y-4 border-2 border-gray-300 p-10 rounded-xl",
  children: [
    {
      formElement: "label",
      name: "label-email",
      value: (
        <p className="inline-block text-sm font-medium text-gray-900 mr-2">
          Your email
        </p>
      ),
      className: "block mb-2 text-sm font-medium text-gray-900",
      children: {
        formElement: "input",
        type: "text",
        name: "email",
        className:
          "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",
        placeholder: "Name",
      },
    },
    {
      formElement: "label",
      name: "label-password",
      value: (
        <p className="inline-block text-sm font-medium text-gray-900 mr-2">
          Your password
        </p>
      ),
      className: "block mb-2 text-sm font-medium text-gray-900",
      children: {
        formElement: "input",
        type: "text",
        name: "password",
        className:
          "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",
        placeholder: "Password",
      },
    },
    {
      formElement: "label",
      name: "label-remember",
      value: (
        <p className="inline-block mb-2 text-sm font-medium text-gray-900 mr-2">
          Remember me
        </p>
      ),
      className: "flex items-center justify-start",
      children: {
        formElement: "input",
        type: "checkbox",
        name: "remember",
        className:
          "w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800",
        required: true,
      },
    },
    {
      formElement: "button",
      name: "submit",
      value: "Submit",
      className:
        "bg-blue-500 text-white text-sm font-medium rounded-lg p-2.5 w-20",
    },
  ],
};
export default Options;
