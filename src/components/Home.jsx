import React from "react"
import plantImage from "../assets/undraw_environment_iaus.svg"


/**
 * Will be rendered with the url "./", it contains a label and a SVG image.
 */
export default function Home() {
	return (
		<main className="flex flex-row-reverse justify-between font-semibold border text-6xl container p-20">
			<h2 className="relative top-16">
                Make your house greener
                
                <span className="text-xl font-medium block mt-4">with the cheapest cost possible and the best plants available.</span>
            </h2>

            <img className="w-[30rem] relative top-14" src={plantImage}/>
            
		</main>
	)
}
