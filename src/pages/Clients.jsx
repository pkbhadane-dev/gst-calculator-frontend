import { useState } from "react";
import { Input } from "../components/Input";

export const Clients = () => {
  const [displayForm, setDisplayForm] = useState(false);

  const [clientData, setClientData] = useState({
    clientName: "",
    email: "",
    phone: "",
    gstin: "",
    address: "",
    state: "",
  });

  const [dummyClients, setDummyClients] = useState([]);

  const handleOnChange = (e) => {
    setClientData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };


  const handleOnSubmit = (e) => {
    e.preventDefault();

    setDummyClients((prev) => [...prev, clientData]);
    setClientData({
      clientName: "",
      email: "",
      phone: "",
      gstin: "",
      address: "",
      state: "",
    });
    setDisplayForm(false);
  };

  

  return (
    <div className="mt-16 lg:mt-0 h-screen bg-gradient-to-tr from-slate-100 via-slate-200 to-slate-400 p-5 overflow-auto">
      <h1 className=" text-2xl font-semibold">Clients</h1>
      <div className="mt-4 flex justify-end pr-5">
        <span
          className="bg-slate-800 py-2 px-3 rounded-md cursor-pointer hover:cursor-pointer hover:scale-105 transition-all text-slate-50"
          onClick={() => setDisplayForm(!displayForm)}
        >
          Add New Client
        </span>
      </div>
      <div className=" border w-full text-slate-900 border-slate-300  mt-8 shadow-lg rounded-md p-5 overflow-auto">
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
            {dummyClients.map((client, index) => (
              <tr
                className="hover:bg-slate-800 hover:text-slate-50 transition-colors"
                key={client._id}
              >
                <td className="p-4">{index+1}</td>
                <td className="p-4">{client.clientName}</td>
                <td className="p-4">{client.state}</td>
                <td className="p-4">{client.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div
        className={`${displayForm ? "scale-100" : " scale-0"}  transition-all duration-1000 absolute border border-slate-300 shadow-lg backdrop-blur-2xl rounded-md py-5 top-28 px-20 left-1/2 -translate-x-1/2`}
      >
        <div className="flex flex-col items-center">
          <h2 className="text-lg font-semibold bg-slate-800 py-1 px-3 rounded-md text-slate-50">
            Add New Client
          </h2>
          <p>Create a customer profile to generate quick invoices.</p>
          <hr className=" border border-slate-800 w-full mt-4 mb-2 " />
          <form onSubmit={handleOnSubmit} className="rounded-md text-slate-800">
            <Input
              size="30"
              htmlFor="clientName"
              label="Client/Bussiness Name"
              type="text"
              name="clientName"
              id="clientName"
              value={clientData.clientName}
              placeholder="Enter Client/Bussiness Name"
              onChange={handleOnChange}
            />

            <div className="flex justify-between">
              <Input
                label="Email"
                type="email"
                id="email"
                htmlFor="email"
                name="email"
                placeholder="xyz@email.com"
                value={clientData.email}
                onChange={handleOnChange}
              />
              <Input
                label="Phone Number"
                type="tel"
                id="phone"
                htmlFor="phone"
                name="phone"
                placeholder="8587868981"
                value={clientData.phone}
                onChange={handleOnChange}
              />
            </div>
            <div className="flex justify-between">
              <Input
                label="State"
                id="state"
                htmlFor="state"
                name="state"
                placeholder="Maharashtra"
                value={clientData.state}
                onChange={handleOnChange}
              />
              <Input
                label="GSTIN(optional)"
                id="gstin"
                htmlFor="gstin"
                name="gstin"
                placeholder="27AAAAA1111A1Z1"
                value={clientData.gstin}
                onChange={handleOnChange}
              />
            </div>
            <div className="flex flex-col px-3 py-1 gap-2 font-serif">
              <label id="address">Address</label>
              <textarea
                rows="6"
                htmlFor="address"
                name="address"
                className=" resize-none rounded-md focus:outline-none py-1 px-4"
                value={clientData.address}
                onChange={handleOnChange}
              />
            </div>
            <button
              type="submit"
              className="bg-slate-900 text-slate-50 px-3 py-1 rounded-md w-full mt-4 font-semibold hover:bg-slate-700 hover:scale-95 transition-all"
            >
              Save Client
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
