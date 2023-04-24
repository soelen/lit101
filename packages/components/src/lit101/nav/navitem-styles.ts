import { css, unsafeCSS, } from 'lit';

import {
  mediaQueries,
} from '@lit101/styles';

const navitemStyles = css`
  :host {
    display: block;
  }
  button {
    all: unset;
    cursor: pointer;
    color: var( --lit101-navitem-color, pink );
    /* box-sizing: border-box; */
    display: flex;
    align-items:center;
    gap: 12px;
    width: 100%;
    padding: 16px 24px;
    border-radius: 50rem;
    transition: background-color 200ms ease;
  }
  button:is(:hover, :focus) {
    background-color: rgba(0, 0, 0, .1)
  }
  :host([active]) button {
    background-color: var( --lit101-navitem-active-background-color, pink );
    color: var( --lit101-navitem-active-color, pink );
  }
  :host([active]) slot[name=icon]::slotted(*) {
    fill: var( --lit101-navitem-active-color, pink );
  }
  slot[name=icon]::slotted(*) {
    fill: var( --lit101-navitem-color, pink );
    width: 24px;
    height: 24px;
  }
  @media(${ unsafeCSS( mediaQueries.tablet )}) {
    #text {
      display: none;
    }
  }
`;

export default navitemStyles;
