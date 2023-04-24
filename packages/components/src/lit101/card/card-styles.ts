import { css, } from 'lit';

const cardStyle = css`
  :host {
    display: block;
    background: var( --lit101-card-background-color, pink );
    border-radius: 16px;
    margin-bottom: 16px;
    color: var( --lit101-card-color, pink );
  }
  :host([elevation="10"]) {
    box-shadow: var( --lit101-card-elevation-10 );
  }
  :host([elevation="20"]) {
    box-shadow: var( --lit101-card-elevation-20 );
  }
  :host([elevation="30"]) {
    box-shadow: var( --lit101-card-elevation-30 );
  }
  :host([elevation="40"]) {
    box-shadow: var( --lit101-card-elevation-40 );
  }
  :host([elevation="50"]) {
    box-shadow: var( --lit101-card-elevation-50 );
  }
`;

export default cardStyle;
