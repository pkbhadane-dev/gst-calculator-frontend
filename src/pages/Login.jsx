import { useState } from "react";
import { Input } from "../components/Input";
import { loginUser } from "../api/loginUserApi";

export const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    loginUser();
  };

 

  return (
    <>
      <div className=" w-full flex justify-center h-screen items-center">
        <div className=" bg-slate-400 p-5 flex flex-col items-center gap-5 rounded-sm">
          <h1 className="text-2xl font-serif font-semibold">Login</h1>
          <form onSubmit={handleOnSubmit}>
            <div className="flex flex-col gap-1">
              <Input
                htmlFor="email"
                label="Email"
                type="text"
                name="email"
                id="email"
                placeholder="Enter email"
                onChange={handleOnChange}
              />
              <Input
                htmlFor="password"
                id="password"
                label="Password"
                type="text"
                placeholder="Enter Password"
                name="password"
                onChange={handleOnChange}
              />
              <button
                className=" bg-slate-800 py-2 text-white rounded-sm"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
