import { Outlet } from "react-router-dom";
import "./App.css";
import { Clients } from "./pages/Clients";
import { CreateInvoice } from "./pages/CreateInvoice";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <div className="flex flex-1 overflow-hidden">
      <Sidebar />
      <main className="w-full">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
