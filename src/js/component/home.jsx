import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { useState } from "react";
import { List } from "./list.jsx";

//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState("")
	const [todos, setTodos] = useState([])
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
