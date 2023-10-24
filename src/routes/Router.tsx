import { createBrowserRouter } from "react-router-dom";
import ListPage from "../ListPage";
import LogRegPage from "../features/account/LogRegPage";
import App from "../App";
import HomePage from "../layout/HomePage";
import AccountPage from "../features/account/AccountPage";
import MainMatchPage from "../MainMatchPage";
import { ListItem } from "@mui/material";


export const router = createBrowserRouter([
    {path: '/', element: <App/>, children: [
         {path: '', element: <HomePage />},
        {path: '/listpage', element: <ListPage />},
        {path: '/logreg', element: <LogRegPage />},
        {path: '/account', element: <AccountPage />},
        {path: '/:matchId', element: <MainMatchPage />},
        
        
    ]}
])