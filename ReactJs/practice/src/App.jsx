import React from 'react'
import { toast } from 'react-toastify'

const App = () => {

//   const button = document.getElementById("myButton");
//   button.addEventListener("click", function() {
//     alert("The button was clicked!")
// });

function displayDate() {
  toast.success("Done")
}

  return (
    <div>
        {/* <button id='myButton'>Click it</button> */}
        {/* <button onClick={displayDate() }>click</button>
        <p id='demo'></p> */}
        <button 
          onClick={toast.success("Done")}>Click me.</button>
              
    </div>
  )
}

export default App