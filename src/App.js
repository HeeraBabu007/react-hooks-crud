import React from "react";
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AddDepartment from "./components/department-components/AddDepartment";
import Department from "./components/department-components/Department";
import DepartmentList from "./components/department-components/DepartmentList";

//employee
import AddEmployee from "./components/employee-components/AddEmployee";
import Employee from "./components/employee-components/Employee";
import EmployeeList from "./components/employee-components/EmployeeList";
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

        <div className="navbar-nav mr-auto">
        <li className="nav-item">
            <Link to={"/addEmployee"} className="nav-link">
              Add
            </Link>
          </li>

        <li className="nav-item">
            <Link to={"/employeeList"} className="nav-link">
              Employee List
            </Link>
          </li>

          <li className="nav-item">
            <Link to={"/employee"} className="nav-link">
              Employee
            </Link>
          </li>
        </div>
      </nav>

      <Switch>
        <Route exact path="/add" component={AddDepartment} />
        <Route exact path="/department" component={Department} />
        <Route exact path="/departmentList" component={DepartmentList}/>

        <Route exact path="/addEmployee" component={AddEmployee} />
        <Route exact path="/employee" component={Employee}/>
        <Route exact path="/employeeList" component={EmployeeList}/>
      </Switch>
    </BrowserRouter>
  );
}
export default App;