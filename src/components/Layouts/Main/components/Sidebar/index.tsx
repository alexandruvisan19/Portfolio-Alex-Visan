import { AiFillLinkedin, AiOutlineGithub, AiOutlineHome } from "react-icons/ai";

function Sidebar() {
	return (
		<div className="flex fixed top-0 left-0 w-[50px] h-screen bg-[#1d1f23] items-center flex-col justify-between">
			<ul className="[&>li]:p-3">
				<li>
					<a href="/">
						<AiOutlineHome className="w-6 h-6" />
					</a>
				</li>
				<li>
					<a href="#">
						<AiOutlineGithub className="w-6 h-6" />
					</a>
				</li>
				<li>
					<a href="#">
						<AiFillLinkedin className="w-6 h-6" />
					</a>
				</li>
			</ul>
		</div>
	);
}

export default Sidebar;
