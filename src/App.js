import logo from './logo.svg';
import axios from "axios";
import React,{useEffect} from "react"

import './App.css';

function App() {

useEffect(() => {
  console.log('using effect....')
  axios.get('/api')
  .then(res => console.log(res))
  .catch(e=> console.log(e))
},[]);


  return (
    <div className="App">
      <header className="App-header">        
       

      </header>
    </div>
  );
}

export default App;
