import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../src/styles/GlobalStyles';
import theme from '../src/styles/theme';
import { MemoryRouter } from 'react-router-dom';
import { addDecorator } from '@storybook/react';

export const decorators = [
	(Story) => (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Story />
		</ThemeProvider>
	),
];

addDecorator(
    (story) =>
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
);

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};
