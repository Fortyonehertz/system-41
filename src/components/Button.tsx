import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { getTextColor } from '../constants/Color';
import { ColorScheme, Size, Variant } from '../constants/System';

const ButtonSize: { [key in Size]: string } = {
	small: '4px 8px',
	medium: '8px 16px',
	large: '16px 32px',
};

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
	size: Size;
	variant: Variant;
	scheme: ColorScheme;
}
const Button = (props: Partial<ButtonProps>) => (
	<StyledButton
		{...props}
		size={props.size || Size.SMALL}
		variant={props.variant || Variant.CLOSED}
		scheme={props.scheme || ColorScheme.DEFAULT}
	/>
);

const StyledButton = styled.button<ButtonProps>`
	background-color: ${(props) => props.theme.schemes[props.scheme].main};
	color: ${(props) => getTextColor(props.theme.schemes[props.scheme].main, props.theme)};
	padding: ${(props) => ButtonSize[props.size]};
	outline: none;
	border: none;
	border-radius: 0;
	font-family: Arial;
	font-size: 12px;
	cursor: pointer;

	&:hover {
		background-color: ${(props) => props.theme.schemes.WARNING.main};
	}
`;

export default Button;
