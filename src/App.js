import logo from './logo.svg';
import axios from "axios";
import React,{useEffect, useState} from "react"
import Dash1 from "./Components/Dash1/Dash1"

import './App.css';

function App() {
const [timestamp, setTimeStamp]=useState(null)  
const [latestData, setLatestData]=useState(null)

  
useEffect(() => {
  console.log('using effect....')
  axios.get('/api/latest')
  .then(res => {
    console.log(res.data)    
    // setTimeStamp(res.data.status.timestamp)
    setLatestData(res.data.data)
    console.log(res.data)

  })
  .catch(e=> console.log(e))
},[]);

  

  return (
    <div className="App">
      <header className="App-header">            
        <h1>
          Welcome to Applied IT Project
          </h1> 
       <Dash1 
          latestData={latestData}>
       </Dash1>
            </header>
    </div>
  );
}

export default App;
