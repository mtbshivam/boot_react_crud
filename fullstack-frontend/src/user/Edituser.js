import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function Edituser(props) {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  let navigate=useNavigate();

  const {id} =useParams();            //use path parameter match from route

  const { name, username, email } = user; //distructing items from object=user
//   console.log(username);

  const onInputchange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
   
  };

  useEffect(()=>{
    loadUser();
  },[])
 
  const onSubmit = async() =>{
    
    await axios.put(`http://localhost:8080/user/${id}`,user);
    navigate("/");
  }

 const  loadUser = async()=>{
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
 }
  

  
  return (
    
      
      <div className="row ">
      
        <div className="col-md-4 offset-md-4 mb-3 mt-4 border rounded shadow">
        <h1>Edit User</h1> 
          <div className="col mb-3 ">
            <label
              htmlFor="formGroupExampleInput"
              className="form-label d-flex justify-content-start"
            >
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              name="name"
              placeholder=""
              value={name}
              onChange={(e) => onInputchange(e)}
            />
          </div>
          <div className="col mb-3">
            <label
              htmlFor="formGroupExampleInput2"
              className="form-label d-flex justify-content-start"
            >
              Usernaem
            </label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder=""
              name="username"
              value={username}
              onChange={(e) => onInputchange(e)}
            />
          </div>
          <div className="col mb-3">
            <label
              htmlFor="formGroupExampleInput2"
              className="form-label d-flex justify-content-start"
            >
              Email
            </label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder=""
              name="email"
              value={email}
              onChange={(e) => onInputchange(e)}
            />
          </div>
          <div className="d-flex justify-content-between mb-3">
            <button type="button" className="btn btn-success" onClick={()=>{onSubmit()}}>
              Save
            </button>
            <Link type="button" className="btn btn-danger" to={"/"} >
              Cancel
            </Link>
          </div>
        </div>
      </div>
    
  );
}
