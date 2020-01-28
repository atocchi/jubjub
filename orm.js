const connection = require("./connection.js");

//blank query variable 
let query = "";

let orm = {

//This Query Selects all from the MYSQL DB
selectTen: function (cb){
query = "SELECT * FROM files ORDER BY id DESC LIMIT 10";
connection.query(query, function(err, result) {
    if (err) throw err;
    cb(result);
  })
},
//finds 10 most recent inputs based on users name, fend to api
findUser: function (user,cb){
  query = "SELECT * FROM files WHERE user = (?) ORDER BY id DESC LIMIT 10";
  connection.query(query,[user], function(err, result) {
      if (err) throw err;
      cb(result);
    })
  },

//This Query Inserts the Variable into the MYSQL DB
insertOne: function(image,user){
query = "INSERT INTO files (image, user) VALUES (?,?)";
connection.query(query,[image,user], function(err, result) {
        if (err) throw err;
        console.log(`inserted ${image} for ${user}`)
      });
},


//not currently used
//This Query updates a value in the mysql database (the boolean to true)
// updateOne: function (uName) {
// query = "UPDATE files SET ? WHERE ?";
// connection.query(query,[{value: 1}, {user: uName}], function(err, result) {
//     if (err) throw err;
//   }); 
// }

}


module.exports = orm;