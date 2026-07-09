import { useState } from "react";
import { Input } from "../components/Input";

export const CreateInvoice = () => {
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [clientId, setClientId] = useState("");

  const [items, setItems] = useState([
    { itemName: "", price: "", quantity: 1, gstRate: 18 },
  ]);
  const [srNo, setSrNo] = useState(1);

  const handleAddMoreItem = () => {
    setItems([...items, { itemName: "", price: "", quantity: 1, gstRate: 18 }]);
    setSrNo(srNo + 1);
  };

  // console.log(invoiceNumber, clientId);

  return (
    <div className="p-5 bg-gradient-to-tr from-slate-100 via-slate-200 to-slate-400 h-screen overflow-auto ">
      <h1 className=" font-serif text-2xl font-semibold">Create Invoice</h1>
      <div className=" flex justify-evenly">
        <Input
          label="Invioce Number"
          type="text"
          htmlFor="invoiceNumber"
          id="invoiceNumber"
          placeholder="i.e INV-2026-001"
          value={invoiceNumber}
          onChange={(e) => setInvoiceNumber(e.target.value)}
        />
        <div className=" flex gap-3 items-center font-serif">
          <label htmlFor="client">Select Client</label>
          <select
            className=" focus:outline-none px-2 py-1 rounded-sm bg-slate-10 border-none"
            value={clientId}
            onChange={(e) => setClientId(e.target.value)}
          >
            <option value="">--Choose Client--</option>
            <option value="1">Ramesh Kirana Store(Maharashtra)</option>
            <option value="2">TechNova Solutions(Gujarat)</option>
            <option value="3">Mahesh Traders(M.P)</option>
          </select>
        </div>
      </div>
      <div className="flex gap-5 mt-10">
        <div className="border text-slate-900 border-slate-300 h-full shadow-lg rounded-md p-5 font-serif">
          <table>
            <thead>
              <tr>
                <th>Sr.no</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Gst Rate</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>
                    <Input
                      type="text"
                      htmlFor="itemName"
                      id="itemName"
                      name="itemName"
                      value={items.itemName}
                      placeholder="i.e- phone"
                    />
                  </td>
                  <td>
                    <Input
                      type="text"
                      htmlFor="price"
                      id="price"
                      value={items.price}
                      placeholder="0.00"
                    />
                  </td>
                  <td>
                    <Input
                      type="text"
                      htmlFor="quantity"
                      id="quantity"
                      value={items.quantity}
                      placeholder="1"
                    />
                  </td>
                  <td>
                    <select
                      className="py-[6.5px] px-3 rounded-sm focus:outline-none"
                      value={items.gstRate}
                    >
                      <option>5%</option>
                      <option>12%</option>
                      <option>18%</option>
                      <option>28%</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            onClick={handleAddMoreItem}
            className=" bg-slate-800 text-slate-50 py-2 px-3 rounded-md mt-4 hover:scale-105 transition-all duration-300"
          >
            Add More
          </button>
        </div>
        <div className="border text-slate-900 border-slate-300 shadow-lg h-full rounded-md p-5 font-serif">
          <h2 className="text-center mb-4 font-semibold">CALCULATION</h2>
          <div className="flex flex-col gap-3 w-56 text-lg">
            <div className="flex justify-between">
              <span>Base Amount:</span>
              <span>150000</span>
            </div>
            <div className="flex justify-between">
              <span>CGST:</span>
              <span>1000</span>
            </div>
            <div className="flex justify-between">
              <span>SGST:</span>
              <span>1000</span>
            </div>
            <div className="flex justify-between">
              <span>IGST:</span>
              <span>0</span>
            </div>

            <hr className=" border-t-2 border-slate-900" />
            <div className="flex justify-between">
              <span>Grand Total:</span>
              <span> 152000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

