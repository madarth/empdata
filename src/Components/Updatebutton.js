import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

 
export default function Edit() {
 const [form, setForm] = useState({
  Emp_Name: "",
  Emp_Email: "",
  Emp_Id: "",
  Emp_Role:"",
  Emp_Date_of_joining:"",
  Emp_Date_of_Brith:"",
  Emp_Password:"",
   records: [],
 });
 const params = useParams();
 const navigate = useNavigate();
 
 useEffect(() => {
   async function fetchData() {
    const id = params.id.toString();
    // const name = params.person_name();
    const response = await fetch(`http://localhost:5000/record/${params.id.toString()}`);
    // console.log(name);
 
     if (!response.ok) {
       const message = `An error has occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const record = await response.json();
     if (!record) {
       window.alert(`Record with id ${id} not found`);
       navigate("/dashboard");
       return;
     }
 
     setForm(record);
   }
 
   fetchData();
 
   return;
 }, [params.id, navigate]);
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 async function onSubmit(e) {
   e.preventDefault();
   const editedPerson = {
     name: form.Emp_Name,
     email: form.Emp_Email,
     yourid: form.Emp_Id,
     yourrole: form.Emp_Role,
     doj:form.Emp_Date_of_joining,
     dob:form.Emp_Date_of_Brith,
     password:form.Emp_Password,
   };
 
   // This will send a post request to update the data in the database.
   await fetch(`http://localhost:5000/update/${params.id}`, {
     method: "POST",
     body: JSON.stringify(editedPerson),
     headers: {
       'Content-Type': 'application/json'
     },
   });
 
   navigate("/dashboard");
 }
 
 // This following section will display the form that takes input from the user to update the data.
 return (
   <div>
     {/* <h3>Update Record</h3> */}
     <div className="container">
        <div className="card shadow">
          <div className="card-header">
            <h4 className="text-center">Update Changes</h4>
          </div>
          <div className="card-body">
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="name">Name: </label>
         <input
           type="text"
           className="form-control"
           id="name"
           value={form.Emp_Name}
           onChange={(e) => updateForm({ Emp_Name: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="name">Email </label>
         <input
           type="email"
           className="form-control"
           id="name"
           value={form.Emp_Email}
           onChange={(e) => updateForm({ Emp_Email: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="name">Your-Id </label>
         <input
           type="number"
           className="form-control"
           id="name"
           value={form.Emp_Id}
           onChange={(e) => updateForm({ Emp_Id: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="name">Your-Role </label>
         <input
           type="text"
           className="form-control"
           id="name"
           value={form.Emp_Role}
           onChange={(e) => updateForm({ Emp_Role: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="name">Date of Joining </label>
         <input
           type="date"
           className="form-control"
           id="name"
           value={form.Emp_Date_of_joining}
           onChange={(e) => updateForm({ Emp_Date_of_joining: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="name">Date of Birth </label>
         <input
           type="date"
           className="form-control"
           id="name"
           value={form.Emp_Date_of_Brith}
           onChange={(e) => updateForm({ Emp_Date_of_Brith: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="name">Password </label>
         <input
           type="password"
           className="form-control"
           id="name"
           value={form.Emp_Password}
           onChange={(e) => updateForm({ Emp_Password: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="name">Confirm Password </label>
         <input
           type="password"
           className="form-control"
           id="name"
           value={form.confirmpassword}
           onChange={(e) => updateForm({ confirmpassword: e.target.value })}
         />
       </div>


       <br /> 
 
       {/* <div className="form-group">
         <input
           type="submit"
           value="Update Record"
           className="btn btn-primary"
         />
       </div> */}
       <div class="row rowbtn">
                            <div class="col-sm-6">
                            <input
           type="submit"
           value="Update Record"
           className="btn btn-primary"
         />
                            </div>
                            <div class="col-sm-6 forgetpassword">
                                <Link className="btn btn-primary" to="/dashboard">Back</Link>
                            </div>
                        </div>
     </form>
     </div> 
   </div>
   </div>
   </div>
 );
}