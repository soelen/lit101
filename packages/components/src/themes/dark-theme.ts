import { css } from 'lit';

const darkTheme = css`
  :host {

    /* Selection */

    --lit101-selection-color: #003918;
    --lit101-selection-background-color: #92f8ad;

    /* Applayout */

    --lit101-applayout-background-color: #1c1b1f;

    /* Nav */

    --lit101-nav-logo: white;
    --lit101-nav-background-color: #1c1b1f;
    --lit101-nav-border-right-color: rgba(255, 255, 255, 0.08);

    /* Navitem */

    --lit101-navitem-color: #c4c8c5;
    /* --lit101-navitem-background-color: #003918; */
    --lit101-navitem-active-color: #92f8ad;
    --lit101-navitem-active-background-color: #003918;

    /* Card */

    --lit101-card-color: white;
    --lit101-card-background-color: #2e2d31;
    --lit101-card-elevation-10: var( --lit101-elevation-dark-10 );
    --lit101-card-elevation-30: var( --lit101-elevation-dark-30 );
    --lit101-card-elevation-50: var( --lit101-elevation-dark-50 );
    --lit101-card-elevation-70: var( --lit101-elevation-dark-70 );
    --lit101-card-elevation-90: var( --lit101-elevation-dark-90 );

    /* Breadcrumb */

    --lit101-breadcrumb-color: white;
    --lit101-breadcrumb-chevron-background-color: white;

    /* Buttonicon */

    --lit101-buttonicon-color: white;
  }
`;

export default darkTheme;
