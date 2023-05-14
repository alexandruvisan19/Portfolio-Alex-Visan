function IconLink({ name, url, icon }: { name: string; url: string; icon: JSX.Element }) {
	return (
		<a title={`Find me on ${name}`} href={url}>
			<>{icon}</>
		</a>
	);
}

export default IconLink;
