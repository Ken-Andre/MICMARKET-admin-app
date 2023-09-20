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
import SCustomers from "./pages/SCustomers";
import Startuplist from "./pages/Startuplist";
import CategoryList from "./pages/Category";
import Addcat from "./pages/AddCat";
import Updatestartupdis from "./pages/Updatestartupdis";
import Updatestartup from "./pages/Updatestartup";

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
          <Route path="sCustomers" element={<SCustomers />} />
          <Route path="list-startup" element={<Startuplist />} />
          {/* <Route path="category" element={<CategoryList />} /> */}
          <Route path="list-category" element={<CategoryList />} />
          <Route path="category" element={<Addcat />} />
          <Route path="category/:id" element={<Addcat />} />
          <Route path="startup" element={<Addstartup />} />
          <Route path="update-startup" element={<Updatestartupdis />} />
          <Route path="update-startup/:id" element={<Updatestartup />} />
          <Route path="orders" element={<Orders />} />
          <Route path="enquiries" element={<Enquiries />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
