export default function Entry() {
	return (
		<>
			<main className="entry">
				<img
					src="https://scrimba.com/links/travel-journal-japan-image-url"
					alt=" Photo of Japan"
					className="entry--photo"
				/>

				<div className="entry-details">
					<div className="entry-location">
						<div className="entry-location-name">
							<img
								src="/src/assets/location-icon.svg"
								alt="Location icon"
								className="location-icon"
							/>
							<span className="entry-name">JAPAN</span>
						</div>
						<span className="entry-map">View on Google Maps</span>
					</div>
					<div>
						<h1 className="entry-area">Mount Fuji</h1>
						<p className="date">12 Jan, 2021 - 24 Jan, 2021</p>
						<p className="entry-description">
							{" "}
							Mount Fuji is the tallest mountain in Japan, standing at 3,776
							meters (12,380 feet). Mount Fuji is the single most popular
							tourist site in Japan, for both Japanese and foreign tourists.
						</p>
					</div>
				</div>
			</main>
		</>
	);
}
