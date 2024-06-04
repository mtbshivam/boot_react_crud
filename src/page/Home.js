import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
  const [Users, setUsers] = useState([]);

  useEffect(() => {
    loadUser();
  },[]);

  const loadUser = async () => {
    const result = await axios.get("http://localhost:8080/users");
    setUsers(result.data);
   
  };

  const delUser =async(id)=>{
     
      await axios.delete(`http://localhost:8080/user/${id}`);
      loadUser();
    }
  

  return (
    <div className="container">
      <table className="table  my-4 table-striped table-bordered table-rounded shadow">
        <thead>
          <tr >
            <th scope="col">S.no</th>
            <th scope="col">Name</th>
            <th scope="col">Usename</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {Users.map((user) => (
            <tr key={user.id}>
              <th scope="row"  >{user.id}</th>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td >
                <Link className="btn mx-2 btn-outline-info" to={`/readuser/${user.id}`}>Read</Link>
                <Link className="btn mx-2 btn-outline-warning" to={`/update/${user.id}`}>Update</Link>
                <button className="btn mx-2 btn-outline-danger" onClick={()=>{delUser(user.id)}}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
