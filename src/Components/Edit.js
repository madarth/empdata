import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
 
export default function Edit() {
 const [form, setForm] = useState({
  Emp_Name: "",
  Emp_Email: "",
  Emp_Id: "",
  Emp_Role: "",
  Emp_Date_of_joining: "",
  Emp_Date_of_Brith: "",
  Emp_Password: "",
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
       navigate("/");
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
    Emp_Name: form.Emp_Name,
    Emp_Email: form.Emp_Email,
    Emp_Id: form.Emp_Id,
    Emp_Role: form.Emp_Role,
    Emp_Date_of_joining: form.Emp_Date_of_joining,
    Emp_Date_of_Brith: form.Emp_Date_of_Brith,
    Emp_Password: form.Emp_Password
   };
 
   // This will send a post request to update the data in the database.
   await fetch(`http://localhost:5000/update/${params.id}`, {
     method: "POST",
     body: JSON.stringify(editedPerson),
     headers: {
       'Content-Type': 'application/json'
     },
   });
 
   navigate("/");
 }
 
 // This following section will display the form that takes input from the user to update the data.
 return (
   <div>
     <h3>Update Record</h3>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="name">Name: </label>
         <input
           type="text"
           className="form-control"
           id="name"
           value={form.Emp_Name}
           onChange={(e) => updateForm({ person_name: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="position">Position: </label>
         <input
           type="email"
           className="form-control"
           id="position"
           value={form.Emp_Email}
           onChange={(e) => updateForm({ person_position: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="name">Name: </label>
         <input
           type="number"
           className="form-control"
           id="name"
           value={form.Emp_Id}
           onChange={(e) => updateForm({ person_name: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="name">Name: </label>
         <input
           type="text"
           className="form-control"
           id="name"
           value={form.Emp_Role}
           onChange={(e) => updateForm({ person_name: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="name">Name: </label>
         <input
           type="date"
           className="form-control"
           id="name"
           value={form.Emp_Date_of_joining}
           onChange={(e) => updateForm({ person_name: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="name">Name: </label>
         <input
           type="date"
           className="form-control"
           id="name"
           value={form.Emp_Date_of_Brith}
           onChange={(e) => updateForm({ person_name: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="name">Name: </label>
         <input
           type="password"
           className="form-control"
           id="name"
           value={form.Emp_Password}
           onChange={(e) => updateForm({ person_name: e.target.value })}
         />
       </div>
       <br />
 
       <div className="form-group">
         <input
           type="submit"
           value="Update Record"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}