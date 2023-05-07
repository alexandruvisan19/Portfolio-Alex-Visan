import { useEffect, useRef, useState } from "react";

function getPosition(element: any) {
	let xPosition = 0;
	let yPosition = 0;

	while (element) {
		xPosition += element.offsetLeft - element.scrollLeft + element.clientLeft;
		yPosition += element.offsetTop - element.scrollTop + element.clientTop;
		element = element.offsetParent;
	}
	return {
		x: xPosition,
		y: yPosition,
	};
}

function Tooltip({ text, children }: { text: string; children: JSX.Element }) {
	const [show, setShow] = useState(false);
	const [isRightSide, setIsRightSide] = useState<boolean | null>(null);
	const tooltipRef = useRef<HTMLDivElement | null>(null);
	const showTooltip = show ? "visible" : "invisible";

	useEffect(() => {
		const windowWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
		const pos = getPosition(tooltipRef.current);

		if (pos.x > windowWidth / 2) {
			setIsRightSide(true);
		} else {
			setIsRightSide(false);
		}
	}, [isRightSide]);

	const position = isRightSide ? "right-[-1px]" : "left-[6px]";

	return (
		<div ref={tooltipRef} className="relative">
			<div className={`${position} ${showTooltip} absolute bottom-7 w-max bg-[#1e1e1e] border px-2 py-1`}>
				{text}
				<span
					className={`${position} absolute bottom-0 w-2 h-2 bg-[#1e1e1e] border-r border-b transform -translate-x-1/2 translate-y-1/2 rotate-45`}
				/>
			</div>
			<div onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
				{children}
			</div>
		</div>
	);
}

export default Tooltip;
