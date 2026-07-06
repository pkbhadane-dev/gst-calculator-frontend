import { Input } from "../components/Input";

export const Login = () => {
  return (
    <>
      <div className=" w-full flex justify-center h-screen items-center">
        <div className=" bg-slate-400 p-5 flex flex-col items-center gap-5 rounded-sm">
          <h1 className="text-2xl font-serif font-semibold">Login</h1>
          <form>
            <div className="flex flex-col gap-1">
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
                id="password"
                label="Password"
                type="text"
                placeholder="Enter Password"
                name="password"
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
