import { ITabsProps } from "../../../data/index.tsx";
import NavigationBar from "./NavigationBar/index.tsx";

function Header({ tabs } : { tabs: ITabsProps }) {
	return (
		<header className="sticky top-0 left-0 w-full h-[40px] bg-[#181a1f]">
			<NavigationBar tabs={tabs} />
		</header>
	);
}

export default Header;
