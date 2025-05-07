import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import List from "../Pages/List";

export const AppRoutes = createBrowserRouter([
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/list/:type", element: <List /> },
]);
