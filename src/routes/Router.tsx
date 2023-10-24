import { createBrowserRouter } from "react-router-dom";
import ListPage from "../components/ListPage";
import LogRegPage from "../features/account/LogRegPage";
import App from "../App";
import HomePage from "../layout/HomePage";
import Profile from "../features/account/Profile";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "/listpage", element: <ListPage /> },
      { path: "/logreg", element: <LogRegPage /> },
      { path: "/account", element: <Profile /> },
    ],
  },
]);
