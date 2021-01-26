import React, { useState, useEffect } from "react";
import employeeService from "../../services/employeeService";

const Employee = props => {
  const initialEmployeeState = { "id": 1, "name": "HeeraBabu", "age": 50, "address": "Bangalore", "phone": [] };

  const [currentEmployee, setCurrentEmployee] = useState(initialEmployeeState);
  const [message, setMessage] = useState("");

  const getEmployee = id => {
    employeeService.get(id)
      .then(response => {
        setCurrentEmployee(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getEmployee(props.match.params.id);
  }, [props.match.params.id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentEmployee({ ...currentEmployee, [name]: value });
  };

  const updateEmployee = () => {
    employeeService.update(currentEmployee.id, currentEmployee)
      .then(response => {
        console.log(response.data);
        setMessage("The Employee was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deleteEmployee = () => {
    employeeService.remove(currentEmployee.id)
      .then(response => {
        console.log(response.data);
        props.history.push("/employees");
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div>
      {currentEmployee ? (
        <div className="edit-form">
          <h4>Employee</h4>
          <form>
            <div className="form-group">
              <label htmlFor="id">Id</label>
              <input
                type="text"
                className="form-control"
                id="id"
                name="id"
                value={currentEmployee.id}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={currentEmployee.name}
                onChange={handleInputChange}
              />
            </div>
          </form>
          <button className="badge badge-danger mr-2" onClick={deleteEmployee}>
            Delete
          </button>

          <button
            type="submit"
            className="badge badge-success"
            onClick={updateEmployee}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
          <div>
            <br />
            <p>Please click...</p>
          </div>
        )}
    </div>
  );
};

export default Employee;