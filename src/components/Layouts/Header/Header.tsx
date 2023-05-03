import { useState } from "react";

function Header() {
	const [toggleTheme, setToggleTheme] = useState();

	function toggleThemeHandler() {
		setToggleTheme((prevToggleTheme) => !prevToggleTheme);
	}

	return (
		<header className="flex justify-between">
			<div>
				<a href="/">AV.</a>
			</div>
			<nav>
				<ul className="flex">
					<li className="px-2">
						<a href="">Projects</a>
					</li>
					<li className="px-2">
						<a href="">Skills</a>
					</li>
					<li className="px-2">
						<a href="">Contact</a>
					</li>
					<li className="px-2">
						<span className="cursor-pointer" onClick={toggleThemeHandler}>
							{toggleTheme ? "☀️" : "🌙"}
						</span>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
