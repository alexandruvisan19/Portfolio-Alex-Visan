function Container({ children }) {
	return <div className="h-screen w-[calc(100%-50px)] m-0 p-0 absolute">{children}</div>;
}

export default Container;
