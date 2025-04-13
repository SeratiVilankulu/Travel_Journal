import Entry from "./components/Entry";
import Header from "./components/Header";
import data from "./data";

export default function App() {
	const journalData = data.map((entry) => {
		return (
			<Entry
				key={entry.id}
				image={entry.img}
				title={entry.title}
				country={entry.country}
				googleMapsLink={entry.googleMapsLink}
				dates={entry.dates}
				description={entry.text}
			/>
		);
	});

	console.log(journalData);

	return (
		<>
			<Header />
			<main className="container">{journalData}</main>
		</>
	);
}
