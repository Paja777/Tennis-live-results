import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import AccountPage from "./AccountPage";
import HomePage from "./HomePage";
import ListPage from "./ListPage";
import LogRegPage from "./LogRegPage";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path = '/list' element={<ListPage/>}/>
      <Route path='/account' element={<AccountPage/>}/> 
      <Route path='/logreg' element={<LogRegPage/>}/>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
