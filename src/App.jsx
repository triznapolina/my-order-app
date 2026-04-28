import React from "react";

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import DigitalBistroBranchDetails from "./pages/DigitalBistroBranchDetails";
import DigitalBistroBranches from "./pages/DigitalBistroBranches";
import DigitalBistroCatalog from "./pages/DigitalBistroCatalog";
import DigitalBistroCategories from "./pages/DigitalBistroCategories";
import DigitalBistroCategoryManagement from "./pages/DigitalBistroCategoryManagement";
import DigitalBistroDishCatalog from "./pages/DigitalBistroDishCatalog";
import DigitalBistroPasswordReset from "./pages/DigitalBistroPasswordReset";
import DigitalBistroRegister from "./pages/DigitalBistroRegister";
import DigitalBistroSecurePasswordReset from "./pages/DigitalBistroSecurePasswordReset";
import DigitalBistroUserManagement from "./pages/DigitalBistroUserManagement";
import DigitalBistroSignIn from "./pages/DigitalBistroSignIn";
import DigitalBistroUserProfile from "./pages/DigitalBistroUserProfile";
import OrderManagement from "./pages/OrderManagement";

import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/restaurant-details" element={<DigitalBistroBranchDetails />} />
        <Route path="/restaurant-details/:id" element={<DigitalBistroBranchDetails />} />
        <Route path="/" element={<OrderManagement />} />
        <Route path="/admin-branches" element={<DigitalBistroBranches />} />
        <Route path="/admin-menu" element={<DigitalBistroCatalog />} />
        <Route path="/admin-categories" element={<DigitalBistroCategories />} />
        <Route path="/category-details" element={<DigitalBistroCategoryManagement />} />
        <Route path="/category-details/:id" element={<DigitalBistroCategoryManagement />} />
        <Route path="/dishes" element={<DigitalBistroDishCatalog />} />
        <Route path="/admin-users" element={<DigitalBistroUserManagement />} />
        <Route path="/admin-orders" element={<OrderManagement />} />
        <Route path="/user-info" element={<DigitalBistroUserProfile />} />
        <Route path="/user-info/:id" element={<DigitalBistroUserProfile />} />
        
        <Route path="/reset-request" element={<DigitalBistroPasswordReset />} />
        <Route path="/register" element={<DigitalBistroRegister />} />
        <Route path="/reset-password" element={<DigitalBistroSecurePasswordReset />} />
        <Route path="/login" element={<DigitalBistroSignIn />} />
        <Route path="*" element={<Navigate to="/admin-orders" replace />} />
      </Routes>
    </Router>
  );
}

export default App;