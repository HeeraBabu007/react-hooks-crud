import React, { useState, useEffect } from "react";
import employeeService from "../../services/employeeService";

const AddEmployee = () => {
  const initialEmployeeState = { "id": 1, "name": "HeeraBabu", "age": 50, "address": "Bangalore", "phone": [] };
  const [employee, setEmployee] = useState(initialEmployeeState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setEmployee({ ...employee, [name]: value });
  };

  const saveEmployee = () => {
    var data = {
      id: employee.id,
      name: employee.name,
      age:employee.age,
      address:employee.address

    };

    employeeService.create(data)
      .then(response => {
        setEmployee({
          id: response.data.id,
          name: response.data.name,
          age:response.data.age,
          address:response.data.address
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newEmployee = () => {
    setEmployee(initialEmployeeState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newEmployee}>
            Add
              </button>
        </div>
      ) : (
          <div>
            <div className="form-group">
              <label htmlFor="id">Id</label>
              <input
                type="text"
                className="form-control"
                id="id"
                required
                value={employee.id}
                onChange={handleInputChange}
                name="id"
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                required
                value={employee.name}
                onChange={handleInputChange}
                name="name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="age">Age</label>
              <input
                type="text"
                className="form-control"
                id="age"
                required
                value={employee.age}
                onChange={handleInputChange}
                name="age"
              />
            </div>

            <div className="form-group">
              <label htmlFor="age">Address</label>
              <input
                type="text"
                className="form-control"
                id="address"
                required
                value={employee.address}
                onChange={handleInputChange}
                name="address"
              />
            </div>

            <button onClick={saveEmployee} className="btn btn-success">
              Submit
              </button>
          </div>
        )}
    </div>
  );
};

export default AddEmployee;