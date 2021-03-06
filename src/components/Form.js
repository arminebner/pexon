import React from 'react'

/*function Form(){}*/

// main function with all ({ props })
const Form = ({ setInputText, render, setRender, inputText, setStatus }) => {
	//Function for the text we enter in the input form
	const inputTextHandler = e => {
		console.log(e.target.value)

		setInputText(e.target.value) //Data to update the state
	}

	//For submitting the text when typing "enter" or the "+" icon to add a todo
	const submitTodoHandler = e => {
		e.preventDefault() // To prevent refreshing the page when typing enter or the "+" icon
		const addTodo = async () => {
			await fetch('http://localhost:5000/todos', {
				method: 'post',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ text: inputText }),
			})
		}
		addTodo()
		setRender(!render)
		// setTodos([
		// 	...todos, // For passing todos
		// 	{ text: inputText, completed: false, id: Math.random() * 1000 }, // For passing new todos with an id
		// ])
		setInputText('')
	}

	const statusHandler = e => {
		setStatus(e.target.value)
	}

	return (
		<form>
			<input
				value={inputText}
				onChange={inputTextHandler}
				type='text'
				className='todo-input'
			/>
			{/*Everytime the input changes the function will run*/}

			<button
				onClick={submitTodoHandler}
				className='todo-button'
				type='submit'>
				<i className='fas fa-plus-square'></i>
			</button>

			<div className='select'>
				<select
					onChange={statusHandler}
					name='todos'
					className='filter-todo'>
					<option value='all'>All</option>
					<option value='completed'>Completed</option>
					<option value='uncompleted'>Uncompleted</option>
				</select>
			</div>
		</form>
	)
}

export default Form
