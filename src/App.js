import PaintingList from './components/PaintingList';
import Section from './components/Section';
import paintings from './paintings.json';

export default function App() {
	return (
		<div>
			<Section title="Потрібно замовити">
				<PaintingList items={paintings} />
			</Section>
			<Section />
		</div>
	);
}
