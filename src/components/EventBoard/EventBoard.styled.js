import styled from '@emotion/styled';

export const Board = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(240px, auto));
	gap: ${props => props.theme.spacing(6)};
	padding-left: ${props => props.theme.spacing(4)};
	padding-right: ${props => props.theme.spacing(4)};
`;
