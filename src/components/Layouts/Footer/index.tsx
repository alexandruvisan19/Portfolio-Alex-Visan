import { Bell, Branch } from "../../../theme/Icons/index.ts";
import Tooltip from "../../UI/Tooltip.tsx";

function Footer() {
	return (
		<footer className="w-screen fixed bottom-0 left-0 h-[22px] flex items-center bg-[#020202] justify-between text-[0.75rem]">
			<div id="left-side">
				<ul className="[&>li]:px-1 [&>li]:mx-2 [&>li]:hover:bg-purple-600 [&>li]:hover:bg-opacity-25">
					<li>
						<a href="https://github.com/alexandruvisan19/Portfolio-Alex-Visan" target="_blank">
							<Tooltip text="Leads to the master branch">
								<>
									<Branch />
									<span>master</span>
								</>
							</Tooltip>
						</a>
					</li>
				</ul>
			</div>
			<div id="right-side">
				<ul className="[&>li]:py-[3.5px] [&>li]:px-1 [&>li]:mx-2 [&>li]:hover:bg-purple-600 [&>li]:hover:bg-opacity-25">
					<li>
						<Tooltip text="No notifications">
							<Bell />
						</Tooltip>
					</li>
				</ul>
			</div>
		</footer>
	);
}

export default Footer;
