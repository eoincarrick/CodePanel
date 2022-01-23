import CallMonitor from "./pages/CallMonitor";
import Dashboard from "./pages/Dashboard";
import Leads from "./pages/Leads";
import Logout from "./pages/Logout";
import Profile from "./pages/Profile";
import SearchUsers from "./pages/SearchUsers";
import History from "./pages/History";
import "./style/App.css";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Routes>
        <Route path="/CallMonitor" element={<CallMonitor />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Logout" element={<Logout />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/SearchUsers" element={<SearchUsers />} />
        <Route path="/History" element={<History />} />
        <Route path="/Leads" element={<Leads />} />
      </Routes>
    </div>
  );
}

export default App;
