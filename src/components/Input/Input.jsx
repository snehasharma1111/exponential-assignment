import "./input.scss";
import PropTypes from "prop-types";

const Input = ({
	label,
	className,
	children,
	boxStyle,
	placeholder,
	value,
	onChange,
	...rest
}) => {
	return (
		<div className="input-group" style={boxStyle}>
			{label ? <label className="input-label">{label}</label> : null}
			<input
				{...rest}
				className="input"
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			></input>
			{children}
		</div>
	);
};

export default Input;

Input.propTypes = {
	label: PropTypes.string,
};
