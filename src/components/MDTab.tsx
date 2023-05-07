import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export interface MDTabProps {
	fileName: string;
}

const MDTab = ({ fileName }: MDTabProps) => {
	const [contents, setContents] = useState<string>("");

	useEffect(() => {
		const loadFile = async () => {
			const file = await import(`../data/tabs/${fileName}.md`);
			const response = await fetch(file.default);
			const text = await response.text();
			setContents(text);
		};
		loadFile();
	}, [fileName]);

	return (
		<div>
			<ReactMarkdown className="prose prose-zinc dark:prose-invert" children={contents} remarkPlugins={[remarkGfm]} />
		</div>
	);
};

export default MDTab;
