import React from "react";
import "./style.css";
import { useState } from "react";


const  App =() => {

// define object in usestate.
// const [data,setData] = useState({});


// this is object with data 
const [data,setData]= useState( [
  {
     id:  "1",
     name:  "Imran",
     email:  "ali@gmail.com",
   },
   {
   id:  "2",
    name:  "Nawaz",
    email:  "nawaz@gmail.com",
  }, 
]);

console.log(data);

//const items = data.map((id,name,email) =>  (<p> key={id} name = {name} email ={email}))</p>




  return (
    <div>
      <h1>Return Item from Object Array</h1>
      
      {data.map(( { id, name, email}) => (
            <p> key={id} name = {name} email ={email} </p>
            
      ))}
    
      <p> by using component </p> 
       <items />




      <p> this is simple output of data </p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};
export default App;

