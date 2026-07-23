import { Outlet } from "react-router-dom";
import "./App.css";
import { Clients } from "./pages/Clients";
import { CreateInvoice } from "./pages/CreateInvoice";
import { Sidebar } from "./components/Sidebar";
import { Navbar } from "./components/Navbar";
import { ContextProvider } from "./context/contextApi";

function App() {
  return (
    <div className="flex flex-1 overflow-hidden h-full lg:h-screen">
      <Navbar />
      <Sidebar />
      <main className="w-full">
        <ContextProvider>
          <Outlet />
        </ContextProvider>
      </main>
    </div>
  );
}

export default App;
