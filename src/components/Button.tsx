import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { getTextColor } from '../constants/Color';
import { ColorScheme, Scale, Variant } from '../constants/System';

const ButtonScale: { [key in Scale]: string } = {
	small: '4px 8px',
	medium: '8px 16px',
	large: '16px 32px',
};

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
	scale: Scale;
	variant: Variant;
	scheme: ColorScheme;
}
const Button = (props: Partial<ButtonProps>) => (
	<StyledButton
		{...props}
		scale={props.scale || Scale.SMALL}
		variant={props.variant || Variant.CLOSED}
		scheme={props.scheme || ColorScheme.DEFAULT}
	/>
);

const StyledButton = styled.button<ButtonProps>`
	background-color: ${(props) => props.theme.schemes[props.scheme].main};
	color: ${(props) => getTextColor(props.theme.schemes[props.scheme].main, props.theme)};
	padding: ${(props) => ButtonScale[props.scale]};
	outline: none;
	border: none;
	border-radius: 0;
	font-family: Arial;
	font-scale: 12px;
	cursor: pointer;
	flex-grow: 0;

	&:hover {
		background-color: ${(props) => props.theme.schemes.WARNING.main};
	}
`;

export default Button;
