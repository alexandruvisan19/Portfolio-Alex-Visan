import { createBrowserRouter } from "react-router-dom";

import MDTab from "../components/MDTab";
import MainLayout from "../components/Layouts/Main";
import ErrorPage from "../error-page";
import { tabs } from "../data/index";

const pages = tabs.map(({ url, mdFileName, name }) => {
	return { path: url, element: <MDTab key={name} fileName={mdFileName} /> };
});

export const routes = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout tabs={tabs} />,
		children: pages,
		errorElement: <ErrorPage />,
	},
]);
