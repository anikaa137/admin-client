import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { UserContext } from "../../../App";

const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  console.log(loggedInUser);

  return (
    <div className="header">
      <nav class="navbar navbar-expand-lg navbar-light ">
        <div class="container-fluid">
          <Link
            to="/home"
            class="navbar-brand justify-content-center"
            style={{ color: "#ff8000", textDecoration: "none" }}
          >
            <h3>Vroom Riders</h3>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div class="navbar-nav ">
              <Link to="/home" class="nav-link active">
                <h4>Home</h4>
              </Link>

              <Link to="/destination" class="nav-link active">
                <h4>About</h4>
              </Link>

              <Link to="/blog" class="nav-link active">
                <h4> Blog</h4>
              </Link>
              <Link to="/contact" class="nav-link active">
                <h4>Contact</h4>
              </Link>
              {loggedInUser.rule === "admin" && (
                <Link to="/dashboard" class="nav-link active">
                  <h4>Dashboard</h4>
                </Link>
              )}

              {loggedInUser.user?.email ? (
                <h4 class="nav-link active text-capitalize">
                  {loggedInUser.user?.name}
                </h4>
              ) : (
                <>
                  <Link to="/login" class="nav-link active">
                    <h4>Login</h4>
                  </Link>
                  <Link to="/register" class="nav-link active">
                    <h4>Register</h4>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
