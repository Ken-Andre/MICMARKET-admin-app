import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Resetpassword from "./pages/Resetpassword.js";
import Forgotpassword from "./pages/Forgotpassword";
import Enquiries from "./pages/Enquiries";
import Addstartup from "./pages/Addstartup";

import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import Startuplist from "./pages/Startuplist";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/reset-password" element={<Resetpassword />} />
        <Route path="/forgot-password" element={<Forgotpassword />} />
        <Route path="/admin" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="customers" element={<Customers />} />
          <Route path="startup" element={<Addstartup />} />
          <Route path="list-startup" element={<Startuplist />} />
          <Route path="orders" element={<Orders />} />
          <Route path="enquiries" element={<Enquiries />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
