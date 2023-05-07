import { useState } from "react";

import NavigationItem from "./NavigationItem";
import { ITabsProps } from "../../../../../../data";

function NavigationBar({ tabs }: { tabs: ITabsProps }) {
	const [activeTab, setActiveTab] = useState("");

	function handleActiveTab(tabName: string) {
		setActiveTab(tabName);
	}

	return (
		<nav className="flex h-[40px] items-center">
			<ul className="flex justify-between items-center h-full [&>*]:flex [&>*]:h-full [&>*]:border-r [&>*]:border-r-[#242424]">
				{tabs.map((tab) => {
					return <NavigationItem key={tab.name} activeTab={activeTab} onClick={handleActiveTab} tab={tab} />;
				})}
			</ul>
		</nav>
	);
}

export default NavigationBar;
