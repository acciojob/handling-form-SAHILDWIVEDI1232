import React from 'react';
import { useState,useEffect } from 'react'

function App() {
  const [input,setInput]=useState("");
  useEffect(()=>{
   console.log("value changed:",input);
   
  },[input])
   
return(
  <div>
  <form>
   <input 
      type="text"
      onChange={(e) => {
   setInput(e.target.value);
  
}}
   />
        </form>
</div>
)
}


export default App
