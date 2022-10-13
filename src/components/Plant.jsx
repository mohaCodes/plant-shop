import React from "react"

export default function Plant(props) {
	return (
		<div className="max-w-xs bg-gray-50 rounded-lg shadow-md flex flex-col">
			<img
				className="rounded-t-lg w-full h-96 cursor-pointer"
				src="https://images.unsplash.com/photo-1507988914355-bf49fdbc7368?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=378&q=80"
				alt="the plant's picture"
			/>

			<div className="p-5">
				<a href="">
					<h5 className="mb-2 text-2xl font-bold tracking-tight">
						Snake Plant
					</h5>
				</a>
				<p className="mb-3 font-normal text-gray-700 text-sm plant-explaining">
					Lorem ipsum dolor sit amet, consectetur adipiscing
					elit, sed do eiusmod tempor incididunt ut labore et
					dolore magna aliqua.
				</p>
				<a
					href="#"
					className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-600 rounded-lg">
					$16 - Add to Cart
				</a>
			</div>
		</div>
	)
}
