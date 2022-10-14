import React from "react"
import Plant from "./Plant"
import plantsData from "../plantsData"

/**
 * This is the page where all the plants whose available to the public to buy
 */
export default function Plants(props) {
	// rendering plants with .map()
	const renderPlantsCards = plantsData.map((item) => {
		return (
			<Plant
				handleClick={props.onCLickPassedToPlant}
				item={item}
				key={item.id}
			/>
		)
	})

	return (
		<main className="px-20 py-8 flex flex-row gap-x-10">
			{renderPlantsCards}
		</main>
	)
}
