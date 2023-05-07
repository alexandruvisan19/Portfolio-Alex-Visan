import { useRouteError } from "react-router-dom";

type ErrorResponse = {
	data: any;
	status: number;
	statusText: string;
	message?: string;
};

const errorCheck = (error: any): error is ErrorResponse => {
	return "data" in error && "status" in error && "statusText" in error;
};

export default function ErrorPage() {
	const error = useRouteError();
	console.error(error);

	if (!errorCheck(error)) {
		return <p>Could not show the correct error, but that doesn't mean there isn't one!</p>;
	}

	return (
		<div id="error-page">
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<p>
				<i>{error.statusText || error.message}</i>
			</p>
		</div>
	);
}
