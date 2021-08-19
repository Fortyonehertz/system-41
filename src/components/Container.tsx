import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { ColorScheme, Direction } from '../constants/System';

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
	scheme: ColorScheme;
	direction: Direction;
}

export default function Container(props: Partial<ContainerProps>) {
	return (
		<StyledContainer
			{...props}
			scheme={props.scheme || ColorScheme.DEFAULT}
			direction={props.direction || Direction.ROW}
		/>
	);
}

const StyledContainer = styled.div<ContainerProps>`
	position: relative;
	min-height: 100%;
	min-width: 100%;
	background-color: ${(props) => props.theme.schemes[props.scheme].main};
	display: flex;
	flex-direction: ${(props) => (props.direction === Direction.COLUMN ? 'column' : 'row')};
	align-items: flex-start;
`;
