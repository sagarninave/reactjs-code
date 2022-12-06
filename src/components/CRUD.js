import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const axios = require('axios');

function CRUD() {

  const myStyle = {
    fontSize: "20px",
    marginTop: "10px",
    marginLeft: "30px",
  };

  const [value, setValue] = useState({
    first_name: "",
    last_name: "",
    email: "",
    mobile: "",
    dob: "",
    gender: ""
  });

  const [editUserValue, setEditUserValue] = useState({
    first_name: "",
    last_name: "",
    email: "",
    mobile: "",
    dob: "",
    gender: ""
  });

  const [allUsers, set_allUsers] = useState();
  const [isShowUser, set_isShowUser] = useState(true);
  const [isCreateUser, set_isCreateUser] = useState(false);
  const [isEditUser, set_isEditUser] = useState(false);
  const [editUserId, set_editUserId] = useState();
  const [searchResult, set_searchResult] = useState([]);

  useEffect(() => {
    getUsers();
  }, [])

  const getUsers = () => {
    try {
      axios({
        method: 'get',
        url: 'http://localhost:3030/users',
      }).then(response => {
        set_allUsers(response.data);
      })
    }
    catch (e) {
      console.log(e);
    }
  }

  const handleInput = (e) => {
    if (e.target.name === "first_name") {
      setValue({ ...value, first_name: e.target.value });
    }
    else if (e.target.name === "last_name") {
      setValue({ ...value, last_name: e.target.value });
    }
    else if (e.target.name === "email") {
      setValue({ ...value, email: e.target.value });
    }
    else if (e.target.name === "mobile") {
      setValue({ ...value, mobile: e.target.value });
    }
    else if (e.target.name === "gender") {
      setValue({ ...value, gender: e.target.value });
    }
    else if (e.target.name === "dob") {
      setValue({ ...value, dob: e.target.value });
    }
    else { }
  }

  function submitForm(e) {
    e.preventDefault();
    try {
      axios({
        method: 'post',
        url: 'http://localhost:3030/users',
        data: value,
      }).then(response => {
        set_isCreateUser(false);
        set_isShowUser(true);
        setValue({
          first_name: "",
          last_name: "",
          email: "",
          mobile: "",
          dob: "",
          gender: ""
        });
        getUsers();
      })
    }
    catch (e) {
      console.log(e);
    }
  }

  const createUserView = () => {
    set_isShowUser(false);
    set_isCreateUser(true);
    set_isEditUser(false);
  }

  const showUserView = () => {
    set_isShowUser(true);
    set_isCreateUser(false);
    set_isEditUser(false);
  }

  const editUserView = (userID) => {
    set_isShowUser(false);
    set_isCreateUser(false);
    set_isEditUser(true);
    try {
      axios({
        method: 'get',
        url: 'http://localhost:3030/users/' + userID,
      }).then(response => {
        let user = response.data;
        set_editUserId(user.id);
        setEditUserValue({
          first_name: user.first_name,
          last_name: user.last_name,
          email: user.email,
          mobile: user.mobile,
          dob: user.dob,
          gender: user.gender
        });
      })
    }
    catch (e) {
      console.log(e);
    }
  }

  const handleEditInput = (e) => {
    if (e.target.name === "first_name") {
      setEditUserValue({ ...editUserValue, first_name: e.target.value });
    }
    else if (e.target.name === "last_name") {
      setEditUserValue({ ...editUserValue, last_name: e.target.value });
    }
    else if (e.target.name === "email") {
      setEditUserValue({ ...editUserValue, email: e.target.value });
    }
    else if (e.target.name === "mobile") {
      setEditUserValue({ ...editUserValue, mobile: e.target.value });
    }
    else if (e.target.name === "gender") {
      setEditUserValue({ ...editUserValue, gender: e.target.value });
    }
    else if (e.target.name === "dob") {
      setEditUserValue({ ...editUserValue, dob: e.target.value });
    }
    else { }
  }

  const userEditForm = (e) => {
    e.preventDefault();
    try {
      axios({
        method: 'put',
        url: 'http://localhost:3030/users/' + editUserId,
        data: editUserValue,
      }).then(response => {
        getUsers();
        set_isEditUser(false);
        set_isShowUser(true);
      })
    }
    catch (e) {
      console.log(e);
    }

  }

  const deleteUser = (userID) => {
    try {
      axios({
        method: 'delete',
        url: 'http://localhost:3030/users/' + userID,
      }).then(response => {
        getUsers();
      })
    }
    catch (e) {
      console.log(e);
    }
  }

  const onSearch = (key) => {
    try {
      axios({
        method: 'get',
        url: 'http://localhost:3030/users/?q=' + key,
      }).then(response => {
        console.log(response.data)
        set_searchResult(response.data);
      })
    }
    catch (e) {
      console.log(e);
    }
    console.log(key)
  }
  return (
    <div className="container-fluid" style={{ margin: "0px", padding: "0px" }}>
      <strong className="heading"> CRUD Operation </strong>
      <div className="row">
        <div className="col-md-4" style={{ margin: "0px", padding: '0px', textAlign: "left", paddingLeft: "15px" }}>
          <button className="btn btn-primary mr-2 mt-2" onClick={showUserView}> Show Users</button>
          <button className="btn btn-primary ml-2 mt-2" onClick={createUserView}> Create User</button>
        </div>

        <div className="col-md-4" style={{ margin: "0px", padding: '0px' }}></div>

        <div className="col-md-4">
          <input type="text" name="search" placeholder="Search" style={{ float: "right" }} className="form-control mt-2"
            onChange={(e) => { onSearch(e.target.value) }}></input>
          {
            searchResult.length > 0 ?
              <ul style={{ border: "1px solid #b7b7b7", marginLeft: "0px", width: "100%", height: "200px", marginTop: "10px", listStyleType: "none" }}>
                {searchResult &&
                  Object.values(searchResult).map((item, index) => {
                    return (
                      <li key={index} style={{ marginTop: "5px", textAlign: "left" }}> {item.first_name}</li>
                    )
                  })
                }
              </ul> : null
          }

        </div>
      </div>

      {isShowUser &&
        <table class="table table-hover table-dark" style={{ marginTop: "20px" }}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Mobile</th>
              <th scope="col">DoB</th>
              <th scope="col">Gender</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              allUsers &&
              Object.values(allUsers).map((user, index) => {
                return (
                  <tr>
                    <td>{user.id}</td>
                    <td>{user.first_name}</td>
                    <td>{user.last_name}</td>
                    <td>{user.email}</td>
                    <td>{user.mobile}</td>
                    <td>{user.dob}</td>
                    <td>{user.gender}</td>
                    <td>
                      <FontAwesomeIcon
                        title="Edit"
                        icon={faEdit}
                        data-placement="top"
                        data-toggle="tooltip"
                        onClick={() => editUserView(user.id)}
                        style={{ ...myStyle, ...{ color: "green", marginRight: "10px" } }}
                      />
                      <FontAwesomeIcon
                        title="Delete"
                        icon={faTrash}
                        data-placement="top"
                        data-toggle="tooltip"
                        onClick={() => deleteUser(user.id)}
                        style={{ ...myStyle, ...{ color: "red" } }}
                      />
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      }
      {
        isCreateUser &&
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <form
              onSubmit={submitForm}
              style={{ border: "1px solid gray", marginTop: "20px", padding: "20px", borderRadius: "5px" }}
            >
              <div className="form-group">
                <input type="text" name="first_name" placeholder="First Name" onChange={handleInput} className="form-control"></input>
              </div>
              <div className="form-group">
                <input type="text" name="last_name" placeholder="Last Name" onChange={handleInput} className="form-control"></input>
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Email" onChange={handleInput} className="form-control"></input>
              </div>
              <div className="form-group">
                <input type="text" name="mobile" placeholder="Mobile" onChange={handleInput} className="form-control"></input>
              </div>
              <div className="form-group">
                <input type="date" name="dob" placeholder="dob" onChange={handleInput} className="form-control"></input>
              </div>
              <div className="form-group">
                <select name="gender" className="form-control" onChange={handleInput}>
                  <option> Gender </option>
                  <option value="male"> Male </option>
                  <option value="female"> Female </option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary form-control">Submit</button>
            </form>
          </div>
        </div>
      }

      {
        isEditUser &&
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <form
              onSubmit={userEditForm}
              style={{ border: "1px solid gray", marginTop: "20px", padding: "20px", borderRadius: "5px" }}
            >
              <div className="form-group">
                <input type="text" name="first_name" placeholder="First Name" className="form-control"
                  value={editUserValue.first_name} onChange={handleEditInput}></input>
              </div>
              <div className="form-group">
                <input type="text" name="last_name" placeholder="Last Name" className="form-control"
                  value={editUserValue.last_name} onChange={handleEditInput}></input>
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Email" className="form-control"
                  value={editUserValue.email} onChange={handleEditInput}></input>
              </div>
              <div className="form-group">
                <input type="text" name="mobile" placeholder="Mobile" className="form-control"
                  value={editUserValue.mobile} onChange={handleEditInput}></input>
              </div>
              <div className="form-group">
                <input type="date" name="dob" placeholder="dob" className="form-control"
                  value={editUserValue.dob} onChange={handleEditInput}></input>
              </div>
              <div className="form-group">
                <select name="gender" className="form-control"
                  value={editUserValue.gender} onChange={handleEditInput}>
                  <option> Gender </option>
                  <option value="male"> Male </option>
                  <option value="female"> Female </option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary form-control">Submit</button>
            </form>
          </div>
        </div>
      }
    </div>
  )
}
export default CRUD;