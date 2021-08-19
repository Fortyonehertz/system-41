import Color from 'color';
import { ColorScheme } from './System';
import { ITheme } from './Theme';

interface IScheme {
	main: string;
	// hover: string;
}

export type Schemes = {
	[key in ColorScheme]: IScheme;
};

export function contrastLight(colorString: string) {
	const color = Color(colorString);
	console.log(color);
}

export function contrastDark() {
	return undefined;
}

export function getTextColor(colorString: string, theme: ITheme) {
	const color = Color(colorString);
	console.log(
		'Primay Contrast: %d, Secondary Contrast: %d',
		Color(theme.schemes.PRIMARY.main).contrast(color),
		color.contrast(Color(theme.schemes.SECONDARY.main)),
	);
	if (Color(theme.schemes.PRIMARY.main).contrast(color) > color.contrast(Color(theme.schemes.SECONDARY.main))) {
		console.log("It's primary");
		return theme.schemes.PRIMARY.main;
	} else {
		console.log("It's secondary");
		return theme.schemes.SECONDARY.main;
	}
}

export function createScheme() {
	return undefined;
}
