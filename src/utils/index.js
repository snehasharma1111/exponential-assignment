// This is a collection of some useful functions in JavaScript, which have been proved useful to many of my projects

// Max and Min

export const max = (a, b) => (a > b ? a : b);
export const min = (a, b) => (a < b ? a : b);

// The Sleep function for to delay the execution of a process

export const sleep = (seconds) =>
	new Promise((resolve) => setTimeout(resolve, seconds * 1000));

// The function to copy the text to the clipboard

export const copy = (text) => navigator.clipboard.writeText(text);

// The function to omit a particluar key from an object

export const omit = (key, { [key]: _, ...rest }) => rest;

// The function to produce random numbers between a range

export const random = (min, max) =>
	Math.floor(Math.random() * (max - min + 1)) + min;

export const matchTwitterStatusUrl = (str) =>
	str.match(
		/http(?:s)?:\/\/(?:www\.)?twitter\.com\/([a-zA-Z0-9_]+)\/status\/([a-zA-Z0-9_]+)/
	);
