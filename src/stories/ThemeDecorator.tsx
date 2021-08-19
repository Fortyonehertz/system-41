import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../constants/Theme';

const ThemeDecorator = (storyFn: () => ReactNode) => <ThemeProvider theme={defaultTheme}>{storyFn()}</ThemeProvider>;

export default ThemeDecorator;
