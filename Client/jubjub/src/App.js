import React, {useState, useEffect, useContext, useReducer, useRef} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import { Grid } from '@material-ui/core';


function App() {
  const [ip, setIp] = useState('localhost')
  const myRef = useRef({selectedFile: null});
  const [user,setUser] = useState("anon")
  const [post,setPost] = useState([{}])
  
useEffect(() =>  {
    axios.get(`http://${ip}:3001/api`).then(function (res) {
    setPost(
      res.data
    )
    console.log(post)
    })
  },[]);

    function uploadHandler() {
      let upload = myRef.current.files[0]
      let uName = document.getElementById("uName").value
      let uData = {name: uName, address: upload.name}
      const formData = new FormData()
      formData.append(
      'myFile',
       upload,
       upload.name
  )
     axios.post(`http://${ip}:3001/api/post`, formData)
     axios.post(`http://${ip}:3001/api/data`, uData).then(function (res){
      alert(`Meme Sucessfully Uploaded`);
      window.location.reload(false);
    })
    }

  

  

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 1000,
    },
  },
}));


  return (

<div>
  <Router>
        <nav>
          <ul>
            <li>
              <Link to="/" >Home</Link>
            </li>
            <li>
              <Link to="/API">10 Newests MEMES</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
    <Switch>
     <Route path="/API" component={API} />
     <Route exact path="/" component={Home} />
     <Route path="/users" component={users} />
    </Switch>
  </Router>
</div>
   
  );

  function Home(){
    const classes = useStyles();
    

    return (
    <div>Home <p>Welcome to The Smoking Hot Meme Repository, Please Upload Your Memes Below and I Will View Them in My Own Time</p>
      <input type="file" ref={myRef}/>
      &nbsp;User&nbsp;<input id="uName" type="text"/>&nbsp; 
    <button onClick={() => {uploadHandler()}}>Upload!</button>
    </div>
    )
  }

  function users(){
    return(
      <div>Users Page underconstruction </div>
    )
  }

  function API(){
    return (
    <div style={{display: 'grids'}}><p>TOP 10 MEMES ARE Below</p>
    {post.map((item, key) =>
        <div style={{width: 250}}><img src ={`http://${ip}:3001/${item.image}`} style={{width: 250}}/><p style={{textAlign: 'center',width: 250}}>{item.user}</p></div>
    )}
    </div>
    )
  }
}

export default App;

