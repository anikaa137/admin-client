import React,{useState,useEffect} from 'react';
import RequestedDataTable from '../RequestedDataTable/RequestedDataTable';

const UserRequest = () => {
    const [requests, setRequests] = useState([]);
    console.log(requests)
    useEffect(() => {
        fetch("http://localhost:8000/allRequest")
            .then((res) => res.json())
            .then((data) => setRequests(data));
    }, []);
   
   
    return (
        <div>
              <h5 className=" ">All Requested Users </h5>
                <RequestedDataTable requests={requests} setRequests={setRequests}/>
        </div>
    );
};

export default UserRequest;