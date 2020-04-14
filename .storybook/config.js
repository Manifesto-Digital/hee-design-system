import { configure, addParameters, addDecorator } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import '../src/all.scss';
import './_storybook.scss';
import NHSTheme from './theme';

addParameters({
  options: {
    theme: NHSTheme,
    showRoots: true,
    storySort: {
      method: 'alphabetical', 
      order: ['Design System', 'Screens', 'NHSUK', 'NHSUK Ext'], // Optional, defaults to [].
    },
  },
});

addDecorator(withA11y);

configure(require.context('../stories', true, /\.stories\.(tsx|mdx)$/), module);
