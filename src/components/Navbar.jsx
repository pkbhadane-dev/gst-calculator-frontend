import { Link, useLocation } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import { useState } from "react";

export const Navbar = () => {
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false)
  const navbar = [
    { name: "Dashboard", path: "/" },
    { name: "Clients", path: "/clients" },
    { name: "Invoice", path: "/create-invoice" },
  ];

  const isActive = (path) => path === location.pathname;

  const navLinks = (navbar) => {
    return navbar.map((item) => (
      <Link
        key={item.name}
        to={item.path}
        className={`${isActive(item.path) && "text-slate-800 bg-slate-400"} py-2 px-3 rounded-md transition-colors`}
      >
        {item.name}
      </Link>
    ));
  };

  return (
    <div className="lg:hidden bg-slate-800 fixed flex text-slate-50 justify-between items-center px-5 py-4 h-20 w-full">
      <div>Logo</div>

      {/* navLinks for large screen size  */}
      <div className="hidden sm:flex gap-5">
        {navLinks(navbar)}
      </div>
      
      {/* navLinks for mobile */}
      <div className={`sm:hidden flex  flex-col bg-slate-600 absolute mt-[234px] w-full mx-[-20px] py-3 text-lg justify-center items-center transition-all ease-in-out duration-700 ${showMenu ? "translate-y-0 opacity-100 pointer-events-auto" :  " -translate-y-full opacity-0 pointer-events-none"}`}>
        {navLinks(navbar)}
      </div>

      <div className=" flex items-center gap-5">
        <Link>Login</Link>
        <span className=" sm:hidden" onClick={()=>setShowMenu(!showMenu)}>
            <TiThMenu size={28} className="text-slate-50"/>
        </span>
      </div>
    </div>
  );
};
