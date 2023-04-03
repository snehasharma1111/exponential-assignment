import React from "react";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";

const protectedRoutes = [];

const nonProtectedRoutes = [
	{
		path: "/",
		component: <Home />,
	},
	{
		path: "*",
		component: <NotFound />,
	},
];

const routes = protectedRoutes
	.map((route) => ({
		...route,
		component: <PrivateRoute>{route.component}</PrivateRoute>,
	}))
	.concat(nonProtectedRoutes);

export default routes;
