import styled from '@emotion/styled';

export const Card = styled.div`
	position: relative;
	border: ${props =>
		`${props.theme.spacing(0.5)} dashed ${props.theme.colors.black}`};
	padding: ${props => props.theme.spacing(2)};
	border-radius: ${props => props.theme.spacing(1)};
`;

export const CardHeader = styled.h2`
	margin-top: 0;
	font-size: 14px;
	line-height: ${props => props.theme.spacing(6)};
	font-weight: 700;
	letter-spacing: 0.5px;
	text-transform: uppercase;
`;

export const Info = styled.p`
	display: flex;
	align-items: center;
	margin-top: 0;
	margin-bottom: ${props => props.theme.spacing(2)};
	color: ${props => props.theme.colors.primaryText};
	font-size: ${props => props.theme.spacing(4)};
	line-height: ${props => props.theme.spacing(6)};
	font-weight: 400;
	letter-spacing: 0.25px;

	:hover {
		color: violet;
	}

	svg {
		display: block;
		margin-right: ${props => props.theme.spacing(2)};
		color: ${props => props.theme.colors.secondaryText};
	}
`;

const setBgColor = ({ evtType, theme }) => {
	switch (evtType) {
		case 'free':
			return theme.colors.green;
		case 'paid':
			return theme.colors.blue;
		case 'vip':
			return theme.colors.red;
		default:
			return theme.colors.black;
	}
};

export const Chip = styled.span`
	position: absolute;
	top: ${props => props.theme.spacing(1)};
	right: ${props => props.theme.spacing(1)};
	padding: ${props => props.theme.spacing(1)} ${props => props.theme.spacing(2)};
	border-radius: ${props => props.theme.spacing(1)};
	text-transform: uppercase;
	background-color: ${props => props.theme.colors.black};
	color: ${props => props.theme.colors.white};

	background-color: ${setBgColor};
`;
