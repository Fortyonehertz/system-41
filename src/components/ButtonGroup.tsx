import React, { HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';
import { Size, Variant, ColorScheme } from '../constants/System';
import { Spacing } from '../constants/Scale';
import Button, { ButtonProps } from './Button';
import { v4 as uuid4 } from 'uuid';

interface ChildButtonProps extends ButtonProps {
	label: string;
}

export interface ButtonGroupProps extends HTMLAttributes<HTMLDivElement> {
	buttons: Partial<ChildButtonProps>[];
	size?: Size;
	variant?: Variant;
	scheme?: ColorScheme;
	className?: string;
}

export default function ButtonGroup(props: ButtonGroupProps) {
	return (
		<StyledButtonGroup
			{...props}
			size={props.size || Size.SMALL}
			variant={props.variant || Variant.CLOSED}
			scheme={props.scheme || ColorScheme.DEFAULT}
		>
			{props.buttons.map((button: Partial<ChildButtonProps>) => {
				return (
					<Button key={uuid4()} {...button}>
						{button.label}
					</Button>
				);
			})}
		</StyledButtonGroup>
	);
}

interface StyledButtonGroupProps {
	size: Size;
	variant: Variant;
	scheme: ColorScheme;
}

const StyledButtonGroup = styled.div<StyledButtonGroupProps>`
	display: flex;
	justify-content: end;
	border: 1px solid black;

	> button {
		margin-left: ${Spacing.sm};
	}
`;
