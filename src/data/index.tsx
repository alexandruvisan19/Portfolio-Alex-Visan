import Homepage from "src/pages/Homepage/index.tsx";
import { Code, Github, Home, Javascript, Linkedin, React } from "src/theme/Icons/index.ts";

export type ITabsProps = {
	name: string;
	url: string;
	icon: JSX.Element;
	mdFileName: string;
	color: string;
}[];

export type IPagesContactProps = {
	name: string;
	url: string;
	icon: JSX.Element;
	color: string | null;
	isInternal: boolean;
	component?: () => JSX.Element;
}[];

export const tabs: ITabsProps = [
	{
		name: "skills.js",
		url: "/skills",
		icon: <Javascript />,
		mdFileName: "skills",
		color: "yellow",
	},
	{
		name: "about.tsx",
		url: "/about",
		icon: <React />,
		mdFileName: "about",
		color: "#149ECA",
	},
];

export const pages: IPagesContactProps = [
	{
		name: "home",
		url: "/",
		icon: <Home />,
		color: "",
		isInternal: true,
		component: () => <Homepage />,
	},
];

export const contacts: IPagesContactProps = [
	{
		name: "Linkedin",
		url: "https://www.linkedin.com/in/visan-alexandru/",
		icon: <Linkedin />,
		isInternal: false,
		color: null,
	},
	{
		name: "Github",
		url: "https://github.com/alexandruvisan19",
		icon: <Github />,
		isInternal: false,
		color: null,
	},
	{
		name: "Codewars",
		url: "https://www.codewars.com/users/Karagk19",
		icon: <Code />,
		isInternal: false,
		color: null,
	},
];
