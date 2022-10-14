import React from "react"
import Navbar from "./components/Navbar"
import Plants from "./components/Plants"
import Home from "./components/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
	/**
	 * This state is the number of items added in cart, It'll be passed to <Navbar/>.
	 */
	const [itemsInCart, setItemsInCart] = React.useState(0)

	/**
	 * This function will be passed to <Plants/> and then passed to <Plant/> as a onClick Event,
	 * It calls setItemsInCart() and then updates the UI.
	 */
	function updateItemsInCart() {
		setItemsInCart((prev) => {
			return prev + 1
		})
	}

	return (
		<BrowserRouter>
			<div>
				<Navbar itemsInCart={itemsInCart} />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route
						path="/plants"
						element={
							<Plants
								onCLickPassedToPlant={updateItemsInCart}
							/>
						}
					/>
				</Routes>
			</div>
		</BrowserRouter>
	)
}

export default App
