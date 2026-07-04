import { Outlet } from "react-router-dom";
import "./App.css";
import { Clients } from "./pages/Clients";
import { CreateInvoice } from "./pages/CreateInvoice";

function App() {
  return (
    <main>
      <div>
        <Outlet />
      </div>
    </main>
  );
}

export default App;
