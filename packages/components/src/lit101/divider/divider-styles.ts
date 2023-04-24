import { css, } from 'lit';

const dividerStyles = css`
  :host {
    display: flex;
    border-right: 1px solid rgba(28, 27, 31, 0.12);
    min-height: 24px;
  }
  :host([direction=row]) {

    border-right: none;
    border-top: 1px solid rgba(28, 27, 31, 0.12);
    margin: 0 24px;
    min-height: auto;
  }
`;

export default dividerStyles;
