import { DashboardCard } from "../components/DashboardCard";
import { Table } from "../components/Table";

export const Dashboard = () => {
  return (
    <>
      <div className="p-5 bg-gradient-to-b from-slate-300 via-slate-200 to-slate-300 h-auto ">
        <h1 className="font-serif text-2xl font-semibold mt-2 px-4">Dashboard</h1>
        <div className="xl:grid grid-cols-3 flex flex-wrap  gap-4 mt-7">
          <DashboardCard />
          <DashboardCard/>
          <DashboardCard/>
        </div>
        <div className="px-5 mt-10 mb-5">
          <Table/>
        </div>
      </div>
    </>
  );
};
