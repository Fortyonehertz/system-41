import React from 'react';
import styled from 'styled-components';
import { ColorScheme, Size } from '../constants/System';
import Button from './Button';

export interface ContainerProps {
	scheme?: ColorScheme;
}

export default function Container(props: ContainerProps) {
	return (
		<StyledContainer scheme={props.scheme || ColorScheme.DEFAULT}>
			<NewButton>Button Test</NewButton>
		</StyledContainer>
	);
}

const NewButton = styled(Button)`
	background-color: purple;
`;

interface StyledContainerProps {
	scheme: ColorScheme;
}

const StyledContainer = styled.div<StyledContainerProps>``;
