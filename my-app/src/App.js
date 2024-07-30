import './App.css';
import Navbar from './components/Navbar.js';
import Alert from './components/Alert.js';
import Textform from './components/Textform.js';
import React , { useState } from 'react';



function App() {
  const[Mode , setMode] = useState(`light`);
  const [alert , setAlert]= useState(null);

  const showAlert = (message , type ) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() =>{
      setAlert(null);
    },1000);
  }

  const toggleMode = () =>{
    if(Mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
    }
    
  }
  return (
    <>
    <Navbar mode={Mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Textform showAlert={showAlert} heading="Enter the text to analyze" mode={Mode}/>
    </div>
    </>
  );
}

export default App;
