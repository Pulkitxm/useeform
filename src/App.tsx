import useForm from "./hooks/useForm";

export default function App() {
  const { form, errors, formUI } = useForm({
    name: "",
    email: "",
    password: "",
  });
  return <>{formUI}</>;
}
