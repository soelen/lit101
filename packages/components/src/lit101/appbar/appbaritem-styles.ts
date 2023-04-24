import { css, } from 'lit';

const appbaritemStyles = css`
  :host {
    display: flex;
  }
  ::slotted(svg) {
    display: flex;
    fill: var( --lit101-buttonicon-color, pink );
    width: 16px;
    height: 16px;
  }
  :host([size=large]) ::slotted(svg) {
    height: 24px;
    width: 24px;
  }
  button {
    all: unset;
    padding: 12px;
    display: flex;
    transition: background-color 200ms ease;
    border-radius: 50rem;
    cursor: pointer;
  }
  button:is(:hover, :focus) {
    background-color: rgba( 0, 0, 0, .05 );
  }
  button:is(:active) {
    background-color: rgba( 0, 0, 0, .1 );
  }
`;

export default appbaritemStyles;
