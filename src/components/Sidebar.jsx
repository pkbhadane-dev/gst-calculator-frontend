import { Link } from "react-router-dom";

export const Sidebar = () => {
  const sidebar = [
    { name: "Dashboard", path: "/" },
    { name: "Clients", path: "/clients" },
    { name: "Invoice", path: "/create-invoice" },
  ];

  return (
    <>
      <div className="flex flex-col justify-between py-6 px-5 bg-slate-400 h-screen w-64 p-3">
        <div>
          <h1>LOGO</h1>
        </div>
        <div className="bg-slate-800 text-white flex flex-col justify-evenly p-5 rounded-lg h-[50%]">
          {sidebar.map((item) => {
            return (
              <div key={item.path} className="m-2">
                <Link className="" to={item.path}>
                  <span>{item.name}</span>
                </Link>
              </div>
            );
          })}
        </div>
        <div>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </>
  );
};
