import { RouterProvider } from "react-router-dom";

import { routes } from "./pages/routes";

import "./index.css";

function App() {
	return <RouterProvider router={routes} />;
}

export default App;
