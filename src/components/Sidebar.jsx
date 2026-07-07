import { Link, useLocation } from "react-router-dom";

export const Sidebar = () => {
  const location = useLocation();
  const sidebar = [
    { name: "Dashboard", path: "/" },
    { name: "Clients", path: "/clients" },
    { name: "Invoice", path: "/create-invoice" },
  ];

  const isActive = (path) => location.pathname === path;

  


  return (
    <>
      <div className="hidden lg:flex flex-col justify-between py-6 px-5 bg-slate-400 w-64 p-3">
        <div>
          <h1>LOGO</h1>
        </div>
        <div className="bg-slate-800 text-white flex flex-col justify-evenly p-5 rounded-lg h-[50%]">
          {sidebar.map((item) => {
            return (
              <div key={item.path} className="m-2">
                <Link className="" to={item.path}>
                  <span className={`${isActive(item.path) && "bg-slate-400 text-slate-900"} transition-colors px-4 py-2 rounded-md `}>
                    {item.name}
                  </span>
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
