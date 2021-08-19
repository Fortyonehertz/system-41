import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button, { ButtonProps } from '../components/Button';
import { Scale } from '../constants/System';
import ThemeDecorator from './ThemeDecorator';

export default {
	title: 'Button',
	component: Button,
	decorators: [ThemeDecorator],
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: Partial<ButtonProps>) => <Button {...args} />;

export const Small = Template.bind({});
Small.args = {
	scale: Scale.SMALL,
	children: 'Small',
};

export const Medium = Template.bind({});
Medium.args = {
	scale: Scale.MEDIUM,
	children: 'Medium',
};

export const Large = Template.bind({});
Large.args = {
	scale: Scale.LARGE,
	children: 'Large',
};
