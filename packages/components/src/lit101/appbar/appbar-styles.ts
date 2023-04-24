import { css, unsafeCSS, } from 'lit';

import {
  mediaQueries,
} from '@lit101/styles';

const appbarStyles = css`
:host {
  display: flex;
  margin-bottom: 16px;
  padding: 16px 16px;
  justify-content: flex-end;
}
#start {
  display: none;
}
@media(${ unsafeCSS( mediaQueries.mobile )}) {
  :host {
    justify-content: space-between;
  }
  #start {
    display: flex;
  }
}
#end {
  display: flex;
  align-items: center;
  gap: 16px;
}
`;

export default appbarStyles;
