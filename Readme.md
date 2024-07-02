# useeform Hook

`useeform` is a custom React hook designed to simplify form handling in React applications. It provides an easy way to manage form state, handle form submissions, and validate form data. This hook is built to be flexible and can be integrated into any form structure you're working with.

## Features

- **Zod Validation**: Uses the Zod schema validation library to validate form fields.
- **Easy Form State Management**: Automatically manages the state of each form field.
- **Validation**: Supports synchronous and asynchronous validation of form fields.
- **Submission Handling**: Simplifies the form submission process, including handling of submission states (e.g., loading, success, error).
- **Customizable**: Designed to be easily customizable to fit any form structure and validation logic.

## Installation

To use `useeform` in your project, you can install it via npm or yarn:

```bash
npm install useeform
```

or

```bash
yarn add useeform
```

## Usage

Here's a basic example of how to use the `useeform` hook in a component:

```tsx
import React from "react";
import { useeform } from "useeform";

const MyForm = () => {
  const { formUI } = useeform({
    initialValues: { email: "", password: "" },
    children: [
      {
        formElement: "input",
        name: "email",
      },
      {
        formElement: "input",
        name: "password",
      },
    ],
  });

  return formUI;
};

export default MyForm;
```

## Examples

For more examples and detailed documentation, please refer [here](./examples)