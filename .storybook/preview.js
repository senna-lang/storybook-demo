/** @type { import('@storybook/react').Preview } */
import { initialize, mswLoader } from 'msw-storybook-addon';
import '../src/index.css';

initialize();

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      toc: true,
    },
  },
  loaders: [mswLoader],
};

export default preview;
