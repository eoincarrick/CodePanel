import CallMonitor from "./pages/CallMonitor";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import Logout from "./pages/Logout";
import Profile from "./pages/Profile";
import SearchUsers from "./pages/SearchUsers";
import History from "./pages/History";
import Revenue from "./pages/Revenue";
import Expenses from "./pages/Expenses";
import Home from "./pages/Home";
import BusinessAccount from "./pages/BusinessAccount";
import "./style/App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/CallMonitor" element={<CallMonitor />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Logout" element={<Logout />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/SearchUsers" element={<SearchUsers />} />
        <Route path="/History" element={<History />} />
        <Route path="/Analytics" element={<Analytics />} />
        <Route path="/Revenue" element={<Revenue />} />
        <Route path="/Expenses" element={<Expenses />} />
        <Route path="/BusinessAccount" element={<BusinessAccount />} />
      </Routes>
    </div>
  );
}

export default App;
