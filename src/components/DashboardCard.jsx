export const DashboardCard = () => {
  return (
    <>
      <div className="flex flex-col border border-slate-900 bg-slate-800 shadow-lg shadow-slate-500 text-slate-50 hover:scale-105 transition-all duration-300 px-7 py-5 rounded-md gap-3 lg:w-80 m-auto">
        <div className="text-lg sm:text-2xl font-serif">
          <h3 className="mb-2 font-semibold">Total Sell</h3>
          <span>Rs 395,850.00</span>
        </div>
        <span>GST</span>
      </div>
    </>
  );
};
