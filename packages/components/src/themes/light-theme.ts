import { css } from 'lit';

const lightTheme = css`
  :host {

    /* Selection */

    --lit101-selection-color: black;
    --lit101-selection-background-color: var( --lit101-primary-90 );

    /* Applayout */

    --lit101-applayout-background-color: #f0f3f1;

    /* Nav */

    --lit101-nav-logo: black;
    --lit101-nav-background-color: #f0f3f1;
    --lit101-nav-border-right-color: rgba(28, 27, 31, 0.08);

    /* Navitem */

    --lit101-navitem-color: black;
    --lit101-navitem-active-color: #003918;
    --lit101-navitem-active-background-color: var( --lit101-primary-90 );
    /* --lit101-navitem-active-background-color: #92f8ad; */

    /* Card */

    --lit101-card-color: black;
    --lit101-card-background-color: white;
    --lit101-card-elevation-10: var( --lit101-elevation-light-10 );
    --lit101-card-elevation-30: var( --lit101-elevation-light-30 );
    --lit101-card-elevation-50: var( --lit101-elevation-light-50 );
    --lit101-card-elevation-70: var( --lit101-elevation-light-70 );
    --lit101-card-elevation-90: var( --lit101-elevation-light-90 );

    /* Breadcrumb */

    --lit101-breadcrumb-color: black;
    --lit101-breadcrumb-chevron-background-color: black;

    /* Buttonicon */

    --lit101-buttonicon-color: black;
  }
`;

export default lightTheme;
