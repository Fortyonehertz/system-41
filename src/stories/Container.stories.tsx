import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Container, { ContainerProps } from '../components/Container';
import { Size } from '../constants/System';
import ThemeDecorator from './ThemeDecorator';

export default {
	title: 'Container',
	component: Container,
	decorators: [ThemeDecorator],
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args: ContainerProps) => <Container {...args} />;

export const Default = Template.bind({});
Default.args = {};
