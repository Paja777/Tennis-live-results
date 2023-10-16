import { createBrowserRouter } from "react-router-dom";
import ListPage from "./ListPage";
import LogRegPage from "./LogRegPage";
import App from "./App";
import HomePage from "./HomePage";
import AccountPage from "./AccountPage";


export const router = createBrowserRouter([
    {path: '/', element: <App/>, children: [
         {path: '', element: <HomePage />},
        {path: 'catalog', element: <ListPage />},
        {path: 'catalog', element: <LogRegPage />},
        {path: 'catalog', element: <AccountPage />},
    ]}
])