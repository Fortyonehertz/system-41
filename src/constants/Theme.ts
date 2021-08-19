import { Schemes } from './Color';

export interface ITheme {
	schemes: Schemes;
}

export const defaultTheme: ITheme = {
	schemes: {
		DEFAULT: {
			main: 'gray',
		},
		PRIMARY: {
			main: 'white',
		},
		SECONDARY: {
			main: 'black',
		},
		DISABLED: {
			main: 'darkgrey',
		},
		BRAND: {
			main: 'orange',
		},
		ACCENT: {
			main: 'lightblue',
		},
		SUCCESS: {
			main: 'green',
		},
		INFO: {
			main: 'lightblue',
		},
		WARNING: {
			main: 'yellow',
		},
		ERROR: {
			main: 'red',
		},
	},
};
