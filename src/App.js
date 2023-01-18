import './App.css';
import {useState} from "react";
import Child1 from "./Child1.js";
import Child2 from "./Child2.js";

// This "App.js" is the main file and acts as parent component

function App() {

  // Setting initial state for "parentVal" (which will be sent to "Child2.js" component)
  const [parentVal, setParentVal] = useState(0);

  // Function to update the "parentVal" with the value ("valFromChild1") supplied from "Child1.js" component
  function parentFun(valFromChild1){
    setParentVal(valFromChild1);
  }


  // Returning all the data that needs to be shown on the web-page
  return (

    <div className="app-main-div" >

      <h2>Parent component</h2>
      <p class="file-name-p">"App.js" file</p>
      <br />

      {/* Calling Child1.js component by supplying the function "parentFun" */}
      <Child1 parentFun={parentFun} />
      <br />

      {/* Calling Child2.js component by supplying the value of "parentVal" */}
      <Child2 valFromParent={parentVal} />

    </div>
    
  )
   
}

export default App;


