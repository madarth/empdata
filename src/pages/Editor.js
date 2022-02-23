import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from 'react-router-dom';

 
export default function Create() {
 const [form, setForm] = useState({
   name: "",
   editor: "",
//    level: "",
 });
 const navigate = useNavigate();
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 // This function will handle the submission.
 async function onSubmit(e) {
   e.preventDefault();
 
   // When a post request is sent to the create url, we'll add a new record to the database.
   const newPerson = { ...form };
 
   await fetch("http://localhost:5000/record/add", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(newPerson),
   })
   .catch(error => {
     window.alert(error);
     return;
   });
 
   setForm({ name: "", editor: ""});
   navigate("/");
 }
 
 // This following section will display the form that takes the input from the user.
 return (
   
   <div className="container">
     <h3>React Editor</h3>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="name">File Name</label>
         <input
           type="text"
           className="form-control"
           id="name"
           value={form.name}
           onChange={(e) => updateForm({ name: e.target.value })}
         />
       </div><br/>
       
       <div className="form-group">
         {/* <label htmlFor="editor">File Name</label> */}
         <textarea
           type="text"
           className="form-control"
           id="basic-conf"
          //  value={form.editor}
           onChange={(e) => updateForm({ editor: e.target.value })}
         >Welcome to React Template editor.</textarea>
       </div> 
       <br/>

       {/* <textarea id="editor" type="text" onChange={(e) => updateForm({ editor: e.target.value })}>  </textarea> */}
       
       <div class="row rowbtn">
       {/* <div className="form-group">
         <input
           type="submit"
           value="File save"
           className="btn btn-primary"
         />
       </div> */}
                            <div class="col-sm-6">
                            <button
                type="submit"
                className="btn btn-primary"
                //onMouseDown={() => this.setState({ submitCalled: true })}
              >
                Save Template
              </button>
                            </div>
                            <div class="col-sm-6 forgetpassword">
                                <Link to="/dashboard" className="btn btn-primary">Back</Link>
                            </div>
                        </div>
     </form>
   </div>
 );
}