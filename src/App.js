import Chat from "./pages/Chat";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import Logout from "./pages/Logout";
import Profile from "./pages/Profile";
import Users from "./pages/Users";
import LogHistory from "./pages/LogHistory";
import Fork from "./pages/Fork";
import ConnectedAccount from "./pages/ConnectedAccount";
import Home from "./pages/Home";
import About from "./House/About";
import Contact from "./House/Contact";
import Team from "./House/Team";
import Repositories from "./pages/Repositories";
import "./style/App.css";
import { Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <UserProvider>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Chat" element={<Chat />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/" exact element={<Logout />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Users" element={<Users />} />
          <Route path="/Log_History" element={<LogHistory />} />
          <Route path="/Analytics" element={<Analytics />} />
          <Route path="/Fork" element={<Fork />} />
          <Route path="/ConnectedAccount" element={<ConnectedAccount />} />
          <Route path="/Repositories" element={<Repositories />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Team" element={<Team />} />
        </Routes>
      </div>
    </UserProvider>
  );
}

export default App;
