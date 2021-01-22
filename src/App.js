import React from "react";
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AddDepartment from "./components/AddDepartment";
import Department from "./components/Department";
import DepartmentList from "./components/DepartmentList";

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/departmentList" className="navbar-brand">
          GE CRUD Service
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/department"} className="nav-link">
              Department
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Add
            </Link>
          </li>
        </div>
      </nav>

      <Switch>
        <Route exact path="/add" component={AddDepartment} />
        <Route exact path="/department" component={Department} />
        <Route exact path="/departmentList" component={DepartmentList}/>
      </Switch>
    </BrowserRouter>
  );
}
export default App;