//import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
function App() {
  let time=new Date().toLocaleTimeString();
  const [ctime,setCtime]=useState(time);

  const UpdateTime=()=>{
    time=new Date().toLocaleTimeString();
    setCtime(time);
  }
  setInterval(UpdateTime,1000);
  return (
   <>
    <div style={{marginLeft:"355px",marginRight:"415px",marginTop:"200px",fontSize:"100px",backgroundColor:"gray"}}>{ctime}</div>
   </>
  );
}

export default App;
