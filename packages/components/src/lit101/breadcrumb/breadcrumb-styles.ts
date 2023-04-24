import { css, unsafeCSS, } from 'lit';

import {
  chevronRightSVG,
} from '@lit101/icons';

const encode = () => {
  return `data:image/svg+xml,${ encodeURIComponent( chevronRightSVG ) }`
}

const breadcrumbStyles = css`
  :host {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    margin-bottom: 16px;
    align-items: center;
    font-size: 14px;
    color: #787e7a;
  }

  ::slotted(button), ::slotted(a) {
    all: unset;
    display: flex;
    text-align: left;
    font-size: 14px;
    cursor: pointer;
    border-radius: 50rem;
    padding: 8px;
    user-select: none;
    align-items: center;
    color: #464f49;
    transition: background-color 200ms ease;
    background-color: transparent;
  }

  ::slotted(button:hover),
  ::slotted(a:hover),
  ::slotted(button:focus),
  ::slotted(a:focus) {
    background: rgba( 0, 0, 0, .1 );
  }
  ::slotted(button)::after,
  ::slotted(a)::after {
      content: '';
      mask: url(${ unsafeCSS( encode() ) }) no-repeat 50% 50%;
      mask-size: cover;
      -webkit-mask: url(${ unsafeCSS( encode() ) }) no-repeat 50% 50%;
      -webkit-mask-size: cover;
      background-color: var( --lit101-breadcrumb-chevron-background-color, pink );

    margin-left: 8px;
    display: block;
    width: 14px;
    height: 14px;
  }
`;

export default breadcrumbStyles;
