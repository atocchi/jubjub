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
const PORT = process.env.PORT || 80;

//CORS options, commented out unused whitelist/blacklist options
// app.use(cors(corsOptions));
app.use(cors());
app.set('trust proxy', true);
//file upload options for creating buckets 
app.use(fileUpload ({createParentPath: true},{debug: true}) )

//Body Parse to build API
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static('Client/jubjub/build'))
//static server for uploads
app.use(express.static('uploads'))
//static server for user "buckets"
app.use(express.static('users'))

//Start Server 
app.listen(PORT, function() {
    console.log(`Server listening on: http://${ip}:${PORT}`);
  });

  
  //Home page
  // app.get("/", cors(), function(req, res) {
      //     res.json("Welcome to the API/Post Routes")
      // });

      //Main GET route
app.get("/api", cors(), function(req, res) {
    orm.selectTen(function(data){
        res.json(data)
    })
});

// app.post("/api/data",cors(), function (req,res){
    //     if(req.body.name === ''){
//         //if no name it becomes anon
//           req.body.name = 'anon'
//           }
//      orm.insertOne(req.body.address,req.body.name)
//      res.send('Post Recieved')
//      app.post('/api/post',cors(), function (req,res){
    //          upload = (req.files.myfile)
//          console.log(upload.name + req.body.address)
//          upload.mv(`./users/${req.body.name}/${upload.name}`)
//          res.send('Data Logged')
//      })
// })

// Post Route for Upload
app.post("/api/post", cors(), function(req, res) {
    console.log(req.files, 'This should happen First')
    upload = (req.files.myFile)
    upload.mv(`./uploads/${upload.name}`)
    res.send("Post Recieved")
});

//Seperate Post Route for JSON data
app.post("/api/data",cors(), function (req,res){
    if(req.body.name === ''){
        //if no name it becomes anon
          req.body.name = 'anon'
          }
          orm.insertOne(req.body.address,req.body.name)
          res.send('Data Recieved')
});

//when proper user route is input will pull users 10 most recently uploaded memes
app.get('/api/:user',cors(), function(req,res){
    console.log(req.params.user)
    orm.findUser(req.params.user, function(data){
        res.json(data)
        })
})

//These Routes are not currently used
//Main Update route
app.put("/api/update", function(req, res) {
    console.log(req.body)
    res.send("Update Recieved")
});
//Main Delete route
app.post("/api/delete", function(req, res) {
    orm.deleteOne(req.body.id)
    console.log(req.id)
    res.send(`delete request at ${req.body.id}`)
});

//Failback for React Router Functionality
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'Client/jubjub/build/index.html'), function(err) {
      if (err) {
        res.status(500).send(err)
      }
    })
  })
