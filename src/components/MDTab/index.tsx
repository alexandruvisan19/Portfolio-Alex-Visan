import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export interface MDTabProps {
	fileName: string;
}

function MDTab({ fileName }: MDTabProps) {
	const [contents, setContents] = useState<string>("");
	console.log(contents);

	useEffect(() => {
		const loadFile = async () => {
			const file = await import(`../../data/tabs/${fileName}.md`);
			const response = await fetch(file.default);
			const text = await response.text();
			setContents(text);
		};
		loadFile();
	}, [fileName]);

	return <ReactMarkdown children={contents} remarkPlugins={[remarkGfm]} />;
}

export default MDTab;
