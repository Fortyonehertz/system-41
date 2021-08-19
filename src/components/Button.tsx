import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { contrastLight, getTextColor } from '../constants/Color';
import { ColorScheme, Size, Variant } from '../constants/System';

export interface ButtonProps {
	size?: Size;
	variant?: Variant;
	scheme?: ColorScheme;
	children?: ReactNode;
	className?: string;
}

export default function Button(props: ButtonProps) {
	return (
		<StyledButton
			scheme={props.scheme || ColorScheme.DEFAULT}
			size={props.size || Size.SMALL}
			variant={props.variant || Variant.CLOSED}
			className={props.className}
			onClick={() => contrastLight('red')}
		>
			{props.children}
		</StyledButton>
	);
}

const ButtonSize: { [key in Size]: string } = {
	small: '4px 8px',
	medium: '8px 16px',
	large: '16px 32px',
};

interface StyledButtonProps {
	size: Size;
	variant: Variant;
	scheme: ColorScheme;
	// children: ReactNode;
}
const StyledButton = styled.button<StyledButtonProps>`
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
