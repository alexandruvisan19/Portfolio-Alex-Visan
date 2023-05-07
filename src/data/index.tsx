import { SiJavascript } from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa";

export type ITabsProps = {
	name: string;
	url: string;
	icon: JSX.Element;
	mdFileName: string;
}[];

export const tabs: ITabsProps = [
	{
		name: "skills.js",
		url: "/skills",
		icon: <SiJavascript color="yellow" />,
		mdFileName: "skills",
	},
	{
		name: "about.tsx",
		url: "/about",
		icon: <FaReact color="rgb(22,139,176)" />,
		mdFileName: "about",
	},
	{
		name: "contact.json",
		url: "/contact",
		icon: <FaNodeJs color="#5FA04E" />,
		mdFileName: "contact",
	},
];
