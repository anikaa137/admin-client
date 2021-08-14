import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "../../Home/Home";
import AddUser from "../AddUser/AddUser";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import UserRequest from "../UserRequest/UserRequest";
import { useHistory } from "react-router-dom";

const AdminRoute = () => {
  const history = useHistory();

  const handleHomeRoute = () => {
    history.push("/");
  };

  return (
    <Switch>
      <Route exact path="/dashboard">
        <Redirect to="/add-user" />
      </Route>

      <Route path="/add-user" render={() => <AddUser />} />
      <Route path="/user-request" render={() => <UserRequest />} />
      <Route path="/add-admin" render={() => <MakeAdmin />} />
    </Switch>
  );
};

export default AdminRoute;
