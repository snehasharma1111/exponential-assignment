import React, { useState } from "react";
import "./home.scss";
import { bg, bg2 } from "../../images";
import Input from "../../components/Input/Input";
import { Box, Clipboard, Download } from "react-feather";
import { matchTwitterStatusUrl } from "../../utils";
import axios from "axios";
import Row, { Col } from "../../layout/Responsive";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import { apiKey } from "../../constants";

const Home = () => {
	const [link, setLink] = useState("");
	const [images, setImages] = useState({});

	const handleSubmit = (e) => {
		e.preventDefault();
		if (matchTwitterStatusUrl(link)) {
			axios
				.post(
					"https://tweet-image.exponential.host/image",
					{
						twitterUrl: link,
						imageType: "square",
						templates: [
							"crisp",
							"blurredlogo",
							"highlight",
							"orangecandy",
							"speechbubble",
							"twitterblue",
						],
					},
					{
						headers: {
							"Content-Type": "application/json",
							exponential_api_secret: apiKey,
						},
					}
				)
				.then((res) => {
					setImages(res.data);
				})
				.catch((err) => {
					console.error(err);
					alert("An Error Occured. Try refreshing the page");
					setImages({});
				});
		} else alert("Invalid URL");
	};

	return (
		<main
			className="home"
			style={
				Object.keys(images).length > 0
					? {
							backgroundImage: `url(${bg2})`,
							backgroundPositionX: "center",
							backgroundPositionY: "bottom",
					  }
					: {
							backgroundImage: `url(${bg})`,
							backgroundPosition: "center",
					  }
			}
		>
			{Object.keys(images).length > 0 ? (
				<>
					<div className="home-images">
						<Row>
							{Object.values(images).map((image, index) => (
								<Col lg={33} md={50} sm={100}>
									<Card image={image} key={index} />
								</Col>
							))}
						</Row>
					</div>
					<div className="home-retry">
						<Button
							text={
								<>
									<Box />
									Enter different URL
								</>
							}
							onClick={(e) => {
								e.preventDefault();
								setImages({});
							}}
						/>
					</div>
				</>
			) : (
				<>
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
								<button
									className="home-form-button"
									type="submit"
								>
									<Download />
								</button>
								<button
									className="home-form-button"
									onClick={(e) => {
										e.preventDefault();
										navigator.clipboard
											.readText()
											.then((text) => {
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
				</>
			)}
		</main>
	);
};

export default Home;
