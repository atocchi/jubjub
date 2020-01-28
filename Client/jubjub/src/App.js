import React, {useState, useEffect, useContext, useReducer, useRef} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


function App() {
  const [ip, setIp] = useState('localhost')
  const myRef = useRef({selectedFile: null});
  const [user,setUser] = useState("anon")
  const [post,setPost] = useState([{}])
  const [uPost,setUpost] = useState([{image:`q.png`}])
  
useEffect(() =>  {
    axios.get(`http://${ip}:3001/api`).then(function (res) {
    setPost(
      res.data
    )
    console.log(post)
    })
  },[]);
    function userHandler (){
      let uSearch = document.getElementById('uName').value
      axios.get(`http://${ip}:3001/api/${uSearch}`).then(function (res) {
        setUpost(res.data)
        console.log(uPost)
      })
    }


    function uploadHandler() {
      let upload = myRef.current.files[0]
      if (upload === undefined){
        alert(`Please Select a File for Upload`)
        return
      }else{
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
    <div style={{marginLeft: 20}}>Home <p>Welcome to The Smoking Hot Meme Repository, Please Upload Your Memes Below and I Will View Them in My Own Time</p>
      <input type="file" ref={myRef}/>
      <p>&nbsp;User&nbsp;<input id="uName" type="text"/>&nbsp; 
    <button onClick={() => {uploadHandler()}}>Upload!</button></p>
    </div>
    )
  }

  function users(){
    return(
      <div><input style={{marginLeft: 20}} id="uName" type="text" />
      <button onClick={() => {userHandler()}}>SEARCH</button>
      
      <Grid container style={{marginLeft: 10}}>
      
      {uPost.map((item, key) =>
      <Paper style={{width: 250, margin: 10}}><img src ={`http://${ip}:3001/${item.image}`} style={{width: 250, height: 250}}/><p style={{textAlign: 'center',width: 250}}>{item.user}</p></Paper>
       )}
      
      </Grid>
      </div>
    )
  }

  function API(){
    return (
    <div style={{display: 'grids'}}><p style={{marginLeft: 20,marginBottom: 40}}>TOP 10 MEMES ARE Below</p>
     <Grid container spacing={10} style={{marginLeft: 10}}>
    {post.map((item, key) =>
    <Paper style={{width: 250,margin: 10}}><img src ={`http://${ip}:3001/${item.image}`} style={{width: 250, height: 250}}/><p style={{textAlign: 'center',width: 250}}>{item.user}</p></Paper>
    )}
    </Grid>
    </div>
    )
  }
}

export default App;

