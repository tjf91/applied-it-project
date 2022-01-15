import logo from './logo.svg';
import axios from "axios";
import React,{useEffect, useState} from "react"
import Dash1 from "./Components/Dash1/Dash1"
import Dash2 from "./Components/Dash2/Dash2"

import './App.css';

function App() {
const [timestamp, setTimeStamp]=useState(null)  
const [latestData, setLatestData]=useState(null)
const [itemCompare, setItemCompare]= useState([])

const handleAdd=(input)=>{
  setItemCompare([...itemCompare, input])
}

  
useEffect(() => {
  console.log('using effect....')
  axios.get('/api/latest')
  .then(res => {
    // console.log(res.data)    
    // setTimeStamp(res.data.status.timestamp)
    setLatestData(res.data.data)
    // console.log(res.data)

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
          addItem={handleAdd}
          latestData={latestData}>
       </Dash1>
        <Dash2
          itemCompare={itemCompare}
          >

        </Dash2>
          </header>
    </div>
  );
}

export default App;
