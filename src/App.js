import logo from './logo.svg';
import './App.css';
import Home from "../src/Home/Home"
import React, {useState} from 'react';
import { data } from './Data';


function App() {


  const [app,setApp] = useState(data)


  return (
    <div className="App">
      <header className="App-header">


        <Home />


      </header>
    </div>
  );
}

export default App;
