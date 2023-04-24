import { css, unsafeCSS, } from 'lit';

import {
  mediaQueries,
} from '@lit101/styles';

const applayoutStyles = css`
  :host {
    display: grid;
    grid-template: 1fr / auto 1fr;
    min-height: 100vh;
    background-color: var( --lit101-applayout-background-color, pink );
    /* background-color: var( --lit101-applayout-background-color, #f0f3f1 ); */
  }
  @media(${ unsafeCSS( mediaQueries.mobile )}) {
    :host {
      grid-template: 1fr / 1fr;
    }
  }
`;

export default applayoutStyles;
