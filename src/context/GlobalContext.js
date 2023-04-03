import { createContext } from "react";

const GlobalContext = createContext({
	breakpoint: () => {},
	isLoading: "",
	setIsLoading: () => {},
	isAuthenticated: "",
	setIsAuthenticated: () => {},
	axiosInstance: undefined,
	accentColor: "",
	setAccentColor: () => {},
});

export default GlobalContext;
