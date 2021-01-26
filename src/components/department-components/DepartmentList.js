import React, { useState, useEffect } from "react";
import departmentService from "../../services/departmentService";
import { Link } from "react-router-dom";

const DepartmentList = () => {
  const [department, setDepartment] = useState([]);
  const [currentDepartment, setCurrentDepartment] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    retrieveDepartment();
  }, []);

  const onChangeSearchName = e => {
    const searchName = e.target.value;
    setSearchName(searchName);
  };

  const retrieveDepartment = () => {
    departmentService.getAll()
      .then(response => {
        setDepartment(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveDepartment();
    setCurrentDepartment(null);
    setCurrentIndex(-1);
  };

  const setActiveDepartment = (department, index) => {
    setCurrentDepartment(department);
    setCurrentIndex(index);
  };

  const removeAllDepartment = () => {
    departmentService.removeAll()
      .then(response => {
        console.log(response.data);
        refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  };

  const findByName = () => {
    departmentService.findByName(searchName)
      .then(response => {
        setCurrentDepartment(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div className="list row">
      <div className="col-md-8">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by Department Name"
            value={searchName}
            onChange={onChangeSearchName}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByName}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <h4>Department List</h4>

        <ul className="list-group">
          {department &&
            department.map((department, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => setActiveDepartment(department, index)}
                key={index}
              >
                {department.name}
              </li>
            ))}
        </ul>

        <button
          className="m-3 btn btn-sm btn-danger"
          onClick={removeAllDepartment}
        >
          Remove All
        </button>
      </div>
      <div className="col-md-6">
        {currentDepartment ? (
          <div>
            <h4>Department</h4>
            <div>
              <label>
                <strong>Name:</strong>
              </label>{" "}
              {currentDepartment.name}
            </div>
            <div>
              <label>
                <strong>ID:</strong>
              </label>{" "}
              {currentDepartment.id}
            </div>

            <Link
              to={"/department/" + currentDepartment.id}
              className="badge badge-warning"
            >
              Edit
            </Link>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DepartmentList;