import { Link, NavLink } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

interface NavigationItem {
	tab: {
		name: string;
		url: string;
		icon: JSX.Element;
	},
	activeTab: string,
	onClick: (name: string) => void;
}

function NavigationItem({ tab: { name, url, icon }, activeTab, onClick }: NavigationItem) {
	const isActiveTab = activeTab === name;

	return (
		<li className={`${isActiveTab ? "bg-[#242424]" : ""} flex items-center relative`}>
			<NavLink onClick={() => onClick(name)} className={`flex items-center p-3 pr-8 pl-3`} to={url}>
				<span className="px-[6px]">{icon}</span>
				<span className="text-[0.95rem]">{name}</span>
			</NavLink>
			<Link onClick={() => onClick("")} to="/">
				{isActiveTab && (
					<span className="absolute right-2 top-3 hover:bg-slate-200 hover:bg-opacity-10 rounded p-[1px]">
						<IoMdClose />
					</span>
				)}
			</Link>
		</li>
	);
}

export default NavigationItem;
