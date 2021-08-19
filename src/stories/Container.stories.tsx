import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Container, { ContainerProps } from '../components/Container';
import ThemeDecorator from './ThemeDecorator';
import Button from '../components/Button';
import { ColorScheme } from '../constants/System';

export default {
	title: 'Container',
	component: Container,
	decorators: [ThemeDecorator],
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args: Partial<ContainerProps>) => (
	<Container scheme={ColorScheme.PRIMARY} style={{ height: '95vh' }}>
		<Container {...args}>
			<Button>Hello</Button>
		</Container>
	</Container>
);

export const Default = Template.bind({});
Default.args = {};
