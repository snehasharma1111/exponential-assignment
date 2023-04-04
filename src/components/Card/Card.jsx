import { Image } from "react-feather";
import "./Card.scss";
import Button from "../Button/Button";

const Card = ({ image }) => {
	const downloadImage = (e) => {
		e.preventDefault();
		const link = document.createElement("a");
		link.href = image;
		link.setAttribute("download", image);
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};
	return (
		<div className="card">
			<div className="card-image">
				<img src={image} alt="twitter card" />
			</div>
			<div className="card-button">
				{/* <button
					className="card-btn card-btn-fill"
                    >
					
				</button> */}
				<Button
					onClick={downloadImage}
					text={
						<>
							<Image />
							Download
						</>
					}
					variant="fill"
				/>
			</div>
		</div>
	);
};

export default Card;
