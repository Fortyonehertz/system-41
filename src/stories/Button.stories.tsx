import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button, { ButtonProps } from '../components/Button';
import { Size } from '../constants/System';
import ThemeDecorator from './ThemeDecorator';

export default {
	title: 'Button',
	component: Button,
	decorators: [ThemeDecorator],
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: ButtonProps) => <Button {...args} />;

export const Small = Template.bind({});
Small.args = {
	size: Size.SMALL,
	children: 'Small',
};

export const Medium = Template.bind({});
Medium.args = {
	size: Size.MEDIUM,
	children: 'Medium',
};

export const Large = Template.bind({});
Large.args = {
	size: Size.LARGE,
	children: 'Large',
};
