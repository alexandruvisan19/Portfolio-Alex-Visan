import "./index.css";
import Container from "./components/UI/Container";

function App() {
	return (
		<Container>
			<div className="flex fixed top-0 left-0 w-[50px] h-screen bg-[#1d1f23] items-center flex-col justify-between">
				<p>1</p>
			</div>
			<main className="relative top-0 left-[50px] right-0 w-full">
				<header className="sticky top-0 left-0 w-full h-[40px] bg-[#181a1f]">
					<nav className="flex h-[40px] items-center">
						<ul className="flex justify-between [&>*]:px-4">
							<li>page 1</li>
							<li>page 2</li>
							<li>page 3</li>
							<li>page 4</li>
							<li>page 5</li>
						</ul>
					</nav>
				</header>
				<section className="w-full h-[calc(100vh-62px)] flex items-center flex-col justify-center bg-[#121212]">
					test
				</section>
			</main>
			<footer className="w-screen fixed bottom-0 left-0 h-[22px] flex items-center bg-[#020202] justify-between">
				footer
			</footer>
		</Container>
	);
}

export default App;
