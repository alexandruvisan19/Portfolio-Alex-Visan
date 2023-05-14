import { ComponentType } from "react";
import { createBrowserRouter } from "react-router-dom";

import MDTab from "src/components/MDTab";
import MainLayout from "src/components/Layouts/index";
import ErrorPage from "src/error-page";
import { tabs, pages } from "src/data/index";

interface PageProps {
	component?: ComponentType;
}
function ViewPage({ component: Component, ...rest }: PageProps) {
	if (!Component) {
		return null;
	}
	return <Component {...rest} />;
}

const tabPages = tabs.map(({ url, name, mdFileName }) => {
	return { path: url, element: <MDTab key={name} fileName={mdFileName} /> };
});

const viewPages = pages.map(({ url, name, component }) => {
	return { path: url, element: <ViewPage key={name} component={component} /> };
});

export const routes = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout tabs={tabs} />,
		children: [...tabPages, ...viewPages],
		errorElement: <ErrorPage />,
	},
]);
