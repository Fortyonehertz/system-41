import React, { HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';
import { Scale, Variant, ColorScheme } from '../constants/System';

export interface InputProps extends HTMLAttributes<HTMLInputElement> {
	variant: Variant;
	scheme: ColorScheme;
}

export default function Input(props: Partial<InputProps>) {
	return <StyledInput {...props} />;
}

const StyledInput = styled.input``;
