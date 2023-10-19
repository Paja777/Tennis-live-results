import { createBrowserRouter } from "react-router-dom";
import ListPage from "../ListPage";
import LogRegPage from "../LogRegPage";
import App from "../App";
import HomePage from "../HomePage";
import AccountPage from "../AccountPage";
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