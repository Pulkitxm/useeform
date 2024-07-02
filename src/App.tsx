import useForm from "./hooks/useForm";
import "./App.css";
import Options from "./Options";

export default function App() {
  const { formUI } = useForm(Options);
  return formUI;
}
