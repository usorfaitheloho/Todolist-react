import React, { useState, useEffect } from 'react'
import Header from '../functionBased/components/Header'
import { v4 as uuid } from 'uuid'
import TodosList from '../functionBased/components/TodosList'
import InputTodo from '../functionBased/components/InputTodo'

const Homepage = () => {
	const [todos, setTodos] = useState(getInitialTodos())

  const handleChange = id => {
		setTodos(prevState =>
			prevState.map(todo => {
				if (todo.id === id) {
					return {
						...todo,
						completed: !todo.completed,
					}
				}
				return todo
			}),
		)
	}

	const addTodoItem = title => {
		const newTodo = {
			id: uuid(),
			title: title,
			completed: false,
		}
		setTodos([...todos, newTodo])
	}

	const delTodo = id => {
		setTodos([...todos.filter(todo => todo.id !== id)])
	}

	const setUpdate = (updatedTitle, id) => {
		setTodos(
			todos.map(todo => {
				if (todo.id === id) {
					todo.title = updatedTitle
				}
				return todo
			}),
		)
	}

	function getInitialTodos() {
		const savedTodos = JSON.parse(localStorage.getItem('todos'))
		return savedTodos || []
	}

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos))
	}, [todos])

	return (
		<div className='container'>
			<div className='inner'>
				<Header />
				<InputTodo addTodoProps={addTodoItem} />
				<TodosList
					todos={todos}
					handleChangeProps={handleChange}
					deleteTodoProps={delTodo}
					setUpdate={setUpdate}
				/>
			</div>
		</div>
	)
}

export default Homepage