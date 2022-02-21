const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;


// This section will help you get a list of all the records.
recordRoutes.route("/record").get(function (req, res) {
  let db_connect = dbo.getDb("employees");
  db_connect
    .collection("records")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you get a single record by id
recordRoutes.route("/record/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect
      .collection("records")
      .findOne(myquery, function (err, result) {
        if (err) throw err;
        res.json(result);
      });
});

// This section will help you create a new record.
recordRoutes.route("/record/add").post(function (req, response) {
  // console.log('abcde');
    console.log('success');
  let db_connect = dbo.getDb();
  let myobj = {
    Emp_Name: req.body.name.value,
    Emp_Email: req.body.email.value,
    Emp_Id: req.body.yourid.value,
    Emp_Role: req.body.yourrole.value,
    Emp_Date_of_joining: req.body.doj.value,
    Emp_Date_of_Brith: req.body.dob.value,
    Emp_Password: req.body.password.value,
  };
  console.log(myobj);
  db_connect.collection("records").insertOne(myobj, function (err, res) {
    if (err) throw err;
    console.log("1 document instered");
    response.json(res);
  });
  // window.location.reload();
});

// This section will help you update a recor0l,,d by id.
recordRoutes.route("/update/:id").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  console.log('update');
  let newvalues = {
    $set: {
    Emp_Name: req.body.name,
    Emp_Email: req.body.email,
    Emp_Id: req.body.yourid,
    Emp_Role: req.body.yourrole,
    Emp_Date_of_joining: req.body.doj,
    Emp_Date_of_Brith: req.body.dob,
    Emp_Password: req.body.password,
    },
  };
  console.log(newvalues);
  db_connect
    .collection("records")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      response.json(res);
    });
});

// This section will help you delete a record
recordRoutes.route("/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect.collection("records").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.status(obj);
  });
  window.location.reload();
});

module.exports = recordRoutes;