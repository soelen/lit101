import { css, unsafeCSS } from 'lit';

import {
  breakpoints,
  mediaQueries,
} from '@lit101/styles';

const containerStyles = css`
  :host {
    display: block;
    margin: auto;
    padding: 0 16px;
  }
  @media(${ unsafeCSS( mediaQueries.xsAndSm )}) {
    :host {
      max-width: calc(${ unsafeCSS( breakpoints.sm.end )} - 20px);
    }
  }
  @media(${ unsafeCSS( mediaQueries.smAndMd )}) {
    :host {
      max-width: calc(${ unsafeCSS( breakpoints.md.end )} - 20px);
    }
  }
  @media(${ unsafeCSS( mediaQueries.mdAndLg )}) {
    :host {
      max-width: calc(${ unsafeCSS( breakpoints.lg.end )} - 20px);
    }
  }
  @media(${ unsafeCSS( mediaQueries.lgAndXl )}) {
    :host {
      max-width: calc(${ unsafeCSS( breakpoints.lg.end )} - 20px);
    }
  }
  @media(${ unsafeCSS( mediaQueries.xlAndBeyond )}) {
    :host {
      max-width: calc(${ unsafeCSS( breakpoints.xl.start )} + 20px);
    }
  }
`;

export default containerStyles;
