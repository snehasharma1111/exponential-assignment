import React, { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";
import MaterialIcons from "../MaterialIcons";
import "./input.scss";

const Input = ({
	name,
	placeholder,
	type,
	autoFocus,
	disabled,
	icon,
	...rest
}) => {
	const { accentColor } = useContext(GlobalContext);
	return (
		<div className="form-group">
			<label
				style={{
					color: document.body.classList.contains("dark")
						? `var(--${accentColor}-100)`
						: `var(--${accentColor})`,
				}}
			>
				<MaterialIcons>{icon}</MaterialIcons>
			</label>
			<input
				name={name}
				placeholder={placeholder}
				type={type}
				autoFocus={autoFocus}
				disabled={disabled}
				{...rest}
			></input>
		</div>
	);
};

const TextArea = ({
	name,
	placeholder,
	type,
	autoFocus,
	disabled,
	icon,
	...rest
}) => {
	const { accentColor } = useContext(GlobalContext);
	return (
		<div className="form-group">
			<label
				style={{
					top: 0,
					transform: "translate(50%, 25%)",
					color: document.body.classList.contains("dark")
						? `var(--${accentColor}-100)`
						: `var(--${accentColor})`,
				}}
			>
				<MaterialIcons>{icon}</MaterialIcons>
			</label>
			<textarea
				name={name}
				placeholder={placeholder}
				type={type}
				autoFocus={autoFocus}
				disabled={disabled}
				{...rest}
			></textarea>
		</div>
	);
};

export default Input;
export { TextArea };
