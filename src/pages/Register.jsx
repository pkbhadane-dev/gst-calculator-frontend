import { Input } from "../components/Input";

export const Register = () => {
  return (
    <>
      <div className=" w-full flex justify-center h-screen items-center">
        <div className=" bg-slate-400 p-5 flex flex-col items-center gap-5 rounded-sm">
          <h1 className="text-2xl font-serif font-semibold">Registration</h1>
          <form>
            <div className="flex flex-col gap-1">
              <Input
                htmlFor="businessName"
                id="businessName"
                label="Business-Name"
                type="text"
                placeholder="Enter BusinessName"
                name="businessName"
              />

              <Input
                htmlFor="email"
                label="Email"
                type="text"
                name="email"
                id="email"
                placeholder="Enter email"
              />

              <Input
                htmlFor="password"
                label="Password"
                type="text"
                name="password"
                id="password"
                placeholder="Enter password"
              />

              <Input
                htmlFor="gstin"
                label="Gstin"
                type="text"
                name="gstin"
                id="gstin"
                placeholder="Enter Gstin"
              />

              <Input
                htmlFor="address"
                label="Address"
                type="text"
                name="address"
                id="address"
                placeholder="Enter Address"
              />

              <Input
                htmlFor="state"
                label="State"
                type="text"
                name="state"
                id="state"
                placeholder="Enter State"
              />

              <button className=" bg-slate-800 py-2 text-white rounded-sm" type="submit">Register</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
