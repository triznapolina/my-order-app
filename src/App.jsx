import React from "react";

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";


import DigitalBistroBranchDetails from "./pages/DigitalBistroBranchDetails";
import DigitalBistroBranches from "./pages/DigitalBistroBranches";
import DigitalBistroCatalog from "./pages/DigitalBistroCatalog";
import DigitalBistroCategories from "./pages/DigitalBistroCategories";
import DigitalBistroCategoryManagement from "./pages/DigitalBistroCategoryManagement";
import DigitalBistroDishCatalog from "./pages/DigitalBistroDishCatalog";
import DigitalBistroRegister from "./pages/DigitalBistroRegister";
import DigitalBistroUserManagement from "./pages/DigitalBistroUserManagement";
import DigitalBistroSignIn from "./pages/DigitalBistroSignIn";
import DigitalBistroUserProfile from "./pages/DigitalBistroUserProfile";
import OrderManagement from "./pages/OrderManagement";

import ClientCatalogManagement from "./pages/ClientCatalogManagement";
import CreatedOrderDetails from "./pages/CreatedOrderDetails";
import PersonalInfoUser from "./pages/PersonalInfoUser";
import Profile from "./pages/Profile";
import OrderResultCreated from "./pages/OrderResultCreated";
import DetailsMenuDish from "./pages/DetailsMenuDish";

import "./index.css";


const getToken = () =>
  localStorage.getItem("token");

const getUserRole = () => {

  const token =
    localStorage.getItem("token");

  if (!token) return null;

  try {

    const decoded =
      jwtDecode(token);

    return decoded.role;

  } catch (e) {

    return null;

  }

};


const ProtectedRoute = ({
  children,
  allowedRoles,
}) => {

  const token = getToken();

  const role = getUserRole();

  // нет авторизации
  if (!token) {
    return (
      <Navigate
        to="/login"
        replace
      />
    );
  }

  // роль не подходит
  if (
    allowedRoles &&
    !allowedRoles.includes(role)
  ) {
    return role === "ROLE_ADMIN"
      ? (
          <Navigate
            to="/admin-orders"
            replace
          />
        )
      : (
          <Navigate
            to="/client-catalog"
            replace
          />
        );
  }

  return children;

};

function App() {

  return (

    <Router>

      <Routes>

        {/* PUBLIC */}

        <Route
          path="/login"
          element={
            <DigitalBistroSignIn />
          }
        />

        <Route
          path="/register"
          element={
            <DigitalBistroRegister />
          }
        />

        {/* ========================= */}
        {/* ADMIN ROUTES */}
        {/* ========================= */}

        <Route
          path="/restaurant-details"
          element={
            <ProtectedRoute
              allowedRoles={[
                "ROLE_ADMIN",
              ]}
            >
              <DigitalBistroBranchDetails />
            </ProtectedRoute>
          }
        />

        <Route
          path="/restaurant-details/:id"
          element={
            <ProtectedRoute
              allowedRoles={[
                "ROLE_ADMIN",
              ]}
            >
              <DigitalBistroBranchDetails />
            </ProtectedRoute>
          }
        />

        <Route
          path="/category-details"
          element={
            <ProtectedRoute
              allowedRoles={[
                "ROLE_ADMIN",
              ]}
            >
              <DigitalBistroCategoryManagement />
            </ProtectedRoute>
          }
        />

        <Route
          path="/category-details/:id"
          element={
            <ProtectedRoute
              allowedRoles={[
                "ROLE_ADMIN",
              ]}
            >
              <DigitalBistroCategoryManagement />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin-branches"
          element={
            <ProtectedRoute
              allowedRoles={[
                "ROLE_ADMIN",
              ]}
            >
              <DigitalBistroBranches />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin-menu"
          element={
            <ProtectedRoute
              allowedRoles={[
                "ROLE_ADMIN",
              ]}
            >
              <DigitalBistroCatalog />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin-categories"
          element={
            <ProtectedRoute
              allowedRoles={[
                "ROLE_ADMIN",
              ]}
            >
              <DigitalBistroCategories />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dishes"
          element={
            <ProtectedRoute
              allowedRoles={[
                "ROLE_ADMIN",
              ]}
            >
              <DigitalBistroDishCatalog />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin-users"
          element={
            <ProtectedRoute
              allowedRoles={[
                "ROLE_ADMIN",
              ]}
            >
              <DigitalBistroUserManagement />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin-orders"
          element={
            <ProtectedRoute
              allowedRoles={[
                "ROLE_ADMIN",
              ]}
            >
              <OrderManagement />
            </ProtectedRoute>
          }
        />

        <Route
          path="/user-info/:id"
          element={
            <ProtectedRoute
              allowedRoles={[
                "ROLE_ADMIN",
              ]}
            >
              <DigitalBistroUserProfile />
            </ProtectedRoute>
          }
        />

        {/* ========================= */}
        {/* CLIENT ROUTES */}
        {/* ========================= */}

        <Route
          path="/client-catalog"
          element={
            <ProtectedRoute
              allowedRoles={[
                "ROLE_USER",
              ]}
            >
              <ClientCatalogManagement />
            </ProtectedRoute>
          }
        />

        <Route
          path="/created-order-details/:id"
          element={
            <ProtectedRoute
              allowedRoles={[
                "ROLE_USER",
              ]}
            >
              <CreatedOrderDetails />
            </ProtectedRoute>
          }
        />

        <Route
          path="/personal-info-user"
          element={
            <ProtectedRoute
              allowedRoles={[
                "ROLE_USER",
              ]}
            >
              <PersonalInfoUser />
            </ProtectedRoute>
          }
        />

        <Route
          path="/user-profile"
          element={
            <ProtectedRoute
              allowedRoles={[
                "ROLE_USER",
              ]}
            >
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/details-menu-dish/:id"
          element={
            <ProtectedRoute
              allowedRoles={[
                "ROLE_USER",
              ]}
            >
              <DetailsMenuDish />
            </ProtectedRoute>
          }
        />

        {/* ========================= */}
        {/* DEFAULT */}
        {/* ========================= */}

        <Route
          path="*"
          element={
            getUserRole() === "ROLE_ADMIN"
              ? (
                  <Navigate
                    to="/admin-orders"
                    replace
                  />
                )
              : (
                  <Navigate
                    to="/client-catalog"
                    replace
                  />
                )
          }
        />

      </Routes>

    </Router>

  );

}

export default App;