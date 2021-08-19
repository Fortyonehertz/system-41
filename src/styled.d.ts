import 'styled-components';
import { Schemes } from './constants/Color';

declare module 'styled-components' {
	export interface DefaultTheme {
		schemes: Schemes;
	}
}
