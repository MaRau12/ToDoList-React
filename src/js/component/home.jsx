import React, { useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { useState } from "react";
import { List } from "./list.jsx";

const url = "https://assets.breatheco.de/apis/fake/todos/user"

//create your first component

const Home = () => {
	const [inputValue, setInputValue] = useState("")
	const [todos, setTodos] = useState([])
		useEffect(() => {
			fetch(url, {
				method: "PUT",
				body: JSON.stringify(todos),
				headers: {
				  "Content-Type": "application/json"
				}
			  })
			  .then(resp => {
				  console.log(resp.ok); // will be true if the response is successfull
				  console.log(resp.status); // the status code = 200 or code = 400 etc.
				  console.log(resp.text()); // will try return the exact result as string
				  return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
			  })
			  .then(data => {
				  //here is were your code should start after the fetch finishes
				  console.log(data); //this will print on the console the exact object received from the server
			  })
			  .catch(error => {
				  //error handling
				  console.log(error);
			  })})


    return (
		<div className="container">
			<h1>To Do List  </h1>
	       <div className="paper">
			<ul>
				<li> <input
				 type="text" 
				 onChange={(e) => setInputValue(e.target.value)}
				 value={inputValue}
				 onKeyDown={(e)=>{ 
					if (e.key==="Enter") {
					 setTodos(todos.concat([inputValue]));
					  setInputValue("");
					}
				}}
				 placeholder="what's next?" ></input> </li>

				 {todos.map((t, index) => (
						<li> {t} <i class="fas fa-times" 
						onClick={() => setTodos(todos.filter((t, currentIndex) => index != currentIndex))}></i></li>
				 ))}
			
			</ul>
		    <div>{todos.length} Jobs to do!</div>
			</div>
		</div>
	);
};

export default Home;
