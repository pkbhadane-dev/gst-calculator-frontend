import { useState } from "react";
import { Input } from "../components/Input";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    businessName: "",
    email: "",
    password: "",
    gstin: "",
    address: "",
    state: "",
  });

  const handleOnChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    registerUser();
  };

  const registerUser = async () => {
    const url = "http://localhost:3000/api/v1/user/register";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to post data", response);
      }
      const result = response.json();

      console.log(result.data);

      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className=" w-full flex justify-center h-screen items-center">
        <div className=" bg-slate-400 p-5 flex flex-col items-center gap-5 rounded-sm">
          <h1 className="text-2xl font-serif font-semibold">Registration</h1>
          <form onSubmit={handleOnSubmit}>
            <div className="flex flex-col gap-1">
              <Input
                htmlFor="businessName"
                id="businessName"
                label="Business-Name"
                type="text"
                placeholder="Enter BusinessName"
                name="businessName"
                onChange={handleOnChange}
              />

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
                label="Password"
                type="text"
                name="password"
                id="password"
                placeholder="Enter password"
                onChange={handleOnChange}
              />

              <Input
                htmlFor="gstin"
                label="Gstin"
                type="text"
                name="gstin"
                id="gstin"
                placeholder="Enter Gstin"
                onChange={handleOnChange}
              />

              <div className="flex justify-between px-3 font-serif">
                <label htmlFor="address">Address</label>
                <textarea
                  id="address"
                  rows="5"
                  name="address"
                  className="resize-none w-48 rounded-sm px-2 py-1 focus:outline-none"
                  onChange={handleOnChange}
                />
              </div>

              <Input
                htmlFor="state"
                label="State"
                type="text"
                name="state"
                id="state"
                placeholder="Enter State"
                onChange={handleOnChange}
              />

              <button
                className=" bg-slate-800 py-2 text-white rounded-sm"
                type="submit"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
