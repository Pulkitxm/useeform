import useForm from "./hooks/useForm";
import "./App.css";
import Options from "./Options";
import { useEffect } from "react";

export default function App() {
  const { errors, formUI } = useForm(Options);
  useEffect(() => {
    errors.length && console.log(errors);
  }, [errors]);
  return <>{formUI}</>;
}
