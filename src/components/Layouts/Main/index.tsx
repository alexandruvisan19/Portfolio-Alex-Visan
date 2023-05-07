import { Outlet } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { ITabsProps } from "../../../data";

function MainLayout({ tabs }: { tabs: ITabsProps }) {
	return (
		<div className="h-screen w-[calc(100%-50px)] m-0 p-0 absolute">
			<Sidebar />
			<main className="relative top-0 left-[50px] right-0 w-full">
				<Header tabs={tabs} />
				<Outlet />
			</main>

			<Footer />
		</div>
	);
}

export default MainLayout;
