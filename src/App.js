import CallMonitor from "./pages/CallMonitor";
import Dashboard from "./pages/Dashboard";
import Leads from "./pages/Leads";
import Logout from "./pages/Logout";
import Profile from "./pages/Profile";
import SearchUsers from "./pages/SearchUsers";
import History from "./pages/History";
import Revenue from "./pages/Revenue";
import Expenses from "./pages/Expenses";
import BusinessAccount from "./pages/BusinessAccount";
import "./style/App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/CallMonitor" element={<CallMonitor />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Logout" element={<Logout />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/SearchUsers" element={<SearchUsers />} />
        <Route path="/History" element={<History />} />
        <Route path="/Leads" element={<Leads />} />
        <Route path="/Leads" element={<Revenue />} />
        <Route path="/Leads" element={<Expenses />} />
        <Route path="/Leads" element={<BusinessAccount />} />
      </Routes>
    </div>
  );
}

export default App;
