import React from "react";

const RequestedDataTable = ({ requests,setRequests}) => {

    const handleStatueChange =(id,status) =>{
        fetch("http://localhost:8000/updateUserStatus",{
            method:'PUT',
            headers:{ "Content-Type":'application/json'},
            body: JSON.stringify({id,status})
        })
        .then((res) => res.json())
        .then((res)=>{
            if(res){
             fetch("http://localhost:8000/allRequest")
            .then((res) => res.json())
            .then((data) => setRequests(data));
            }
        })
}
  return (
    <table className="table table-borderless">
      <thead>
        <tr>
          <th className="text-secondary text-left" scope="col">
            Sr No
          </th>
          <th className="text-secondary" scope="col">
            Name
          </th>
          <th className="text-secondary" scope="col">
            Contact
          </th>
          <th className="text-secondary" scope="col">
            Email
          </th>
          <th className="text-secondary" scope="col">
            Pass
          </th>
          <th className="text-secondary" scope="col">
            Number
          </th>
          <th className="text-secondary" scope="col">
            Status
          </th>
        </tr>
      </thead>
      <tbody>
        {requests.map((request, index) => (
          <tr>
            <td>{index + 1}</td>
            <td>{request.name}</td>
            <td>{request.contact}</td>
            <td>{request.email}</td>
            <td>{request.pass}</td>
            <td>{request.number}</td>
            {/* <td>{request.status}</td> */}
            <td>
              <div class="dropdown">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                 {request.status}
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li  onClick = {() => {handleStatueChange(request._id,"active")}} class="dropdown-item">Active</li>
                  <li onClick = {( ) => {handleStatueChange(request._id,"inActive")}} class="dropdown-item">In Active</li>
                </ul>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RequestedDataTable;
