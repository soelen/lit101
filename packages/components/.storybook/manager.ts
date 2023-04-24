import { addons } from '@storybook/manager-api';
import { themes } from '@storybook/theming';

import { create } from '@storybook/theming/create';

const theme = create({
  base: 'light',
  brandTitle: 'My custom Storybook',
  brandUrl: 'https://example.com',
  brandImage: 'http://localhost:6006/.storybook/lit101-design-system.svg',
  brandTarget: '_self',
  barSelectedColor: '#ff00ff',
  colorSecondary:'#ff00ff',
});

addons.setConfig({
  theme: theme,

  toolbar: {
    background: { hidden: true },

  }
});
