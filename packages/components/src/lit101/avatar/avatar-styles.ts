import { css, } from 'lit';

const avatarStyles = css`
  :host {
    display: block;
  }
  svg {
    display: block;
    width: 24px;
    height: 24px;
  }
  circle {
    fill: pink;
  }
  text {
    font: 12px sans-serif;
  }
`;

export default avatarStyles;
