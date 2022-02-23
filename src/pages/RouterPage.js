import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Emailverify from './Emailverify';
import Dashboard from './Dashboard';
import Userlist from "../Components/Userlist";
import Registerform from "../Components/Registerform";
import Projectproposal from "../Components/Projectproposal"
import Stocks from "../Components/Stocks";
import Changepassword from "./Changepassword";
// import validates from './validates';
//import Updatebutton from "../Components/Updatebutton"
import Updatebutton from '../Components/Updatebutton';
import Editor from './Editor';
// import Edit from '../Components/Edit';
// import Server from "../Components/Server";
// import App from '../App';


export default function RouterPage() {
    return(
        <div>
            <BrowserRouter>
      <Routes>
        {/* <Router> */}
            {/* <Header /> */}
                {/* <Switch> */}
                <Route path="/" element={<Login />} />
                <Route path="/emailverify" element={<Emailverify />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/userlist" element={<Userlist />} />
                <Route path="/registerform" element={<Registerform />} />
                <Route path="/projectproposal" element={<Projectproposal />} />
                <Route path="/changepassword" element={<Changepassword />} />
                {/* <Route path="/validates" element={<validates />} /> */}
                <Route path="/stocks" element={<Stocks />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/updatebutton/:id" element={<Updatebutton />} />
                {/* <Route path="/" element={< />} /> */}


                {/* <Route path="/" exact component={Login} />
                    <Route path="/emailverify" component={Emailverify} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/userlist" component={Userlist} />
                    <Route path="/registerform" component={Registerform} />
                    <Route path="/projectproposal" component={Projectproposal} />
                    <Route path="/changepassword" component={Changepassword} />
                    <Route path="/validates" component={validates} />
                    <Route path="/stocks" component={Stocks} />
                    <Route path="/updatebutton/:id" component={Updatebutton} /> */}
                    {/* <Route path="/server" component={Server} /> */}
                    {/* <Route path="/edit" component={Edit} /> */}
                {/* </Switch> */}
            {/* <Footer /> */}
            {/* </Router> */}
      </Routes>
      </BrowserRouter>
        </div>
    )
}
