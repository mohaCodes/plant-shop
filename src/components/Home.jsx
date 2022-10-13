import React from "react"
import homePagePlants from "../assets/images/homePage-plant.jpg"

/**
 * Will be rendered with the url "./", it contains a label and a SVG image.
 */
export default function Home() {
	return (
		<main className="flex flex-row-reverse justify-between font-semibold text-6xl container  p-20">
			<div>
				<h2 className="relative top-16">
					Make your house greener
					<span className="text-xl font-medium block mt-4">
						with the cheapest cost possible and the best plants
						available.
					</span>
				</h2>
			</div>

			<img
				className="w-[30rem] rounded-xl h-fit relative left-5 shadow-xl"
				src={homePagePlants}
			/>
		</main>
	)
}
