// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module './logo.svg' or its correspondi... Remove this comment to see the full error message
import logo from './logo.svg';
import axios from "axios";
// @ts-expect-error ts-migrate(1259) FIXME: Module '"S:/Projects/applied-it-project/node_modul... Remove this comment to see the full error message
import React,{useEffect, useState} from "react"
// @ts-expect-error ts-migrate(6142) FIXME: Module './Components/Dash1/Dash1' was resolved to ... Remove this comment to see the full error message
import Dash1 from "./Components/Dash1/Dash1"
// @ts-expect-error ts-migrate(6142) FIXME: Module './Components/Dash2/Dash2' was resolved to ... Remove this comment to see the full error message
import Dash2 from "./Components/Dash2/Dash2"
// @ts-expect-error ts-migrate(6142) FIXME: Module './Components/Footer/Footer' was resolved t... Remove this comment to see the full error message
import Footer from "./Components/Footer/Footer"

import './App.css';
// @ts-expect-error ts-migrate(6142) FIXME: Module './Components/Header/Header' was resolved t... Remove this comment to see the full error message
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
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div className="App">
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <header className="App-header">            
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Header
        timestamp={timestamp}
        >
          </Header>          
       {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
       <Dash1 
          addItem={handleAdd}
          latestData={latestData}>
       </Dash1>
       
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Dash2
          itemCompare={itemCompare}
          latestData={latestData}
          handleRemove={handleRemove}>

        </Dash2>
            </header>
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <Footer />
    </div>
  );
}

export default App;
