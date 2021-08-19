import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Input, { InputProps } from '../components/Input';
import ThemeDecorator from './ThemeDecorator';

export default {
	title: 'Input',
	component: Input,
	decorators: [ThemeDecorator],
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args: Partial<InputProps>) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => console.log(e.target.value),
};
