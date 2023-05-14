// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Typed from "typed.js";
import { useEffect, useRef } from "react";

import personalData from "src/data/json/personal.json";

function Homepage() {
	// Create reference to store the DOM element containing the animation
	const el = useRef(null);
	const { staticLine, typingLines } = personalData;
	console.log(personalData);

	useEffect(() => {
		const typed = new Typed(el.current, {
			strings: typingLines,
			typeSpeed: 100,
			loop: true,
			backSpeed: 50,
		});

		return () => {
			// Destroy Typed instance during cleanup to stop animation
			typed.destroy();
		};
	}, [typingLines]);

	return (
		<div className="App">
			<span>{staticLine}</span>
			<span ref={el} />
		</div>
	);
}

export default Homepage;
