import React, { useState, useEffect } from 'react'
import '../App.css'

//Important components
import Form from './Form'
import TodoList from './TodoList'

function Dashboard() {
	//State stuff
	const [inputText, setInputText] = useState('') // Having text state
	const [todos, setTodos] = useState([]) // For adding functionality, having text ==> completed, true or false, with a specific id to identify the todo
	const [status, setStatus] = useState('all') // For filtering todos based on status, "all" ==> default status
	const [filteredTodos, setFilteredTodos] = useState([]) // Updating the todos, setTodos with the filtering system
	const [render, setRender] = useState(false)

	//Run once when the app start
	useEffect(() => {
		getTodos()
	}, [render])

	//Use effect, runs the function everytime a piece of state changes
	useEffect(() => {
		filterHandler()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [todos, status]) // [] arrow function is gonna run only once when the component is first rendered

	//Functions
	const filterHandler = () => {
		switch (status) {
			case 'completed':
				setFilteredTodos(todos.filter(todo => todo.completed === true)) // Check if the todo is completed
				break
			case 'uncompleted':
				setFilteredTodos(todos.filter(todo => todo.completed === false))
				break
			default:
				setFilteredTodos(todos)
				break
		}
	}

	const getTodos = async () => {
		const res = await fetch('http://localhost:5000/todos')
		const resJson = await res.json()
		console.log(resJson.data)

		setTodos(resJson.data)
	}

	return (
		<div className='App'>
			<header>
				<h1 className='h1-title'>To-Do-List</h1>
			</header>

			<Form
				inputText={inputText}
				setInputText={setInputText}
				setStatus={setStatus}
				render={render}
				setRender={setRender}
			/>

			<TodoList
				filteredTodos={filteredTodos}
				setTodos={setTodos}
				todos={todos}
			/>
		</div>
	)
}

export default Dashboard
