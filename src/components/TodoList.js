import React from 'react'
//Import Components
import Todo from './Todo'

// main function with all ({ props })
const TodoList = ({ todos, setTodos, filteredTodos }) => {
	return (
		<div className='todo-container'>
			<ul className='todo-list'>
				{filteredTodos.map((
					todo // Having access to each todo
				) => (
					<Todo // For each todo we have from the state we render a Todo component
						key={todo._id} // id key for each item for every list in React
						setTodos={setTodos}
						todos={todos}
						todo={todo}
						text={todo.text}
					/>
				))}
			</ul>
		</div>
	)
}

export default TodoList
