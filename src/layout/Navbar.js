import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      {/* <nav className="navbar" style={{backgroundColor:"#e3f2fd"}}> */}
      {/* <nav className="navbar navbar-expand-lg bg-body-tertiary"> */}
      <nav
        className="navbar bg-primary-subtle  border-bottom navbar-expand-lg  border-body"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <Link className="navbar-brand text-primary-emphasis" to={"/"}>
            User Management System
          </Link>
         
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
   
              
            </ul>
            <form className="d-flex" role="search">
  
              
              <Link className="btn btn-outline-primary text-primary-emphasis" to="/adduser" type="submit">
                Creat User
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
