import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextArea from "./Components/TextArea";
import React, { useState } from 'react'
import Alert from "./Components/Alert";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
 

  const [alert, setAlert] = useState(null)

  const AlertText=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  
  const [mode, setMode] = useState('light');

  // we will use below function as prop to pass it in navbar and use it in navbar.js
  const [switchText, setswitchText] = useState("Enable DarkMode")

  
  
  const toggleMode=()=>{
   

    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor="#24252A"
      setswitchText("Enable LightMode")
      AlertText("Dark Mode Has Been Enabled! ","success ")
    }
   
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      setswitchText("Enable DarkMode")
      AlertText("Light Mode Has Been Enabled! ","success ")
    }

  }
  
  return (
       /*  We are using props means property which we have given to some elements in our componenet and returning navbar from Navbar.js in our app. we are giving/passing title because we have defined props.title in Navbar.js. in this way we can reuse our navbar in other app */   
    <>
    
    <Router>

    <Navbar title="TextCookie" aboutusText="About Us" SearchPlaceholder="Search Anything..." mode={mode} toggleMode={toggleMode} switchText={switchText}/>   
      
    <Alert alert={alert}/>

      
      {/* Bootstrap have class container which will adjust textarea */}
    <div className="container my-3">  

    <Switch>
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
          {/* it is necessary to write exact before path */}
          <Route exact path="/">
          <TextArea mode={mode} ShowAlert={AlertText}/>
          </Route>
    </Switch>

    </div>

    </Router>
    
    </>   

  );

}

export default App; 
