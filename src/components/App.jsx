// import PaintingList from './components/PaintingList';
// import Section from './components/Section';
// import paintings from './paintings.json';
import { PageTitle } from 'components/Pagetitle/Pagetitle';
import { EventBoard } from 'components/EventBoard/EventBoard';
import upcomingEvents from 'upcoming-events.json';

export const App = () => {
	return (
		<>
			{/* <Section title="Потрібно замовити">
				<PaintingList items={paintings} />
			</Section>
			<Section /> */}
			<PageTitle text="24th Core Worlds Coalition Conference" />
			<EventBoard events={upcomingEvents} />
		</>
	);
};
