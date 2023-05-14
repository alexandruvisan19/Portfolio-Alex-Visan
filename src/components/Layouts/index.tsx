import { Outlet } from "react-router-dom";

import Footer from "src/components/Layouts/Footer/index.tsx";
import Header from "src/components/Layouts/Header/index.tsx";
import Sidebar from "src/components/Layouts/Sidebar/index.tsx";
import { ITabsProps } from "src/data/index.tsx";

function MainLayout({ tabs }: { tabs: ITabsProps }) {
	return (
		<div className="h-screen w-[calc(100%-50px)] m-0 p-0 absolute">
			<Sidebar />
			<main className="relative top-0 left-[50px] right-0 w-full">
				<Header tabs={tabs} />
				<div className="prose prose-zinc dark:prose-invert flex items-center justify-center h-[90vh] m-auto">
					<Outlet />
				</div>
			</main>

			<Footer />
		</div>
	);
}

export default MainLayout;
