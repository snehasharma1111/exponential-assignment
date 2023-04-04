import React, { useState } from "react";
import "./home.scss";
import { bg } from "../../images";
import Input from "../../components/Input/Input";
import { Clipboard, Download } from "react-feather";
import { matchTwitterStatusUrl } from "../../utils";

const Home = () => {
	const [link, setLink] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (matchTwitterStatusUrl(link)) {
			alert("download");
		} else alert("Invalid URL");
	};

	return (
		<main
			className="home"
			style={{
				backgroundImage: `url(${bg})`,
			}}
		>
			<div className="home-content">
				Paste any twitter post link to get started
			</div>
			<form className="home-form" onSubmit={handleSubmit}>
				<Input
					placeholder="Paste your link here"
					value={link}
					type="url"
					onChange={(e) => setLink(e.target.value)}
				>
					<div className="home-form-buttons">
						<button className="home-form-button" type="submit">
							<Download />
						</button>
						<button
							className="home-form-button"
							onClick={(e) => {
								e.preventDefault();
								navigator.clipboard.readText().then((text) => {
									setLink(text);
								});
							}}
							type="clear"
						>
							<Clipboard />
						</button>
					</div>
					<button className="dispn" type="submit"></button>
				</Input>
			</form>
		</main>
	);
};

export default Home;
