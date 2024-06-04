import React, { useState ,useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function Readuser() {
  const { id } = useParams();

  const [User, setUser] = useState({
    name:"",
    username:"",
    email:""
  });

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  
  };

  return (
    <div className="row ">
      <div className="col-md-4 offset-md-4 mb-3 mt-4 border rounded shadow">
        <h1>View User</h1>
        <div className="col mb-3 mt-3 border rounded shadow">
          <ul className="mt-2">
            <li className="d-flex justify-content-start ">
              <b>Name : </b>
              {User.name}
            </li>
            <li className="d-flex justify-content-start">
              <b>Username : </b>
              {User.username}
            </li>
            <li className="d-flex justify-content-start">
              <b>Email : </b>
              {User.email}
            </li>
            
          </ul>
        </div>
        <Link className="btn mx-2 btn-outline-info mb-2" to={"/"}>Back to Home</Link>
      </div>
    </div>
  );
}
