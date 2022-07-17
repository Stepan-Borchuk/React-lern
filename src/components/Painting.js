import defaultImage from './default.jpg';
import PropTypes from 'prop-types';

export default function Painting({
	imageUrl = defaultImage,
	title,
	author = 'невідомий автор',
	profileUrl,
	price,
	quantity,
}) {
	return (
		<div>
			<img src={imageUrl} alt={title} width="480" />
			<h2>{title}</h2>
			<p>
				Автор: <a href={profileUrl}>{author}</a>
			</p>
			<p>Ціна: {price} кредитів</p>
			<p>Наявність: {quantity < 10 ? 'закінчується' : 'є достатньо'} </p>
			<button type="button">Додати в кошик</button>
		</div>
	);
}

Painting.propTypes = {
	imageUrl: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired,
	profileUrl: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	quantity: PropTypes.number.isRequired,
};
