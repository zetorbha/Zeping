import React, { useState, useEffect } from 'react';
import './App.css';
import {FormControl, Input, IconButton } from '@material-ui/core';
import Message from './Message';
import db from './Firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import Logo from "./FAVPNG_facebook-social-media-icons_cwYS4uTW.png";
import SendIcon from '@material-ui/icons/Send';

function App() {
  const [input, setInput]= useState('');
  const [mesgs, setMesgs]= useState([]);
  const [user, setUser]= useState('');

  const sendMessage= (e) =>{
    e.preventDefault();
    setMesgs([...mesgs, {userName:user,message:input}]);
    setInput('');
    db.collection('messages').add({
      message:input,
      userName:user,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
     }
     useEffect(()=>{
       setUser(prompt('Please Enter A user Name!'))
       
     },[]);
     useEffect(()=>{
      db.collection('messages')
      .orderBy('timestamp','desc')
      .onSnapshot(snapshot =>{
        setMesgs(snapshot.docs.map(doc =>({id:doc.id, message:doc.data()})))
       })
     },[]);


  return (
    <div className="App">
      <img alt="logo" src={Logo} width="100" height="100"/>
      <h1> Love This finnaly the sleep is gone</h1>
  <h2>Welcome:  
    {/* {user && `${user || }`}  */}
  {user ?` ${user}`  : ` Guest` }
  </h2>
 
       <form className="app__form">
       <FormControl className="app__formc">
  
  <Input  className="app__imput"value={input} onChange={e => setInput(e.target.value)} placeholder="Enter Message"/>

  <IconButton className="app__button"disabled={!input} variant="contained" color="secondary" onClick={sendMessage} type="submit">
    <SendIcon/>
  </IconButton>
 
  </FormControl>
  </form>

  <FlipMove>{ mesgs.map(({id, message})=>
        (<Message user={user} msgs={message} key={id} />)
      )}</FlipMove>



    </div>
  );
}

export default App;