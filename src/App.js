import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './functionBased/components/Navbar'
import './App.css'
import About from './pages/About'
import NotMatch from './pages/NotMatch'
import Homepage from './pages/Homepage'
import SinglePage from './pages/SinglePage'

const App = () => {

	return (
		<>
			<Navbar />
			<Routes>
				<Route exact path='/' element={<Homepage />} />
				<Route path='about' element={<About />}>
					<Route path=':slug' element={<SinglePage />} />
				</Route>
				<Route path='*' element={<NotMatch />} />
			</Routes>
		</>
	)
}

export default App