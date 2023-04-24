import { css, unsafeCSS, } from 'lit';

import {
  mediaQueries,
} from '@lit101/styles';

const navStyles = css`
  :host {
    display: flex;
    width: 100%;
    flex-direction: column;
    background-color: var( --lit101-nav-background-color, pink );
    border-right: 1px solid var( --lit101-nav-border-right-color, pink );
    padding: 12px;
    padding-top: 12px;
    position: fixed;
    transform: translateX( -100% );
  }
  #logo {
    all: unset;
  }
  #items {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  @media(${ unsafeCSS( mediaQueries.tablet )}) {
    #logo {
      display: none;
    }
    :host {
      transform: translateX( 0 );
      position: static;
      transition: transform 200ms ease;
    }
  }
  @media(${ unsafeCSS( mediaQueries.desktop )}) {
    :host {
      transform: translateX( 0 );
      position: static;
    }
  }
  #header {
    fill: var( --lit101-nav-logo, pink );
    display: flex;
    justify-content:space-between;
    align-items: center;
    margin-bottom: 32px;
    margin-left: 16px;

  }
  dialog {
    all: unset;
    /* background: transparent;
    border: none;
    position: fixed;

    top: 0; */

  }
  dialog::backdrop {
    /* background: pink; */
  }
  slot[name=logo]::slotted(*) {
    height: 24px;
    display: flex;
  }
`;

export default navStyles;
