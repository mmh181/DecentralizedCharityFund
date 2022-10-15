import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";

import "./styles.css";

export default function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="firstName">First Name:</label>
      <input {...register("firstName")} />
      <label htmlFor="lastName">Last Name:</label>
      <input {...register("lastName")} />
      <label htmlFor="email">Email:</label>
      <input {...register("email")} />
      <label htmlFor="gender">Gender:</label>
      <select {...register("gender")}>
        <option value="female">Female</option>
        <option value="male">Male</option>
        <option value="other">Other</option>
      </select>
      <input type="submit" />
    </form>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
