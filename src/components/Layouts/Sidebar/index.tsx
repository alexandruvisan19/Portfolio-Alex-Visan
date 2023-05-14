import { contacts, pages } from "src/data/index.tsx";
import IconLink from "src/components/IconLink.tsx";

function Sidebar() {
	const mergedData = pages.concat(contacts);

	return (
		<div className="flex fixed top-0 left-0 w-[50px] h-screen bg-[#1d1f23] items-center flex-col justify-between">
			<ul className="[&>li]:p-3">
				{mergedData.map((icon) => (
					<li>
						<IconLink {...icon} />
					</li>
				))}
			</ul>
		</div>
	);
}

export default Sidebar;
