
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AdminPanel from './components/Admin/AdminPanel/AdminPanel';
import Home from  "../src/components/Home/Home"
import Login  from  "../src/components/Share/Login/Longin"
 
import { createContext, useState } from "react";
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
          <Route path="/dashboard">
           <AdminPanel/>
          </Route>
          
          <Route path="/login">
            <Login/>
          </Route>
        </Switch>
   
    </Router>
    </UserContext.Provider>
  );
}

export default App;
