import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ButtonGroup, { ButtonGroupProps } from '../components/ButtonGroup';
import ThemeDecorator from './ThemeDecorator';
import Button from '../components/Button';

export default {
	title: 'ButtonGroup',
	component: ButtonGroup,
	decorators: [ThemeDecorator],
} as ComponentMeta<typeof ButtonGroup>;

const Template: ComponentStory<typeof ButtonGroup> = (args: ButtonGroupProps) => (
	<ButtonGroup {...args}>
		<Button>First Button</Button>
		<Button>Second Button</Button>
		<Button>Third Button</Button>
	</ButtonGroup>
);

export const Default = Template.bind({});
Default.args = {
	buttons: [{ label: 'First' }, { label: 'Second' }, { label: 'Third' }],
};
