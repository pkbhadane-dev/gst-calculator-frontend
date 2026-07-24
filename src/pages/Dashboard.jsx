import { useContext } from "react";
import { DashboardCard } from "../components/DashboardCard";
import { Table } from "../components/Table";
import { AppContext } from "../context/contextApi";

export const Dashboard = () => {
  const { isAuthenticated, user } = useContext(AppContext);
  console.log(isAuthenticated, user);
  
  return (
    <>
      <div className="mt-16 lg:mt-0 p-5 bg-gradient-to-tr from-slate-100 via-slate-200 to-slate-400 h-screen overflow-auto ">
        <h1 className="font-serif text-2xl font-semibold mt-2 px-4">
          Dashboard
        </h1>
        <div className="xl:grid grid-cols-3 flex flex-wrap  gap-4 mt-7">
          <DashboardCard />
          <DashboardCard />
          <DashboardCard />
        </div>
        <div className="px-5 mt-10 mb-5">
          <Table />
        </div>
      </div>
    </>
  );
};
