import React from 'react'

const Todo = ({ text, todo, todos, setTodos }) => {
	//Events

	const deleteHandler = () => {
		//aufruf delete-route
		const deleteTodoById = async () => {
			await fetch(`http://localhost:5000/todos/${todo._id}`, {
				method: 'DELETE',
			})
		}
		setTodos(todos.filter(el => el._id !== todo._id))
		deleteTodoById()
	}

	const completeHandler = () => {
		setTodos(
			todos.map(item => {
				if (item._id === todo._id) {
					return {
						...item,
						completed: !item.completed,
					}
				}
				return item
			})
		)
	}

	return (
		<div className='todo'>
			<li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
				{text}
			</li>{' '}
			{/* In order to render text*/}
			<button onClick={completeHandler} className='complete-btn'>
				<i className='fas fa-check'></i>
			</button>
			<button onClick={deleteHandler} className='trash-btn'>
				<i className='fas fa-trash'></i>
			</button>
		</div>
	)
}

export default Todo
