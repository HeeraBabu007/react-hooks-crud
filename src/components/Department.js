import React, { useState, useEffect } from "react";
import departmentService from "../services/departmentService";

const Department = props => {
    const initialDepartmentState = {
        "id": 1,
        "name": "Engineering",
        "employees": [{
            "id": 1,
            "name": "HeeraBabu",
            "age": 50,
            "address": "Bangalore"
        }]
    };

  const [currentDepartment, setCurrentDepartment] = useState(initialDepartmentState);
  const [message, setMessage] = useState("");

  const getDepartment = id => {
    departmentService.get(id)
      .then(response => {
        setCurrentDepartment(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getDepartment(props.match.params.id);
  }, [props.match.params.id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentDepartment({ ...currentDepartment, [name]: value });
  };

  const updateName = name => {
    var data = {
        id: currentDepartment.id,
        name: currentDepartment.name          
    };

    departmentService.update(currentDepartment.id, data)
      .then(response => {
        setCurrentDepartment({ ...currentDepartment, name: name });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const updateDepartment = () => {
    departmentService.update(currentDepartment.id, currentDepartment)
      .then(response => {
        console.log(response.data);
        setMessage("The department was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deleteDepartment = () => {
    departmentService.remove(currentDepartment.id)
      .then(response => {
        console.log(response.data);
        props.history.push("/department");
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div>
      {currentDepartment ? (
        <div className="edit-form">
          <h4>Department</h4>
          <form>
            <div className="form-group">
              <label htmlFor="id">Id</label>
              <input
                type="text"
                className="form-control"
                id="id"
                name="id"
                value={currentDepartment.id}
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
                value={currentDepartment.name}
                onChange={handleInputChange}
              />
            </div>
          </form>
          <button className="badge badge-danger mr-2" onClick={deleteDepartment}>
            Delete
          </button>

          <button
            type="submit"
            className="badge badge-success"
            onClick={updateDepartment}
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

export default Department;