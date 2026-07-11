import { useState } from "react";
import { Input } from "../components/Input";

export const Clients = () => {
  const [displayForm, setDisplayForm] = useState(false);

  const dummyClients = [
    {
      _id: "1",
      clientName: "Ramesh Kirana Store",
      state: "Maharashtra",
      createdAt: "2026-07-06",
    },
    {
      _id: "2",
      clientName: "TechNova Solutions",
      state: "Gujarath",
      createdAt: "2026-07-05",
    },
    {
      _id: "3",
      clientName: "Mahesh Traders",
      state: "M.P",
      createdAt: "2026-07-02",
    },
    {
      _id: "4",
      clientName: "Ramesh Traders",
      state: "U.P",
      createdAt: "2026-07-02",
    },
  ];

  return (
    <div className="relative h-screen bg-gradient-to-tr from-slate-100 via-slate-200 to-slate-400 p-5 overflow-auto">
      <h1 className=" text-2xl font-semibold">Clients</h1>
      <div className="mt-4 flex justify-end pr-5">
        <span
          className="bg-slate-800 py-2 px-3 rounded-md cursor-pointer hover:cursor-pointer hover:scale-105 transition-all text-slate-50"
          onClick={() => setDisplayForm(!displayForm)}
        >
          Add New Client
        </span>
      </div>
      <div className="z-100 border w-full text-slate-900 border-slate-300  mt-8 shadow-lg rounded-md p-5 overflow-auto">
        <h2 className="text-2xl bg-slate-800 w-fit px-4 py-2 rounded-md text-slate-50">
          Exisisting Clients
        </h2>
        <table className="w-full mt-8 text-left font-serif">
          <thead className="bg-slate-300">
            <tr>
              <th className="p-4">Sr.No.</th>
              <th className="p-4">Client Name</th>
              <th className="p-4">State</th>
              <th className="p-4">Date</th>
            </tr>
          </thead>
          <tbody className=" divide-y divide-slate-800">
            {dummyClients.map((client) => (
              <tr
                className="hover:bg-slate-800 hover:text-slate-50 transition-colors"
                key={client._id}
              >
                <td className="p-4">{client._id}</td>
                <td className="p-4">{client.clientName}</td>
                <td className="p-4">{client.state}</td>
                <td className="p-4">{client.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div
        className={`${displayForm ? "z-50" : "-z-50"} absolute top-20 right-40 bottom-20 left-40 flex justify-center items-center`}
      >
        
        <div
          className={`${displayForm ? "scale-100 z-100" : "scale-0"} transition-transform duration-700 bg-slate-400 w-[40%] p-5 rounded-md`}
        >
          <form className="flex flex-col">
            <Input
              label="Client-Name"
              id="clientName"
              htmlFor="clientName"
              placeholder="Enter Client name"
              name="clientName"
            />
            <Input
              label="Email"
              id="email"
              htmlFor="email"
              placeholder="Enter Email"
              name="email"
            />
            <Input
              label="Phone"
              id="phone"
              htmlFor="phone"
              placeholder="Enter Phone No."
              name="phone"
            />
            <Input
              label="Gstin No."
              id="gstin"
              htmlFor="gstin"
              placeholder="Enter GSTIN No."
              name="gstin"
            />
            <div className="flex justify-between p-3 font-serif">
              <label htmlFor="address">Address</label>
              <textarea
                id="address"
                name="address"
                placeholder="Enter Address"
                className="px-2 py-1 resize-none focus:outline-none rounded-sm"
                rows={4}
              />
            </div>
            <Input
              label="State"
              id="state"
              htmlFor="state"
              placeholder="i.e- Maharashtra"
              name="state"
            />
            <button
              type="Submit"
              className=" text-slate-50 px-3 py-1 rounded-sm mt-3"
            >
              <span className="bg-slate-800 px-3 py-1 rounded-sm text-lg">
                Add
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

