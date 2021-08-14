
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AdminPanel from './components/Admin/AdminPanel/AdminPanel';
import Home from  "../src/components/Home/Home"
import Login  from  "../src/components/Share/Login/Longin" 
import Register from '../src/components/Share/Register/Register';


import { createContext, useState } from "react";
import UserPanel from './components/User/UserPanel';

export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
    console.log("data is ", loggedInUser);

  return (
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
   
      <Router>
        <Switch>
          <Route exact path="/">
          <Home/>
          </Route>
          <Route exact path="/home">
          <Home/>
          </Route>
         <Route path="/dashboard">
         {loggedInUser.rule === 'admin' ?
         <AdminPanel/>
         :  <UserPanel />
         } 
           
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/register">
             <Register/>
          </Route>
        </Switch>
   
    </Router>
    </UserContext.Provider>
  );
}

export default App;
