const express = require ('express');
// const mysql = require ('mysql');
const app = express();
const cors = require ('cors');
const path = require ('path');
const connection = require("./connection.js");
const orm = require('./orm.js');
const fileUpload = require('express-fileupload');
//const fs = require('fs'); currently using MV instead

// CORS whitelist, not Currently used but may impletment in future
// const whitelist = ['http://localhost:3000', 'http://localhost:3001']
// const corsOptions = {
//     origin: function (origin, callback) {
//         if (whitelist.indexOf(origin) !== -1) {
//           callback(null, true)
//         } else {
//           callback(new Error('Not allowed by CORS'))
//         }
//       }
// }

//This variable needs to be changed when deployed
let ip = 'localhost'

//build PORT is 3001, prod is set in file 
const PORT = process.env.PORT || 3001;

//CORS options, commented out unused whitelist/blacklist options
// app.use(cors(corsOptions));
app.use(cors());
app.set('trust proxy', true);
//file upload options for creating buckets 
app.use(fileUpload ({createParentPath: true}) )

//Body Parse to build API
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//static server for uploads
app.use(express.static('uploads'))
//static server for user "buckets"
app.use(express.static('users'))





//Start Server 
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });

//Home page
app.get("/", cors(), function(req, res) {
    res.json("Welcome to the API/Post Routes")
});

//Main GET route
app.get("/api", cors(), function(req, res) {
    orm.selectTen(function(data){
    res.json(data)
    })
});

//Main Post route
app.post("/api/post", cors(), function(req, res) {
    console.log(req.files)
    let upload = (req.files.myFile)
    upload.mv(`./uploads/${upload.name}`)
    res.send("Post Recieved")
    //seperating out post routes here so that I can get API data while the upload data is sent at the same time
    app.post("/api/data",cors(), function (req,res){
        console.log(req.body)
        if(req.body.name === ''){
            //if no name it becomes anon
              req.body.name = 'anon'
              }
         orm.insertOne(`http://${ip}:3001/${req.body.address}`,req.body.name)
         //creates a sepearate folder based on the uploaders name
         upload.mv(`./users/${req.body.name}/${upload.name}`)
        res.send("Data Logged")
    });
});

//These Routes are not currently used
//Main Update route
app.put("/api/update", function(req, res) {
    console.log(req.body)
    res.send("Update Recieved")
});
//Main Delete route
app.delete("/api/delete", function(req, res) {
    console.log(req.body)
    res.send(`delete request at ${req.params}`)
});