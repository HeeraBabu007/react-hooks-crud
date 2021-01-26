import React, { useState } from "react";
import departmentService from "../../services/departmentService";

const AddDepartment = () => {
    const initialDepartmentState = {
        "id": 1,
        "name": "Engineering",
        "employees": [{
            "id": 1,
            "name": "HeeraBabu",
            "age": 50,
            "address": "Bangalore"
        }]
    }

    const [department, setDepartment] = useState(initialDepartmentState);
    const [submitted, setSubmitted] = useState(false);
  
    const handleInputChange = event => {
        const { name, value } = event.target;
        setDepartment({ ...department, [name]: value });
      };
    
      const saveDepartment = () => {
        var data = {
          id: department.id,
          name: department.name,          
        };
    
        departmentService.create(data)
          .then(response => {
            setDepartment({
              id: response.data.id,
              name: response.data.name
            });
            setSubmitted(true);
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      };

      const newDepartment = () => {
        setDepartment(initialDepartmentState);
        setSubmitted(false);
      };
    
      return (
        <div className="submit-form">
          {submitted ? (
            <div>
              <h4>You submitted successfully!</h4>
              <button className="btn btn-success" onClick={newDepartment}>
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
                  value={department.id}
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
                  value={department.name}
                  onChange={handleInputChange}
                  name="name"
                />
              </div>    
    
              <button onClick={saveDepartment} className="btn btn-success">
                Submit
              </button>
            </div>
          )}
        </div>
      );
    };
    
export default AddDepartment;