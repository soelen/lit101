import React from 'react';
import type { Preview } from "@storybook/web-components";
import { html, css, LitElement } from 'lit';
import { DARK_MODE_EVENT_NAME } from 'storybook-dark-mode';
import { addons } from '@storybook/preview-api';
import { Channel } from '@storybook/channels';
import { state, customElement } from 'lit/decorators.js';
import { themes } from '@storybook/theming/create';
import { DocsContainer } from '@storybook/addon-docs';

import './components/storybook-tip';
import './components/storybook-linklist';
import './components/storybook-linklistitem';
import './components/storybook-playgrounds';

import {
  UPDATE_DARK_MODE_EVENT_NAME
} from 'storybook-dark-mode';

// import '@lit101/styles/variables.css';

@customElement( 'theme-wrapper' )
class ThemeWrapper extends LitElement {

  channel: Channel;
  @state() _dark: boolean = false;

  constructor() {
    super();
    this.channel = addons.getChannel();
  }

  setDark = ( dark: boolean ) => {
    this._dark = dark;
  }

  connectedCallback() {
    super.connectedCallback();
    this.channel.on( 'DARK_MODE', this.setDark );
  }

  disconnectedCallback() {
    this.channel.off( 'DARK_MODE', this.setDark );
    super.disconnectedCallback();
  }

  render() {
    return html`<lit101-theme name="${ this._dark ? 'dark' : 'light' }"><slot></slot></lit101-theme>`
  }
}
const channel = addons.getChannel();


const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        method: 'alphabetical',
        order: [ 'About', 'Styles', 'Components', 'Icons', ],
      },
    },
    docs: {
    },
    darkMode: {
      stylePreview: true,
      dark: {
        ...themes.dark,
        brandImage: 'http://localhost:6006/.storybook/lit101-design-system-white.svg',
        colorSecondary:'#0f844b',
        barSelectedColor: '#92f8ad',
        appBg: '#1c1b1f',
      },
      light: {
        ...themes.light,
        barSelectedColor: '#0f844b',
        brandImage: 'http://localhost:6006/.storybook/lit101-design-system.svg',
        // barTextColor: '#ff00ff',
        colorSecondary:'#0f844b',
        appBg: '#f0f3f1',
      },
      test: {
        base : "light",
        appBg: '#f0f3f1',
        appBorderColor : "#00ff0099",
        appBorderRadius : 16,
        appContentBg : "#00ff00",
        barBg : "#000ff",
        barSelectedColor : "#ffff00",
        barTextColor : "#00ffff",
        booleanBg : "#ff00ff",
        booleanSelectedBg : "#123456",
        buttonBg : "#f0f0f0",
        buttonBorder : "#0f0f0f",
        colorPrimary : "#ff00ff",
        colorSecondary : "#000fff",
        inputBg : "#f0000f",
        inputBorder : "ff00ff99",
        inputBorderRadius : 30,
        inputTextColor : "#0ffff0",
        textColor : "#0fff00",
        textInverseColor : "#00fff0",
        textMutedColor : "#ff000f",
      }
    },

    // darkMode: {
    // // Override the default dark theme
    // // Override the default light theme
    // light: { appBg: 'red' }
    // }
  },
  decorators:[
    (Story) => html`<theme-wrapper>${Story()}</theme-wrapper>`
  ]
};

export default preview;
