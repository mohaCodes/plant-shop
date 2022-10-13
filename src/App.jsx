import React from "react"
import Navbar from "./components/Navbar"
import Plants from "./components/Plants"
import Home from "./components/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
	return (
		<BrowserRouter>
			<div>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/plants" element={<Plants />} />
				</Routes>
			</div>
		</BrowserRouter>
	)
}

export default App
