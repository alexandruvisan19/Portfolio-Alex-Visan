import { AiOutlineBell } from "react-icons/ai";
import { BiGitBranch } from "react-icons/bi";

import Tooltip from "../../../../UI/Tooltip";

function Footer() {
	return (
		<footer className="w-screen fixed bottom-0 left-0 h-[22px] flex items-center bg-[#020202] justify-between text-[0.75rem]">
			<div id="left-side">
				<ul className="[&>li]:px-1 [&>li]:mx-2 [&>li]:hover:bg-purple-600 [&>li]:hover:bg-opacity-25">
					<li>
						<span>
							<a href="https://github.com/alexandruvisan19/Portfolio-Alex-Visan" target="_blank">
								<Tooltip text="Leads to the master branch">
									<>
										<BiGitBranch className="inline-block" size="1.5em" />
										<span>master</span>
									</>
								</Tooltip>
							</a>
						</span>
					</li>
				</ul>
			</div>
			<div id="right-side">
				<ul className="[&>li]:py-[3.5px] [&>li]:px-1 [&>li]:mx-2 [&>li]:hover:bg-purple-600 [&>li]:hover:bg-opacity-25">
					<li>
						<Tooltip text="No notifications">
							<AiOutlineBell size="1.3em" />
						</Tooltip>
					</li>
				</ul>
			</div>
		</footer>
	);
}

export default Footer;
