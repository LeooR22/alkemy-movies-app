import { FormEvent } from "react";
import { useForm } from "../hooks/useForm";

export const Login = () => {
  const { email, password, onChange, resetForm, isValidEmail } = useForm({
    email: "",
    password: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isValidEmail(email)) return;

    resetForm();

    console.log(email, password);
  };

  return (
    <>
      <h2>Formulario de Login</h2>
      <form onSubmit={handleSubmit} noValidate>
        <label>
          <span>Email: </span>
          <br />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={onChange}
          />
        </label>
        <br />
        <label>
          <span>Password: </span>
          <br />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onChange}
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </>
  );
};
