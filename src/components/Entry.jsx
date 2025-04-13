export default function Entry(entryData) {
	console.log(entryData);
	return (
		<>
			<main className="entry">
				<div className="entry-photo-container">
					<img
						src={entryData.image.src}
						alt={entryData.image.alt}
						className="entry-photo"
					/>
				</div>

				<div className="entry-details">
					<div className="entry-location">
						<div className="entry-location-name">
							<img
								src="/src/assets/location-icon.svg"
								alt="Location icon"
								className="location-icon"
							/>
							<span className="entry-name">{entryData.country}</span>
						</div>
						<a href={entryData.googMapsLink} className="entry-map">
							View on Google Maps
						</a>
					</div>
					<div>
						<h1 className="entry-area">{entryData.title}</h1>
						<p className="date">{entryData.dates}</p>
						<p className="entry-description">{entryData.description}</p>
					</div>
				</div>
			</main>
		</>
	);
}
