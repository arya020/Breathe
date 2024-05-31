import Circle from './components/Circle';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import 'chrome-extensions';
import { createContext,useState } from 'react';

export const ThemeContext = createContext(null);


function App() {

  const [theme,setTheme] = useState("light");

   /* eslint-disable no-undef */
  function test(){
    chrome.tabs.query({active: true, currentWindow:true}, tabs=>{
      const activeTabId = tabs[0].id;
      chrome.scripting.executeScript(
        {
          target: {tabId: activeTabId},
          //function: ()=>alert("React chrome extension alert")
          function: ()=>{document.body.innerHTML = "Hello World"}
        }
      )
    })
  }
  


  const changeTheme = () =>{

    setTheme(theme === "light" ? "dark":"light");
  }

  return (
    <ThemeContext.Provider value = {{theme,setTheme}}> 
    
   
     <div id={theme}>
     <nav class="navbar-nav">
     <a class="navbar-brand" href="#">
     <img style={{ width:50, height:50}} src="logo.png" alt=''/>
     <a> Coherence </a>
     </a>
       
        <div className="nav justify-content-end" style={{position:"relative",top:"-60%",display:"flex"}} >
        <div class=" form-check form-switch small">
        <input onChange={changeTheme} class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        </div>
        </div>
  
     </nav>
     <Circle/>
     </div>
     </ThemeContext.Provider>

  );
}
export default App;

