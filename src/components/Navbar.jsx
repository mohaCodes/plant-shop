import React from "react"

export default function Navbar(props) {
	return (
		<nav className="px-2 sm:px-10 py-4 rounded">
			<div className="container flex flex-wrap justify-between items-center mx-auto">
				<h1 className="font-bold sm:text-4xl">Plant Shop</h1>

				<div className="flex flex-row  items-center sm:gap-x-14 gap-x-2">
					<ul className="sm:flex flex-row items-center gap-x-14 hidden">
						<li>
							<a
								href="/"
								className="block font-medium text-sm navbar-items py-2 rounded-lg">
								Home
							</a>
						</li>

						<li>
							<a
								href="/plants"
								className="block font-medium text-sm navbar-items py-2 rounded-lg">
								Plants
							</a>
						</li>

						<li>
							<a
								href=""
								className="block font-medium text-sm navbar-items py-2 rounded-lg">
								About
							</a>
						</li>

						<li>
							<a
								href=""
								className="block font-medium text-sm navbar-items py-2 rounded-lg">
								Profile
							</a>
						</li>
					</ul>

					<span className="material-symbols-rounded cursor-pointer navbar-items rounded-full">
						shopping_bag
						<p className="inline-block align-bottom ml-1">
							{props.itemsInCart}
						</p>
					</span>
				</div>
			</div>
		</nav>
	)
}
