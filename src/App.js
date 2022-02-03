import Chat from "./pages/Chat";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import Logout from "./pages/Logout";
import Profile from "./pages/Profile";
import Users from "./pages/Users";
import History from "./pages/History";
import Revenue from "./pages/Revenue";
import Expenses from "./pages/Expenses";
import Home from "./pages/Home";
import About from "./House/About";
import Contact from "./House/Contact";
import Team from "./House/Team";
import BusinessAccount from "./pages/BusinessAccount";
import "./style/App.css";
import { Routes, Route } from "react-router-dom";
import Data from "./Data/Data.json";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/Chat" element={<Chat />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/" exact element={<Logout />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Users" element={<Users />} />
        <Route path="/History" element={<History />} />
        <Route path="/Analytics" element={<Analytics />} />
        <Route path="/Revenue" element={<Revenue />} />
        <Route path="/Expenses" element={<Expenses />} />
        <Route path="/BusinessAccount" element={<BusinessAccount />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Team" element={<Team />} />
      </Routes>
    </div>
  );
}

export default App;
