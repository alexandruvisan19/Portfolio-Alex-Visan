import { Link, NavLink } from "react-router-dom";
import { Close } from "src/theme/Icons/close-icon.tsx";

interface NavigationItem {
	tab: {
		name: string;
		url: string;
		icon: JSX.Element;
		color: string;
	};
	activeTab: string;
	onClick: (name: string) => void;
}

function NavigationItem({ tab: { name, url, icon }, activeTab, onClick }: NavigationItem) {
	const isActiveTab = activeTab === name;

	const isActiveTextColor = isActiveTab ? "bg-[#242424]" : "";
	const isActiveBackGroundColor = isActiveTab ? "text-sky-100" : "text-stone-500";

	return (
		<li className={`${isActiveBackGroundColor} flex items-center relative`}>
			<NavLink
				onClick={() => onClick(name)}
				className={`${isActiveTextColor} flex items-center p-3 pr-8 pl-3`}
				to={url}
			>
				<span className="px-[6px]">{icon}</span>
				<span className="text-[0.85rem]">{name}</span>
			</NavLink>
			<Link
				className="absolute right-3 top-[13px] hover:bg-slate-200 hover:bg-opacity-10 rounded p-[1px]"
				onClick={() => onClick("")}
				to="/"
			>
				{isActiveTab && <Close />}
			</Link>
		</li>
	);
}

export default NavigationItem;
