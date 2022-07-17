import PropTypes from 'prop-types';
import {
	FaMapMarkerAlt,
	FaUserAlt,
	FaCalendarAlt,
	FaClock,
} from 'react-icons/fa';
import { formatEventStart, formatEventDuration } from '../utils';
import { Card, CardHeader, Info, Chip } from './Event.styled';

export const Event = ({ name, location, speaker, type, start, end }) => {
	const formattedStart = formatEventStart(start);
	const formattedDuration = formatEventDuration(start, end);
	return (
		<Card>
			<CardHeader>{name}</CardHeader>
			<Info>
				<FaMapMarkerAlt />
				{location}
			</Info>
			<Info>
				<FaUserAlt />
				{speaker}
			</Info>
			<Info>
				<FaCalendarAlt />
				{formattedStart}
			</Info>
			<Info>
				<FaClock />
				{formattedDuration}
			</Info>
			<Chip evtType={type}>{type}</Chip>
		</Card>
	);
};

Event.propTypes = {
	name: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
	speaker: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	start: PropTypes.string.isRequired,
	end: PropTypes.string.isRequired,
};
