import React from "react";
import {
  Route,
  HashRouter as Router,  // Change BrowserRouter to HashRouter
  Routes,
  Navigate,
} from "react-router-dom";
import { ErrorPage } from "../components/ErrorPage/ErrorPage";
import { PanelLayout } from "../components/layout/PanelLayout";
import Dashboard from "../pages/DashboardPages/Dashboard/Dashboard";
import Voice from "../pages/DashboardPages/Voice/Voice";
import Bizz from "../pages/DashboardPages/Bizz/Bizz";
import Bank from "../pages/DashboardPages/Bank/Bank";
import Chat from "../pages/DashboardPages/Chat/Chat";

const isAuthenticated = true;

const PrivateRoute = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default function index() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          errorElement={<ErrorPage />}
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <PanelLayout />
            </PrivateRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="/voice" element={<Voice />} />
          <Route path="/bizz" element={<Bizz />} />
          <Route path="/bank" element={<Bank />} />
          <Route path="/chat" element={<Chat />} />
        </Route>
      </Routes>
    </Router>
  );
}
