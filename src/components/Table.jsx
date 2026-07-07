export const Table = () => {
  const recentInvoices = [
    {
      _id: "1",
      invoiceNumber: "INV-2026-001",
      clientName: "Ramesh Kirana Store", // Client मॉडेलमधून पॉप्युलेट होईल पुढे जाऊन
      grandTotal: 15450,
      createdAt: "2026-07-06",
    },
    {
      _id: "2",
      invoiceNumber: "INV-2026-002",
      clientName: "TechNova Solutions",
      grandTotal: 85000,
      createdAt: "2026-07-05",
    },
    {
      _id: "3",
      invoiceNumber: "INV-2026-003",
      clientName: "Mahesh Traders",
      grandTotal: 4200,
      createdAt: "2026-07-02",
    },
    {
      _id: "4",
      invoiceNumber: "INV-2026-004",
      clientName: "Mahesh Traders",
      grandTotal: 4200,
      createdAt: "2026-07-02",
    },
    {
      _id: "5",
      invoiceNumber: "INV-2026-005",
      clientName: "Mahesh Traders",
      grandTotal: 4200,
      createdAt: "2026-07-02",
    },
    {
      _id: "6",
      invoiceNumber: "INV-2026-006",
      clientName: "Mahesh Traders",
      grandTotal: 4200,
      createdAt: "2026-07-02",
    },
    {
      _id: "7",
      invoiceNumber: "INV-2026-007",
      clientName: "Mahesh Traders",
      grandTotal: 4200,
      createdAt: "2026-07-02",
    },
  ];

  return (
    <div className="border  text-slate-900 border-slate-300 shadow-lg rounded-md p-5 font-serif">
      <div className=" flex justify-between mb-5">
        <h2 className="text-lg font-semibold">Recent Invioce</h2>
        <span>Show All</span>
      </div>
      <div className="overflow-x-auto h-80">
        <table className=" w-full text-left border-collapse">
          <thead>
            <tr className="font-serif bg-slate-300 text-slate-900 ">
              <th className="p-4">Invoice No</th>
              <th className="p-4">Client Name</th>
              <th className="p-4">Amount</th>
              <th className="p-4">Date</th>
            </tr>
          </thead>
          <tbody className=" divide-y divide-slate-400">
            {recentInvoices.map((invoice) => (
              <tr
                className=" hover:bg-slate-800 hover:text-slate-50 transition-colors"
                key={invoice._id}
              >
                <td className="p-4">{invoice.invoiceNumber}</td>
                <td className="p-4">{invoice.clientName}</td>
                <td className="p-4">{invoice.grandTotal}</td>
                <td className="p-4">{invoice.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
