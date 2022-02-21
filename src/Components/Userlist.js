import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
 
const Record = (props) => (
 <tr>
   <td>{props.record.Emp_Name}</td>
   <td>{props.record.Emp_Email}</td>
   <td>{props.record.Emp_Id}</td>
   <td>{props.record.Emp_Role}</td>
   <td>{props.record.Emp_Date_of_joining}</td>
   <td>{props.record.Emp_Date_of_Brith}</td>
   {/* <td>{props.record.Emp_Password}</td> */}
   <td>
   <Link className="btn btn-success" to={`/updatebutton/${props.record._id}`}>Edit</Link> &nbsp;| &nbsp;
     {/* <Link className="btn btn-success" to={`/edit/${props.record._id}`}>Edit</Link> &nbsp;| &nbsp; */}
     <button className="btn btn-danger"
       onClick={() => {
         props.deleteRecord(props.record._id);
         //window.location.reload();
       }}
     >
       Delete
     </button>
   </td>
 </tr>
);
 
export default function RecordList() {
  
 const [records, setRecords] = useState([]);
 
 // This method fetches the records from the database.
 useEffect(() => {
   async function getRecords() {
     const response = await fetch(`http://localhost:5000/record/`);
 
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const records = await response.json();
     setRecords(records);
   }
 
   getRecords();
 
   return;
 }, [records.length]);
 
 // This method will delete a record
 async function deleteRecord(id) {
   await fetch(`http://localhost:5000/${id}`, {
     method: "DELETE"
   });
 
   const newRecords = records.filter((el) => el._id !== id);
   setRecords(newRecords);
 }
 
 // This method will map out the records on the table
 function recordList() {
  
   return records.map((record) => {
    console.log(record);
     return (
       <Record
         record={record}
         deleteRecord={() => deleteRecord(record._id)}
         key={record._id}
       />
     );
   });
 }
 
 // This following section will display the table with the records of individuals.
 return (
   <div>
     <h3>Record List</h3>
     <table className="table table-striped" style={{ marginTop: 20 }}>
       <thead>
         <tr>
		   {/* <th>Id</th> */}
           <th>Name</th>
           <th>Email-Id</th>
           <th>Emp_Id</th>
           <th>Emp_Role</th>
		   <th>Date_of_joining</th>
		   <th>Date_of_Brith</th>
		   {/* <th>Password</th> */}
         </tr>
       </thead>
       <tbody>{recordList()}</tbody>
     </table>
   </div>
 );
}