import React, { useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { useState } from "react";
import { List } from "./list.jsx";

const url = "https://assets.breatheco.de/apis/fake/todos/user/MaRa"

//create your first component

const Home = () => {
	const [inputValue, setInputValue] = useState("")
	const [todos, setTodos] = useState([])

		useEffect(() => {
             fetch(url)
			  .then(resp => {
				  console.log(resp.ok); 
				  return resp.json(); 
			  })
			  .then(data => { 
				  console.log(data); 
			  })
			  .catch(error => {
				  console.log(error);
			  })}, [])

			  useEffect(()=> {
				if(todos && todos > 1){

				fetch(url, {
				 method: 'PUT',
				 body: JSON.stringify(todos),
				 headers: {
					'Content-Type': 'application/json'
				  }
				  })
				 .then(res => {
				  console.log(res.ok);
				  return res.json();
				  })
				  .then(data =>{
				  
				  console.log(data)
				  })
				 .catch(error => {
				  console.log(error)
			  })
				}

			  }, [todos])
		
			
const handleNewTodos=()=>{

	
	
}


			  

	

			  

console.log(todos)

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
						setTodos([...todos, { label: inputValue, done: false }]);
						setInputValue("");	
					}
				}}
				 placeholder="what's next?" ></input> </li>

				 

				 {todos.map((t, index) => (
					
						<li key={index}> {t.label} <i class="fas fa-times" 
						onClick={() => setTodos(todos.filter((t, currentIndex) => index != currentIndex))}></i></li>
				 ))}
			
			</ul>
		    <div>{todos.length} Jobs to do!</div>

			

			</div>
		</div>
	);
};

export default Home;


/*
<button onClick={handleSaveNewList}>save new list</button>
<button onClick={handleNewTodos}>new todo</button>
*/