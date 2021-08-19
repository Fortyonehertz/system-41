import React from 'react';
import styled from 'styled-components';

export interface ButtonProps {
	size: 'large' | 'small';
	sdui: 'hello';
}

const varia = 'hello';

export default function Button(props: ButtonProps) {
	return <StyledButton></StyledButton>;
}

const StyledButton = styled.button<Partial<ButtonProps>>``;
