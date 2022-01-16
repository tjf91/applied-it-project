import logo from './logo.svg';
import axios from "axios";
import React,{useEffect, useState} from "react"
import Dash1 from "./Components/Dash1/Dash1"
import Dash2 from "./Components/Dash2/Dash2"
import Footer from "./Components/Footer/Footer"

import './App.css';
import Header from './Components/Header/Header';

function App() {
const [timestamp, setTimeStamp]=useState(null)  
const [latestData, setLatestData]=useState(null)
const [itemCompare, setItemCompare]= useState([])

const handleAdd=(input)=>{
  setItemCompare([...itemCompare, input])
}
const handleRemove=(input)=>{  
  setItemCompare([...itemCompare.filter(e=>e.name !== input.name)])
}  

useEffect(() => {
  console.log('using effect....')
  axios.get('/api/latest')
  .then(res => {    
    setTimeStamp(res.data.status.timestamp)
    setLatestData(res.data.data)
   })
  .catch(e=> console.log(e))
},[]);

  

  return (
    <div className="App">
      <header className="App-header">            
        <Header
        timestamp={timestamp}
        >
          </Header>          
       <Dash1 
          addItem={handleAdd}
          latestData={latestData}>
       </Dash1>
       
        <Dash2
          itemCompare={itemCompare}
          latestData={latestData}
          handleRemove={handleRemove}>

        </Dash2>
            </header>
          <Footer />
    </div>
  );
}

export default App;
